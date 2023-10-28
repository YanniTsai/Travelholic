<template>
    <Loading :active="isLoading" style="z-index: 9999"></Loading>
    <div class="banner mb-5">
      <img src="@/assets/images/cart-banner.jpeg" alt="購物車">
      <div class="banner-title p-3"><h5 class="m-2">購物車</h5></div>
    </div>
    <div class="container">
        <div class="d-flex flex-column align-items-center" v-if="cartlength === 0">
            <div>購物車目前沒有商品！</div>
            <button class="btn yellow-btn">
                <router-link to="/products" class="text-dark text-decoration-none">探索行程</router-link>
            </button>
        </div>
        <div class="row" v-else>
            <div class="col-md-7 cart-list">
                <div class="m-3">已選行程</div>
                <div class="mb-3">
                    <div class="cart-item p-3 m-3" v-for="item in cart.carts" :key="item.id">
                        <div class="row">
                            <img :src="item.product.imageUrl" :alt="item.product.title" class="col-md-3">
                            <div class="col-md-6">
                                <router-link :to="`/products/${item.product.id}`" class="text-muted text-decoration-none">
                                    <div class="mb-2">{{ item.product.title }}</div>
                                    <div class="fw-light mb-2">{{ item.product.description }}</div>
                                    <div>$ {{ item.product.price }}</div>
                                </router-link>
                            </div>
                            <div class="col-md-3 d-flex align-items-center">
                                <div class="input-group">
                                    <input type="number" min="1" class="form-control" v-model.number="item.qty" @change="updateCart(item)">
                                    <span class="input-group-text bg-white border-0">人</span>
                                </div>
                            </div>
                        </div>
                        <hr>
                        <div class="d-flex justify-content-between align-items-center">
                            <button class="btn" @click.prevent="openRemoveModal(item)">
                                <i class="bi bi-trash3"></i>
                            </button>
                            <div class="fw-bold">$ {{ $filters.currency(item.total) }}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="mt-3 ms-3 mb-3 pt-3">
                    <div class="mb-3">套用優惠</div>
                    <div class="input-group mb-1">
                        <input type="text" class="form-control" placeholder="輸入優惠碼" aria-label="coupon_code" aria-describedby="usecoupon" v-model="coupon_code">
                        <button class="btn yellow-btn border" type="button" id="usecoupon" @click.prevent="addCoupon">使用</button>
                    </div>
                    <div class="text-success ms-3" v-if="discont">優惠碼：{{ coupon_code }}&ensp;<i class="bi bi-check2-circle"></i></div>
                </div>
                <div class="d-flex justify-content-end mb-3">
                    <div>
                        <div class="mb-2">{{ cartlength }} 件商品 </div>
                        <div class="d-flex align-items-center" :class="{'text-secondary': discont}">
                            <span>總計：</span>
                            <span class="fw-bold" :class="{'text-decoration-line-through': discont}">{{ $filters.currency(cart.total) }} 元</span>
                        </div>
                        <div v-if="discont">
                            <span class="orange-price">優惠價： {{ $filters.currency(cart.final_total) }} 元</span>
                        </div>
                        <button class="btn orange-btn w-100 mt-3">
                          <router-link to="/order" class="text-decoration-none text-dark">
                            結帳去
                            <i class="bi bi-arrow-right"></i>
                          </router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <RemoveItemModal ref="removeItemModal" :cartItem="tempItem" @remove-item="removeItem"></RemoveItemModal>
</template>

<script>
import RemoveItemModal from '@/components/front/RemoveItemModal.vue'

export default {
  data () {
    return {
      cart: {},
      cartlength: 0,
      tempItem: {},
      coupon_code: '',
      discont: false,
      isLoading: false
    }
  },
  components: {
    RemoveItemModal
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
    updateCart (item) {
      this.isLoading = true
      const cart = {
        product_id: item.id,
        qty: item.qty
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`

      this.$http.put(api, { data: cart }).then((res) => {
        this.isLoading = false
        console.log(res.data)

        this.getCart()
      })
    },
    openRemoveModal (item) {
      this.tempItem = item

      this.$refs.removeItemModal.showModal()
    },
    removeItem () {
      this.isLoading = true
      console.log(this.tempItem)
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${this.tempItem.id}`

      this.$http.delete(api).then((res) => {
        this.isLoading = false
        console.log(res.data)

        this.$refs.removeItemModal.hideModal()
        this.getCart()
      })
    },
    addCoupon () {
      const coupon = {
        code: this.coupon_code
      }

      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`

      this.$http.post(api, { data: coupon }).then((res) => {
        if (res.data.success) {
          console.log(res.data)
          this.discont = true
        }

        this.getCart()
      })
    }
  },
  created () {
    this.getCart()
  }
}
</script>
