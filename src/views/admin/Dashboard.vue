<template>
    <Navbar></Navbar>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '../../components/admin/Navbar.vue'

export default {
  components: {
    Navbar
  },
  created () {
    // 將存在 cookie 中的 token 取出
    /* eslint-disable */
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    /* eslint-enable */

    // 將 token 存於 header
    this.$http.defaults.headers.common.Authorization = token

    const api = `${process.env.VUE_APP_API}api/user/check`

    this.$http.post(api).then((res) => {
      console.log('驗證是否持續登入：', res.data)
      if (!res.data.success) {
        this.$router.push('/adminLogin')
      }
    })
  }
}
</script>
