<template>
    <Loading :active="isLoading" style="z-index: 9999"></Loading>
    <div class="product-main-img mb-3">
        <img :src="product.imageUrl" :alt="product.title">
    </div>
    <div>

    </div>
    <div class="container">
        <div>
            <h2 class="mb-3">{{ product.title }}</h2>
            <div class="row mb-3">
              <div class="col-md-8">
                <img :src="product.imagesUrl" class="w-100"/>
              </div>
              <div class="col-md-4 p-3 d-flex flex-column justify-content-around">
                <div class="d-flex">
                    <i class="bi bi-suitcase-lg"></i>
                    <div class="mx-2">{{ product.description }}</div>
                </div>
                <div>
                    <div class="origin-price">原價：$ {{ product.origin_price }}</div>
                    <div class="orange-price-lg">優惠價：$ {{ product.price }}</div>
                </div>
                <div>
                    <div class="mb-3">
                        <div class="mb-2">選擇人數：</div>
                        <select class="form-select" v-model="qty">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button class="btn">
                            <i class="bi bi-heart"></i>
                        </button>
                        <div class="d-flex justify-content-between">
                            <button class="btn yellow-btn m-1" @click.prevent="addToCart">加入購物車</button>
                            <button class="btn orange-btn m-1" @click.prevent="buyDirectly">直接購買</button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
        <!-- 行程介紹 -->
        <div class="mb-3">
            <div class="info-title">
                <i class="bi bi-brightness-high"></i>
                行程介紹
            </div>
            <div class="p-3 lh-lg">
                {{ product.content }}
            </div>
        </div>
        <!-- 條款 -->
        <div class="mb-3">
            <div class="info-title">
                <i class="bi bi-info-circle"></i>
                注意事項
            </div>
            <div class="p-3 lh-lg">
                <ol>
                    <li>行程詳情：請仔細閱讀行程的所有細節，包括日期、時間、地點和包含的項目。確保您對整個行程有充分的理解。</li>
                    <li>
                        價格和支付：確保您瞭解行程的價格和付款方式。請查明包含的項目和不包含的項目，以避免不必要的誤解。<br>
                        <span class="text-danger"><i class="bi bi-exclamation-circle-fill"></i> 本公司不會主動聯繫消費者進行 Atm 操作。</span>
                    </li>
                    <li>
                        取消政策：瞭解取消或更改行程的<a href="#" class="link-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">政策</a>
                        ，包括取消費用和退款政策。這有助於您在需要時進行彈性調整。
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="staticBackdropLabel">取消政策</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    我們理解生活中總有變故，但也需要確保一個公平的取消政策，以維護所有客戶的利益。請注意以下取消費用：
                                    <ol class="m-2">
                                        <li>若您在出發前 14 天（或以上）取消行程，我們將全額退款，扣除 0% 的取消費用。</li>
                                        <li>若您在出發前 7 天至 13 天之間取消行程，我們將收取 50% 的取消費用，餘款將全額退還。</li>
                                        <li>若您在出發前 4 天至 6 天之間取消行程，我們將收取 70% 的取消費用，餘款將全額退還。</li>
                                        <li>若您在出發前 3 天（或以下）取消行程，不予退款。</li>
                                    </ol>
                                    請注意，這些費用是為了涵蓋已經發生的行政成本和預訂的無法取消的費用，以及其他可能的損失。如果您需要取消行程，請儘早通知我們，以減少可能的費用。我們建議您購買旅行保險，以應對突發情況，如取消行程所帶來的負擔。
                                </div>
                              </div>
                            </div>
                        </div>
                    </li>
                    <li>保險：我們強烈建議您購買旅行保險，以應對突發情況，如取消、健康問題或行李丟失。</li>
                    <li>護照和簽證：確保您的護照和簽證是有效的，並在旅行期間保持安全。如果需要，提前辦理護照和簽證手續。</li>
                    <li>緊急聯絡信息：請提供緊急聯絡人的信息，以便在需要時聯絡。</li>
                    <li>健康和特殊需求：如果您有特殊健康需求或飲食要求，請提前告知我們，以確保我們能為您提供最佳的服務。</li>
                </ol>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      product: {},
      qty: 1,
      isLoading: false
    }
  },
  methods: {
    getProduct () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`

      this.$http.get(api).then((res) => {
        this.isLoading = false

        console.log(res.data)

        this.product = res.data.product
      })
    },
    addToCart () {
      const product = {
        product_id: this.product.id,
        qty: parseInt(this.qty)
      }
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`

      this.$http.post(api, { data: product }).then((res) => {
        console.log(res.data)
      })
    },
    async buyDirectly () {
      this.addToCart()
      this.$router.push('/cart')
    }
  },
  created () {
    this.id = this.$route.params.productId
    this.getProduct()
  }
}
</script>
