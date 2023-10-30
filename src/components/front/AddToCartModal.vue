<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ product.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <img :src="product.imageUrl" :alt="product.title" class="w-100 mb-3">
          <div>{{ product.content }}</div>
        </div>
        <div class="modal-footer d-flex flex-column align-items-stretch">
          <div>
            <div class="origin-price">原價：$ {{ $filters.currency(product.origin_price) }}</div>
            <div class="orange-price-lg">優惠價：$ {{ $filters.currency(product.price) }}</div>
          </div>
          <div>
            <label for="num">選擇人數</label>
            <select id="num" class="form-select" v-model="qty">
                <option value="1" selected>1</option>
                <option value="3">2</option>
                <option value="3">3</option>
                <option value="3">4</option>
            </select>
          </div>
          <button type="button" class="btn orange-btn" @click.prevent="$emit('add-to-cart', qty)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'

export default {
  props: {
    product: {
      type: Object
    }
  },
  data () {
    return {
      modal: {},
      qty: 1
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
