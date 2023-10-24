<template>
    <div class="container">
        <div class="text-center m-3">
            <h3>訂購成功！</h3>
        </div>
        <div class="row justify-content-center">
            <form class="col-md-6" @submit.prevent="payOrder">
                <div class="mb-3">
                    <div class="text-center bg-light p-2">商品資訊</div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>商品名稱</th>
                                <th class="text-center">數量</th>
                                <th class="text-center">金額</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, key) in order.products" :key="key">
                               <td>{{ item.product.title }}</td>
                               <td class="text-center">{{ item.qty }}</td>
                               <td class="text-center">$ {{ $filters.currency(item.final_total) }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end me-4">總金額 $ {{ $filters.currency(order.total) }}</div>
                </div>
                <div>
                    <div class="text-center bg-light p-2">訂購人資訊</div>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>訂購人姓名</th>
                                <td>{{ order.user.name }}</td>
                            </tr>
                            <tr>
                                <th>Email</th>
                                <td>{{ order.user.email }}</td>
                            </tr>
                            <tr>
                                <th>聯絡電話</th>
                                <td>{{ order.user.tel }}</td>
                            </tr>
                            <tr>
                                <th>地址</th>
                                <td>{{ order.user.address }}</td>
                            </tr>
                            <tr>
                                <th>備註</th>
                                <td>{{ order.message }}</td>
                            </tr>
                            <tr>
                                <th>付款狀態</th>
                                <td>
                                    <span class="text-danger" v-if="!order.is_paid">尚未付款</span>
                                    <span class="text-success" v-else>已付款</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="text-end mb-3">
                        <button class="btn">付款去</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        user: {}
      },
      orderId: ''
    }
  },
  methods: {
    getOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`

      this.$http.get(api).then((res) => {
        console.log(res.data)

        this.order = res.data.order
      })
    },
    payOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`

      this.$http.post(api).then((res) => {
        console.log(res.data)

        if (res.data.success) {
          this.$router.push('/finishorder')
        }
      })
    }
  },
  created () {
    this.orderId = this.$route.params.orderId
    this.getOrder()
  }
}
</script>
