<template>
<Loading :active="isLoading" style="z-index: 9999"></Loading>
<div class="container">
    <div class="row mt-3">
        <div class="col-md-3">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        亞洲
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">日本</li>
                            <li class="list-group-item">泰國</li>
                            <li class="list-group-item">印尼</li>
                            <li class="list-group-item">菲律賓</li>
                            <li class="list-group-item">韓國</li>
                        </ul>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Accordion Item #2
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            test
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                        <div class="accordion-body">
                            test
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9">
            <div class="row justify-content-center justify-content-sm-start">
                <div class="card col-12 col-md-3 m-2 p-0" v-for="(item, key) in products" :key="key">
                    <div class="card-img">
                        <img :src="item.imageUrl" :alt="item.title">
                        <div class="explore-more d-flex justify-content-evenly align-items-center">
                          <button class="btn btn-outline-light" @click.prevent="toProductInfo(item.id)">查看更多</button>
                          <button class="btn btn-outline-light" @click.prevent="openAddToCartModal(item)">加入購物車</button>
                        </div>
                    </div>
                    <div class="card-body m-1 d-flex flex-column justify-content-between">
                        <div>
                            <h5 class="card-title">{{ item.title }}</h5>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="origin-price">$ {{ item.origin_price }}</span>
                            <span class="orange-price-lg">$ {{ item.price }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <Pagination :pagination="pagination" @update-page="getProducts"></Pagination>
        </div>
    </div>
</div>
<AddToCartModal ref="addToCartModal" :product="tempProduct" @add-to-cart="addToCart"></AddToCartModal>
</template>

<script>
import AddToCartModal from '@/components/front/AddToCartModal.vue'
import Pagination from '../../components/front/Front_Pagination.vue'

export default {
  data () {
    return {
      products: {},
      pagination: {},
      tempProduct: {},
      isLoading: false
    }
  },
  components: {
    AddToCartModal,
    Pagination
  },
  methods: {
    getProducts (page = 1) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`

      this.$http.get(api).then((res) => {
        this.isLoading = false

        console.log(res.data)
        this.products = res.data.products
        this.pagination = res.data.pagination
      })
    },
    toProductInfo (id) {
      this.$router.push(`/products/${id}`)
    },
    openAddToCartModal (item) {
      this.tempProduct = item
      this.$refs.addToCartModal.showModal()
    },
    addToCart (num) {
      this.isLoading = true

      const product = {
        product_id: this.tempProduct.id,
        qty: parseInt(num)
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`

      this.$http.post(api, { data: product }).then((res) => {
        this.isLoading = false

        console.log(res.data)
        this.$refs.addToCartModal.hideModal()
      })
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
