<template>
<Loading :active="isLoading" style="z-index: 9999"></Loading>
<div class="banner mb-5">
  <img src="@/assets/images/product-banner.jpeg" alt="探索行程">
  <div class="banner-title p-3"><h5 class="m-2">探索行程</h5></div>
</div>
<div class="container">
    <div class="row mt-3">
        <div class="col-md-3">
            <ul class="list-group">
              <a href="#" class="list-group-item" @click.prevent="filter = ''" :class="{'active': filter === '' }">全部行程</a>
              <a href="#" class="list-group-item" @click.prevent="filter = '亞洲'" :class="{'active': filter === '亞洲' }">亞洲</a>
              <a href="#" class="list-group-item" @click.prevent="filter = '歐洲'" :class="{'active': filter === '歐洲' }">歐洲</a>
              <a href="#" class="list-group-item" @click.prevent="filter = '非洲'" :class="{'active': filter === '非洲' }">非洲</a>
              <a href="#" class="list-group-item" @click.prevent="filter = '北美洲'" :class="{'active': filter === '北美洲' }">北美洲</a>
              <a href="#" class="list-group-item" @click.prevent="filter = '南美洲'" :class="{'active': filter === '南美洲' }">南美洲</a>
              <a href="#" class="list-group-item" @click.prevent="filter = '大洋洲'" :class="{'active': filter === '大洋洲' }">大洋洲</a>
            </ul>
        </div>
        <div class="col-md-9">
            <div class="row justify-content-center justify-content-sm-start mb-3">
                <div class="card col-12 col-md-3 m-2 p-0" v-for="(item, key) in filterData[currentPage]" :key="key">
                    <div class="card-img">
                        <img :src="item.imageUrl" :alt="item.title">
                        <div class="explore-more d-flex justify-content-evenly align-items-center">
                          <button class="btn btn-outline-light" @click.prevent="toProductInfo(item.id)">查看更多</button>
                          <button class="btn btn-outline-light" @click.prevent="openAddToCartModal(item)">加入購物車</button>
                        </div>
                    </div>
                    <div class="card-body m-1 d-flex flex-column justify-content-between">
                        <div>
                            <div class="d-flex justify-content-between">
                              <h5 class="card-title">{{ item.title }}</h5>
                              <a href="#" class="text-dark" @click.prevent="addToFav(item)">
                                <i class="bi bi-heart-fill card-like text-danger" v-if="favorited.indexOf(item.id) > -1"></i>
                                <i class="bi bi-heart card-like" v-else></i>
                              </a>
                            </div>
                            <p class="card-text">{{ item.description }}</p>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="origin-price">$ {{ $filters.currency(item.origin_price) }}</span>
                            <span class="orange-price-lg">$ {{ $filters.currency(item.price) }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- pagination -->
            <nav aria-label="Page-navigation">
              <ul class="pagination justify-content-center front-pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 0 }">
                  <a class="page-link" href="#" aria-label="First" @click.prevent="currentPage = 0">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === 0 }">
                  <a class="page-link" href="#" aria-label="Previous" @click.prevent="currentPage--">
                    <span aria-hidden="true">&lsaquo;</span>
                  </a>
                </li>
                <li class="page-item" v-for="page in filterData.length" :key="page">
                  <a class="page-link" href="#" :class="{ 'active': currentPage === page-1 }" @click.prevent="currentPage = page-1">{{ page }}</a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === filterData.length-1 }">
                  <a class="page-link" href="#" aria-label="Next" @click.prevent="currentPage++">
                    <span aria-hidden="true">&rsaquo;</span>
                  </a>
                </li>
                <li class="page-item" :class="{ 'disabled': currentPage === filterData.length-1 }">
                  <a class="page-link" href="#" aria-label="Last" @click.prevent="currentPage = filterData.length-1">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
        </div>
    </div>
</div>
<AddToCartModal ref="addToCartModal" :product="tempProduct" @add-to-cart="addToCart"></AddToCartModal>
</template>

<script>
import AddToCartModal from '@/components/front/AddToCartModal.vue'

export default {
  data () {
    return {
      products: [],
      tempProduct: {},
      filter: '',
      currentPage: 0,
      favorited: JSON.parse(localStorage.getItem('favoriteItem')) || [],
      isLoading: false
    }
  },
  components: {
    AddToCartModal
  },
  inject: ['emitter'],
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`

      this.$http.get(api).then((res) => {
        this.isLoading = false
        // api文件提供的 res.data.products 格式為物件，但 console 顯示陣列。
        // this.products = Object.values(res.data.products)
        this.products = res.data.products
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
        this.emitter.emit('get-cart')
        this.$refs.addToCartModal.hideModal()
        this.emitter.emit('notification', { title: this.tempProduct.title, content: '已加入購物車' })
      })
    },
    addToFav (item) {
      const index = this.favorited.indexOf(item.id)

      if (this.favorited.indexOf(item.id) < 0) {
        this.favorited.push(item.id)
        this.emitter.emit('notification', { title: item.title, content: '已加入我的最愛' })
      } else {
        this.favorited.splice(index, 1)
        this.emitter.emit('notification', { title: item.title, content: '已從我的最愛移除' })
      }

      localStorage.setItem('favoriteItem', JSON.stringify(this.favorited))
      this.emitter.emit('get-favlist')
    }
  },
  computed: {
    filterData () {
      let tempData = []
      const filteredProducts = []

      // 根據所選類別進行資料過濾
      /* eslint-disable */
      this.currentPage = 0

      tempData = this.products.filter((item) => {
        if (this.filter === '') {
          return this.products
        } else if (this.filter === item.category) {
          return item
        }
      })
      /* eslint-enable */

      // 設定每頁顯示12筆資料
      tempData.forEach((item, index) => {
        if (index % 12 === 0) {
          filteredProducts.push([])
        }
        const page = parseInt(index / 12)
        filteredProducts[page].push(item)
      })

      return filteredProducts
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
