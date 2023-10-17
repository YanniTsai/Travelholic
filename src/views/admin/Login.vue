<template>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIn">
      <div class="col-md-6">
        <h1 class="h3 text-center font-weight-normal">後台管理者登入</h1>
        <div class="mb-3">
          <label for="loginEmail">Email:</label>
          <input
            type="email"
            id="loginEmail"
            class="form-control"
            placeholder="Email address"
            required
            v-model="user.username"
          />
        </div>
        <div class="mb-3">
          <label for="loginPassword">Password:</label>
          <input
            type="password"
            id="loginPassword"
            class="form-control"
            placeholder="Password"
            required
            v-model="user.password"
          />
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-primary">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signIn () {
      const api = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(api, this.user).then((res) => {
        console.log('登入：', res.data)

        if (res.data.success) {
          // 將登入成功所回傳的 token 及到期時間儲存至 token, expired
          const { token, expired } = res.data
          // console.log(token, expired)

          // 將 token, expired 儲存至 cookie
          document.cookie = `token=${token}; expires=${new Date(expired)}`

          this.$router.push('/dashboard')
        }
      })
    }
  }
}
</script>
