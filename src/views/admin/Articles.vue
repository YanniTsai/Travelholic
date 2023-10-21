<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="text-end mt-3">
    <button class="btn btn-primary" @click.prevent="openModal(true)">
      新增文章
    </button>
  </div>
  <table class="table">
    <thead>
      <tr>
        <th class="col-2">標題</th>
        <th class="col-1">作者</th>
        <th>建立時間</th>
        <th>tag</th>
        <th class="col-3">文章說明</th>
        <th class="text-center">公開</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in articles" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.author }}</td>
        <td>{{ $filters.date(item.create_at) }}</td>
        <td>
          <ul class="list-unstyled" v-if="item.tag">
            <li v-for="(i, i_key) in item.tag" :key="i_key">
              {{ `${i},` }}
            </li>
          </ul>
        </td>
        <td>{{ item.description }}</td>
        <td class="text-center">
            <span class="text-success" v-if="item.isPublic">已公開</span>
            <span class="text-secondary" v-else>不公開</span>
        </td>
        <td>
          <button
            class="btn btn-outline-primary btn-sm"
            @click.prevent="openModal(false, item.id)"
          >
            編輯
          </button>
          <button class="btn btn-outline-danger btn-sm" @click="openDeleteModal(item)">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <ArticleModal ref="articleModal" :article="tempArticle" @update-article="updateArticle"></ArticleModal>
  <DeleteModal ref="deleteModal" :title="tempArticle.title" @delete-item="deleteArticle"></DeleteModal>
  <Pagination :pagination="pagination" @update-page="getArticle"></Pagination>
</template>

<script>
import ArticleModal from '../../components/admin/ArticleModal.vue'
import DeleteModal from '../../components/admin/DeleteModal.vue'
import Pagination from '../../components/admin/Pagination.vue'

export default {
  data () {
    return {
      articles: {},
      pagination: {},
      tempArticle: {},
      isLoading: false,
      isNew: false
    }
  },
  components: {
    ArticleModal,
    DeleteModal,
    Pagination
  },
  methods: {
    getArticle (page = 1) {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles/?page=${page}`

      this.$http.get(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.articles = res.data.articles
        this.pagination = res.data.pagination
      })
    },
    openModal (isNew, id) {
      this.isNew = isNew

      if (isNew) {
        this.tempArticle = {
          tag: [],
          isPublic: false
        }
        this.$refs.articleModal.showModal()
      } else {
        this.isLoading = true

        return new Promise((resolve, reject) => {
          const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${id}`

          this.$http.get(api).then((res) => {
            if (res.data.success) {
              console.log(res.data)
              this.tempArticle = res.data.article
              resolve()
            } else {
              const error = new Error('取得文章內容失敗')
              reject(error)
            }
          })
        }).then(() => {
          this.isLoading = false
          this.$refs.articleModal.showModal()
        })
      }
    },
    updateArticle (item) {
      this.isLoading = true
      this.tempArticle = item

      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${item.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: this.tempArticle }).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.$refs.articleModal.hideModal()
        this.getArticle()
      })
    },
    openDeleteModal (item) {
      this.tempArticle = item
      this.$refs.deleteModal.showModal()
    },
    deleteArticle () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`

      this.$http.delete(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.$refs.deleteModal.hideModal()
        this.getArticle()
      })
    }
  },
  created () {
    this.getArticle()
  }
}
</script>
