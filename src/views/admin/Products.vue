<template>
  <div class="text-end">
    <button class="btn btn-primary">新增產品</button>
  </div>
  <table class="table mt-3">
    <thead>
      <tr>
        <th width="200">商品圖</th>
        <th width="400">商品名稱</th>
        <th width="120">商品類別</th>
        <th width="120" class="text-end">原價</th>
        <th width="120" class="text-end">售價</th>
        <th width="120" class="text-center">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>
          <img :src="item.imageUrl" :alt="item.title" width="200" />
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
          <button class="btn btn-outline-primary btn-sm">編輯</button>
          <button class="btn btn-outline-danger btn-sm">刪除</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProducts () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`

      this.$http.get(api).then((res) => {
        console.log(res.data)
        this.products = res.data.products
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
