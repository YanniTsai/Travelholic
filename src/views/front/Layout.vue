<template>
  <div class="d-flex flex-column" style="min-height: 100vh;">
    <Navbar></Navbar>
    <router-view></router-view>
    <Footer class="mt-auto"></Footer>
    <Toast></Toast>
  </div>
</template>

<script>
import Navbar from '../../components/front/Front_Navbar.vue'
import Footer from '../../components/front/Footer.vue'
import emitter from '../../methods/emitter'
import Toast from '../../components/front/Toast.vue'

export default {
  components: {
    Navbar,
    Footer,
    Toast
  },
  provide () {
    return {
      emitter
    }
  }
}
</script>
