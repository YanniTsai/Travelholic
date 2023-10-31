<template>
  <div class="toast-container w-100 h-100">
    <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
      <div class="toast-body h-100 d-flex align-items-center">
        <div class="d-flex align-items-center">
          <i class="bi bi-check-circle fs-4"></i>
          <div class="fs-6 ms-2"><strong>{{ message.title }}</strong> {{ message.content }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast'

export default {
  data () {
    return {
      toast: {},
      message: {
        title: '',
        content: ''
      }
    }
  },
  inject: ['emitter'],
  methods: {
    showToast (message) {
      this.message = message
      this.toast.show()
    }
  },
  mounted () {
    this.toast = new Toast(this.$refs.toast, {
      delay: 3000
    })
    this.emitter.on('notification', (message) => {
      this.showToast(message)
    })
  }
}
</script>
