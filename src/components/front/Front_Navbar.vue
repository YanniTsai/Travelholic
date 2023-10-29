<template>
  <Loading :active="isLoading" style="z-index: 9999"></Loading>
  <nav class="navbar navbar-expand-lg front-navbar" :class="{ 'navbar-yellow': isScrolled }">
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
          <a class="nav-link" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">我的最愛</a>
          <div class="dropdown">
            <a
              class="dropdown-toggle nav-link dropdown-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-offset="-100,0"
              @click.prevent="getCart"
            >
              購物車
              <div class="cart-num" v-if="cartlength">{{ cartlength }}</div>
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
                        <tr class="orange-price">{{ $filters.currency(item.total) }} 元</tr>
                      </table>
                    </li>
                  </router-link>
                </ul>
                <div class="d-flex justify-content-between m-2 cart-menu-bottom">
                  <div class="d-flex align-items-center">
                    <span>總計：</span>
                    <span class="price">{{ $filters.currency(cart.total) }} 元</span>
                  </div>
                  <button class="btn yellow-btn" @click.prevent="goToCart">查看購物車</button>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <!-- 我的最愛 -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">我的最愛</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="fav-item border-bottom p-3" v-for="product in favList" :key="product.id">
        <router-link :to="`/products/${product.id}`" class="text-muted text-decoration-none">
          <div class="row">
            <img :src="product.imageUrl" alt="商品圖片" class="col-6">
            <table class="col-6 d-flex flex-column justify-content-start">
              <tr class="fw-bold">{{ product.title }}</tr>
              <tr class="fav-description">{{ product.description }}</tr>
            </table>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: [],
      favList: [],
      cart: {},
      cartlength: 0,
      isLoading: false,
      isScrolled: false
    }
  },
  inject: ['emitter'],
  watch: {
    cart () {
      this.cartlength = this.cart.carts.length
    }
  },
  methods: {
    getProducts () {
      return new Promise((resolve, reject) => {
        this.isLoading = true
        const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`

        this.$http.get(api).then((res) => {
          this.isLoading = false

          if (res.data.success) {
            this.products = res.data.products
            resolve()
          } else {
            const error = new Error('取得產品失敗')
            reject(error)
          }
        })
      })
    },
    getFav () {
      const favorited = JSON.parse(localStorage.getItem('favoriteItem')) || []

      this.favList = this.products.filter((item) => {
        return favorited.indexOf(item.id) > -1
      })
    },
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
    },
    detectScrolled () {
      window.addEventListener('scroll', () => {
        if (window.scrollY >= 58.2) {
          this.isScrolled = true
        } else {
          this.isScrolled = false
        }
      })
    }
  },
  mounted () {
    this.getCart()
    this.getProducts().then(() => {
      this.getFav()
    })
    this.detectScrolled()
    this.emitter.on('get-favlist', () => {
      this.getFav()
    })
  }
}
</script>
