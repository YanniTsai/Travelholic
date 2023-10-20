<template>
  <Loading :active="isLoading"></Loading>
  <div class="text-end">
    <button class="btn btn-primary" @click.prevent="openModal(true)">新增產品</button>
  </div>
  <table class="table mt-3">
    <thead>
      <tr>
        <th class="col-2">商品圖</th>
        <th class="col-4">商品名稱</th>
        <th class="col-1">商品類別</th>
        <th class="col-1 text-end">原價</th>
        <th class="col-1 text-end">售價</th>
        <th class="col-1 text-center">是否啟用</th>
        <th class="col-2">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>
          <img :src="item.imageUrl" :alt="item.title" class="w-100" />
        </td>
        <td>{{ item.title }}</td>
        <td>{{ item.category }}</td>
        <td class="text-end">{{ item.origin_price }}</td>
        <td class="text-end">{{ item.price }}</td>
        <td class="text-center">
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-secondary" v-else>未啟用</span>
        </td>
        <td>
          <button class="btn btn-outline-primary btn-sm" @click.prevent="openModal(false, item)">編輯</button>
          <button class="btn btn-outline-danger btn-sm" @click.prevent="openDeleteModal(item)">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
  <ProductModal ref="productModal" :product="tempProduct" @update-product="updateProduct"></ProductModal>
  <DeleteModal ref="deleteModal" :title="tempProduct.title" @delete-item="deleteProduct"></DeleteModal>
</template>

<script>
import ProductModal from '../../components/admin/ProductModal.vue'
import DeleteModal from '../../components/admin/DeleteModal.vue'

export default {
  data () {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    }
  },
  components: {
    ProductModal,
    DeleteModal
  },
  methods: {
    getProducts () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`

      this.$http.get(api).then((res) => {
        this.isLoading = false
        console.log(res.data)
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempProduct = {}
      } else {
        this.tempProduct = { ...item }
      }
      this.isNew = isNew
      this.$refs.productModal.showModal()
    },
    updateProduct (item) {
      this.isLoading = true

      this.tempProduct = item
      // 新增商品
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'

      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`
        httpMethod = 'put'
      }

      this.$http[httpMethod](api, { data: this.tempProduct }).then((res) => {
        this.isLoading = false
        console.log(res.data)
        this.$refs.productModal.hideModal()
        this.getProducts()
      })
    },
    openDeleteModal (item) {
      this.tempProduct = { ...item }
      this.$refs.deleteModal.showModal()
    },
    deleteProduct () {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`

      this.$http.delete(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.$refs.deleteModal.hideModal()
        this.getProducts()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
