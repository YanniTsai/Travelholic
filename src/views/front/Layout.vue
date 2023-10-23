<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from '../../components/front/Front_Navbar.vue'
import Footer from '../../components/front/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
