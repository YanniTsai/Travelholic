<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">編輯優惠券</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="title" class="form-label">優惠券名稱</label>
            <input type="text" id="title" class="form-control" v-model="tempCoupon.title" />
          </div>
          <div class="mb-3">
            <label for="code" class="form-label">優惠碼</label>
            <input type="text" id="code" class="form-control" v-model="tempCoupon.code" />
          </div>
          <div class="mb-3">
            <label for="percent" class="form-label">優惠百分比</label>
            <input type="number" id="percent" class="form-control" v-model="tempCoupon.percent" />
          </div>
          <div class="mb-3">
            <label for="due_date" class="form-label">到期日</label>
            <input type="date" id="due_date" class="form-control" v-model="due_date" />
          </div>
          <div class="mb-3">
            <div class="form-check">
                <input
                type="checkbox"
                id="is_enabled"
                class="form-check-input"
                :true-value="1"
                :false-value="0"
                v-model="tempCoupon.is_enabled"
                />
                <label for="is_enabled" class="form-check-label">是否啟用</label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn btn-primary" @click="$emit('update-coupon', tempCoupon)">確定編輯</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    coupon: {}
  },
  data () {
    return {
      modal: {},
      tempCoupon: {
        is_enabled: 0
      },
      due_date: ''
    }
  },
  watch: {
    coupon () {
      this.tempCoupon = this.coupon

      // 將時間轉為yyyy-mm-ddThh:mm:ss格式，透過 split('T') ，將時間戳轉為擁有兩個字串的物件。[0]為日期，[1]為時間。
      const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T')

      this.due_date = dateAndTime[0]
    },
    due_date () {
      // 透過 / 1000 將毫秒級轉為秒級（Unix Timestamp 格式）。因為 due_date 中只有 yyyy-mm-dd，若有包含 hh:mm:ss 則需要透過 Math.floor 取得整數。
      // this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
      this.tempCoupon.due_date = new Date(this.due_date) / 1000
    }
  },
  methods: {
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }
}
</script>
