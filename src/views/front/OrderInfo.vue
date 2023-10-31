<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <div class="banner mb-5">
      <img src="@/assets/images/orderInfo-banner.jpeg" alt="訂購人資訊">
      <div class="banner-title p-3"><h5 class="m-2">確認訂單</h5></div>
    </div>
  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3 info-title"><i class="bi bi-person"></i> 訂購人資訊</div>
        <VForm class="col-md-10 my-3" v-slot="{ errors }" @submit="createOrder">
          <div class="mb-3">
            <label for="name" class="form-label"><span class="text-danger">*</span>訂購人姓名</label>
            <Field
            id="name"
            name="訂購人姓名"
            class="form-control"
            :class="{ 'is-invalid': errors['訂購人姓名'] }"
            placeholder="請輸入姓名"
            rules="required"
            v-model="form.user.name"
            ></Field>
            <ErrorMessage name="訂購人姓名" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label"><span class="text-danger">*</span>Email</label>
            <Field
            id="email"
            name="Email"
            class="form-control"
            :class="{ 'is-invalid': errors['Email'] }"
            placeholder="請輸入Email"
            rules="required|email"
            v-model="form.user.email"
            ></Field>
            <ErrorMessage name="Email" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="tel" class="form-label"><span class="text-danger">*</span>聯絡電話</label>
            <Field
            id="tel"
            name="聯絡電話"
            class="form-control"
            :class="{ 'is-invalid': errors['聯絡電話'] }"
            placeholder="請輸入手機號碼"
            rules="required"
            v-model="form.user.tel"
            ></Field>
            <ErrorMessage name="聯絡電話" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="address" class="form-label"><span class="text-danger">*</span>地址</label>
            <Field
            id="address"
            name="地址"
            class="form-control"
            :class="{ 'is-invalid': errors['地址'] }"
            placeholder="請輸入地址"
            rules="required"
            v-model="form.user.address"
            ></Field>
            <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">訂單備註</label>
            <textarea
            id="message"
            class="form-control"
            cols="20"
            rows="10"
            v-model="form.message"
            ></textarea>
          </div>
          <div class="text-end">
            <button class="btn orange-btn">送出訂單</button>
          </div>
        </VForm>
      </div>
      <div class="col-md-4">
        <div class="mb-3 info-title"><i class="bi bi-bag-check"></i> 訂購內容</div>
        <table class="table my-3">
          <tr>
            <th class="col-7">商品名稱</th>
            <th class="col-2 text-center">數量</th>
            <th class="col-3 text-end">金額</th>
          </tr>
          <tr v-for="item in cart.carts" :key="item.id" class="lh-lg">
            <td>{{ item.product.title }}</td>
            <td class="text-center">{{ item.qty }}</td>
            <td class="text-end">$ {{ $filters.currency(item.product.price) }}</td>
          </tr>
        </table>
        <div class="mb-3" v-if="coupon_code">
          <div class="text-success">已使用優惠碼： {{ coupon_code }} （整單{{ coupon_percent / 10 }}折）</div>
        </div>
        <div class="text-end mb-3">
          <div :class="{'origin-price': coupon_code}">訂單總金額： $ {{ $filters.currency(cart.total) }}</div>
          <div class="orange-price" v-if="coupon_code">訂單總金額： $ {{ $filters.currency(cart.final_total) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cart: {},
      coupon_code: '',
      coupon_percent: 0,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`

      this.$http.get(api).then((res) => {
        this.isLoading = false
        console.log(res.data)

        this.cart = res.data.data

        if (res.data.data.carts[0].coupon) {
          this.coupon_code = res.data.data.carts[0].coupon.code
          this.coupon_percent = res.data.data.carts[0].coupon.percent
        }
      })
    },
    createOrder () {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const orderData = this.form

      this.$http.post(api, { data: orderData }).then((res) => {
        console.log(res.data)

        this.$router.push(`/checkout/${res.data.orderId}`)
        this.emitter.emit('get-cart')
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
