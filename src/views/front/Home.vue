<template>
  <div id="homeCarousel" class="carousel slide home-carousel" data-bs-ride="carousel">
    <div class="home-title text-center fst-italic text-nowrap p-5 ">
      <div class="mb-2">Time to step outside.</div>
      <div class="mb-2">下一趟旅行，啟程！</div>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item carousel-1 active" data-bs-interval="4000"></div>
      <div class="carousel-item carousel-2" data-bs-interval="4000"></div>
      <div class="carousel-item carousel-3" data-bs-interval="4000"></div>
      <div class="carousel-item carousel-4" data-bs-interval="4000"></div>
      <div class="carousel-item carousel-5" data-bs-interval="4000"></div>
      <div class="carousel-item carousel-6" data-bs-interval="4000"></div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="home-intro">
    <div class="intro-background"></div>
    <div class="col-md-6 offset-md-6 d-flex flex-column justify-content-center word-section">
      <div class="word-box">
        <h4>東京</h4>
        <p>東京，現代與傳統交織的城市。高樓大廈、美食、購物與淺草寺、皇居花園等文化景點共存。六本木的現代藝術、秋葉原的電子天堂吸引著遊客。最令人難忘的是在東京遠足欣賞壯觀的富士山，日本的象徵。東京多元、難忘，結合古老和現代，是絕佳旅遊勝地。</p>
        <div class="d-flex justify-content-end">
            <router-link to="/products/-NhvrBxIEX5e-1UmpFg8" class="text-decoration-none text-white fst-italic">了解更多<i class="bi bi-caret-right-fill"></i></router-link>
        </div>
      </div>
    </div>
    <div class="rome-img">
      <div class="col-md-6 d-flex flex-column justify-content-center word-section">
        <div class="word-box">
          <h4>羅馬</h4>
          <p>羅馬，義大利的永恆之城，這座城市擁有悠久歷史，充滿了古羅馬的遺跡，如羅馬競技場。還可以參觀梵蒂岡城，探索聖彼得大教堂，欣賞米開朗基羅的《創世紀》壁畫。此外，羅馬還以其精緻的美食聞名，義大利披薩、千層麵和美味咖啡。在羅馬，您將沉浸在文化、藝術和美食饗宴中，感受這座城市的獨特魅力。</p>
          <div class="d-flex justify-content-end">
              <router-link to="/products/-Nhj63rfBmVnrRvf6Pnk" class="text-decoration-none text-white fst-italic">了解更多<i class="bi bi-caret-right-fill"></i></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="capetown-img">
      <div class="col-md-6 offset-md-6 d-flex flex-column justify-content-center word-section">
        <div class="word-box">
          <h4>開普敦</h4>
          <p>開普敦，南非的多元之城，擁有壯麗的山脈、美麗的海岸線和豐富的文化。可以登上桌山，欣賞城市全景，或參觀好望角，俯瞰大西洋的美麗。開普敦的海灘是放鬆、衝浪的理想之地，城市也擁有各種博物館和藝術畫廊。此外，美食也是一大亮點，品味南非美食和頂級葡萄酒。開普敦是一個綜合性旅遊目的地，滿足自然、文化和美食愛好者的一切期望。</p>
          <div class="d-flex justify-content-end">
              <router-link to="/products/-Nhp_yjIRbrahokKpt-N" class="text-decoration-none text-white fst-italic">了解更多<i class="bi bi-caret-right-fill"></i></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="subscribe text-nowrap d-flex align-items-center">
    <div class="col-md-6 p-4">
      <h4 class="mb-3">訂閱電子報，立即取得整單9折優惠！</h4>
      <form class="form" @submit="subscribe" ref="subscribe">
        <div class="input-group">
          <input type="email" id="Email" class="form-control" placeholder="請輸入Email" required>
          <button type="submit" class="btn btn-secondary">訂閱電子報</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isScrolled: false
    }
  },
  inject: ['emitter'],
  methods: {
    scrollToTokyo () {
      window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight * 1.5) {
          this.isScrolled = true
        } else {
          this.isScrolled = false
        }
      })
    },
    subscribe () {
      this.$refs.subscribe.reset()
      this.emitter.emit('notification', { title: '', content: '電子報訂閱成功！9折優惠碼：welcome' })
    }
  },
  created () {
    this.scrollToTokyo()
  }
}
</script>

<style lang="scss">

 .info-left{
    // position: relative;
  // background-image: url();
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
 }
 .content-left{
    width: 450px;
    padding: 15px;
    color: #513a31;
    background: #ffffff46;
    border-radius: 5%;
    position: absolute;
    left: 50px;
    bottom: 50px;
 }
</style>
