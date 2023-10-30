<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="banner mb-5">
    <img src="@/assets/images/orderhistory-banner.jpeg" alt="購物車">
    <div class="banner-title p-3"><h5 class="m-2">歷史訂單</h5></div>
  </div>
  <div class="col-md-6 mx-auto">
    <div class="m-3 p-3 order-info" v-for="item in orders" :key="item.id">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div>訂單編號：{{ item.id }}</div>
          <div>訂單時間：{{ $filters.date(item.create_at) }}</div>
          <div>訂單金額：$ {{ $filters.currency(item.total) }}</div>
          <div>付款狀態：
            <span class="text-success" v-if="item.is_paid">已付款</span>
            <span class="text-danger" v-else>未付款</span>
          </div>
        </div>
        <button class="btn" data-bs-toggle="collapse" :data-bs-target="`#orderDetail${item.id}`" aria-expanded="false" :aria-controls="`#orderDetail${item.id}`">
          <i class="bi bi-chevron-down"></i>
        </button>
      </div>
      <!-- 展開內容 -->
      <div class="collapse" :id="`orderDetail${item.id}`">
        <hr>
        <!-- 商品資訊 -->
        <div>
          <div>訂單內容：</div>
          <table class="table">
            <thead>
              <tr>
                <th>商品名稱</th>
                <th class="text-center">數量</th>
                <th class="text-center">金額</th>
              </tr>
              <tr v-for="product in item.products" :key="product.id">
                <td><router-link :to="`/products/${product.product_id}`" class="text-decoration-none text-dark">{{ product.product.title }}</router-link></td>
                <td class="text-center">{{ product.qty }}</td>
                <td class="text-center">$ {{ $filters.currency(product.final_total) }}</td>
              </tr>
            </thead>
          </table>
        </div>
        <!-- 訂購人資訊 -->
        <div>
          <div>訂購人資訊：</div>
          <div class="m-2">
            <div>姓名： {{ item.user.name }}</div>
            <div>Email： {{ item.user.email }}</div>
            <div>電話： {{ item.user.tel }}</div>
            <div>地址： {{ item.user.address }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Pagination :pagination="pagination" @update-page="getOrders"></Pagination>
</template>

<script>
import Pagination from '../../components/front/Front_Pagination.vue'

export default {
  data () {
    return {
      orders: [],
      pagination: {},
      isLoading: false
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOrders (page = 1) {
      this.isLoading = true

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders/?page=${page}`

      this.$http.get(api).then((res) => {
        this.isLoading = false

        console.log(res.data)
        this.orders = res.data.orders
        this.pagination = res.data.pagination
      })
    }
  },
  created () {
    this.getOrders()
  }
}
</script>
