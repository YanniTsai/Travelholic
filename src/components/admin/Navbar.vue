<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">後台管理</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/dashboard/products" class="nav-link" :class="{'fw-bold': $route.path === '/dashboard/products'}">產品管理</router-link>
          <router-link to="/dashboard/orders" class="nav-link" :class="{'fw-bold': $route.path === '/dashboard/orders'}">訂單管理</router-link>
          <router-link to="/dashboard/coupons" class="nav-link" :class="{'fw-bold': $route.path === '/dashboard/coupons'}">優惠券管理</router-link>
          <router-link to="/dashboard/articles" class="nav-link" :class="{'fw-bold': $route.path === '/dashboard/articles'}">文章管理</router-link>
        </ul>
        <a href="#"  @click.prevent="logout" class="nav-link">登出</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout () {
      const api = `${process.env.VUE_APP_API}logout`

      this.$http.post(api).then((res) => {
        console.log('登出：', res.data)

        this.$router.push('/adminLogin')
      })
    }
  }
}
</script>
