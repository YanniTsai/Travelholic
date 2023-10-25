<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-xl modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">編輯文章</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <div class="mb-2">
                <label for="title" class="form-label">文章標題</label>
                <input type="text" id="title" class="form-control" v-model="tempArticle.title"/>
              </div>
              <div class="mb-2">
                <label for="author" class="form-label">作者</label>
                <input type="text" id="author" class="form-control" v-model="tempArticle.author"/>
              </div>
              <div class="mb-2">
                <label for="tag" class="form-label">tag</label>
                <input type="text" id="tag" class="form-control" placeholder="輸入完後點擊 Enter" v-model="tempTag" @keyup.enter="pushTag"/>
                <div class="mt-2">
                  <button class="btn btn-light btn-sm" :class="{'bg-danger-subtle': isHover === key }" v-for="(i,key) in tempArticle.tag" :key="key">
                    <span>{{ i }}</span>
                    <i class="bi bi-x" @mouseenter="isHover = key" @mouseleave="isHover = null" @click="spliceTag(key)"></i>
                  </button>
                </div>
              </div>
              <div class="mb-2">
                <label for="description" class="form-label">文章說明</label>
                <textarea id="description" class="form-control" v-model="tempArticle.description"></textarea>
              </div>
              <div class="mb-2">
                <label for="image" class="form-label">封面圖片</label>
                <input type="file" id="image" class="form-control" ref="image" @change="uploadFile($refs.image)"/>
                <img :src="tempArticle.image" alt="封面圖片" class="w-100 mt-2" v-if="tempArticle.image">
              </div>
            </div>
            <div class="col-md-8">
              <div class="mb-2">
                <label for="content" class="form-label">文章內容</label>
                <textarea
                  id="content"
                  class="form-control"
                  style="height: 300px"
                  v-model="tempArticle.content"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-between">
          <div class="form-check">
            <input type="checkbox" id="isPublic" class="form-check-input"  v-model="tempArticle.isPublic" />
            <label for="isPublic" class="form-check-label">公開文章</label>
          </div>
          <div>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              取消
            </button>
            <button type="button" class="btn btn-primary ms-2" @click.prevent="emitArticle">確定編輯</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    article: {
      type: Object
    }
  },
  data () {
    return {
      modal: {},
      tempArticle: {
        tag: [],
        isPublic: false
      },
      tempTag: '',
      isHover: null,
      isLoading: false
    }
  },
  watch: {
    article () {
      this.tempArticle = this.article
    }
  },
  emits: ['update-article'],
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    },
    pushTag () {
      this.tempArticle.tag.push(this.tempTag)
      this.tempTag = ''
    },
    spliceTag (key) {
      this.tempArticle.tag.splice(key, 1)
      this.isHover = null
    },
    uploadFile (inputElement) {
      this.isLoading = true

      const uploadedFile = inputElement.files[0]

      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`

      this.$http.post(api, formData).then((res) => {
        this.isLoading = false
        console.log(res.data)

        this.tempArticle.image = res.data.imageUrl
      })
    },
    emitArticle () {
      this.tempArticle.create_at = new Date().getTime() / 1000

      this.$emit('update-article', this.tempArticle)
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
