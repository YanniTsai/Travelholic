<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" width="150" alt="travelholic" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <router-link to="/products" class="nav-link">探索行程</router-link>
          <li class="nav-link">精彩文章</li>
          <li class="nav-link">我的最愛</li>
          <div class="dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="-100,0"
              @click="getCart"
            >
              購物車
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <div class="d-flex flex-column justify-content-center align-items-center m-4" v-if="cartlength === 0">
                <span class="mb-2">購物車目前沒有商品！</span>
              </div>
              <div v-else>
                <ul class="list-unstyled" v-for="(item, key) in cart.carts" :key="key">
                  <router-link :to="`/products/${item.product.id}`" class="text-muted text-decoration-none">
                    <li class="row border-bottom pb-2 m-2">
                      <img :src="item.product.imageUrl" alt="商品圖片" class="col-6">
                      <table class="col-6">
                        <tr class="fw-bold">{{ item.product.title }}</tr>
                        <tr>{{ item.qty }} {{ item.product.unit }}</tr>
                        <tr class="price">{{ $filters.currency(item.total) }} 元</tr>
                      </table>
                    </li>
                  </router-link>
                </ul>
                <div class="d-flex justify-content-between m-2 cart-menu-bottom">
                  <div class="d-flex align-items-center">
                    <span>總計：</span>
                    <span class="price">{{ $filters.currency(cart.total) }} 元</span>
                  </div>
                  <button class="btn dropdown-btn" @click.prevent="goToCart">查看購物車</button>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      cart: {},
      cartlength: 0,
      isLoading: false
    }
  },
  watch: {
    cart () {
      this.cartlength = this.cart.carts.length
    }
  },
  methods: {
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`

      this.$http.get(api).then((res) => {
        this.isLoading = false
        console.log(res.data)

        this.cart = res.data.data
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style lang="scss">
@import '../../assets/helpers/color';

.navbar {
  background: $main-yellow;
}
.nav-link {
  color: $brown;
}
.dropdown-menu{
  width: 360px;
  max-height: 500px;
  overflow: auto;
  right: 0 !important;
  left: auto !important;

  img{
    height: 100px;
  }
}
.price{
  color: $orange;
}
.dropdown-btn{
  background: $light-yellow;
  &:hover{
    background: $main-yellow;
  }
}
</style>
