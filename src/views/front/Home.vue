<template>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="5000">
        <img src="@/assets/images/banner-japan.jpeg" class="d-block" alt="日本"/>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img src="@/assets/images/banner-thailand.jpeg" class="d-block" alt="泰國"/>
      </div>
      <div class="carousel-item" data-bs-interval="5000">
        <img src="@/assets/images/banner-bali.jpeg" class="d-block" alt="峇里島"/>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  <div class="row mt-2">
    <img src="@/assets/images/tokyo.jpeg" alt="" class="col-md-6 info-left">
    <div class="col-md-6 p-5">
        <h4>東京</h4>
        <p>東京，現代與傳統交織的城市。高樓大廈、美食、購物與淺草寺、皇居花園等文化景點共存。六本木的現代藝術、秋葉原的電子天堂吸引著遊客。最令人難忘的是在東京遠足欣賞壯觀的富士山，日本的象徵。東京多元、難忘，結合古老和現代，是絕佳旅遊勝地。</p>
        <div class="d-flex justify-content-end">
            <router-link to="/products" class="text-decoration-none">了解更多<i class="bi bi-caret-right-fill"></i></router-link>
        </div>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-6 p-5">
        <h4>清邁</h4>
        <p>清邁，泰國北部的寶石，它以壯麗的山脈、古老的寺廟和豐富的文化而聞名。遠離城市喧囂，你可以在這裡探索寧靜的寺廟如華倫府寺和白廊寺。試試當地美食，品嚐風味獨特的泰國菜，無論是辣炒粉絲、泰國綠咖哩還是香甜的芒果糯米飯。清邁也是購物的天堂，擁有當地工藝品、手工藝品和藝術品。當然，別忘了參與大象保護中心的志願工作，體驗與大自然親近的樂趣。清邁將給你帶來一段富有魅力的泰國文化之旅。</p>
        <div class="d-flex justify-content-end">
            <router-link to="/products" class="text-decoration-none">了解更多<i class="bi bi-caret-right-fill"></i></router-link>
        </div>
    </div>
    <img src="@/assets/images/chiang_mai.jpeg" alt="" class="col-md-6">
  </div>
  <div class="row mt-2">
    <img src="@/assets/images/bali.jpeg" alt="" class="col-md-6">
    <div class="col-md-6 p-5">
        <h4>峇里島</h4>
        <p>峇里島，印尼的天堂島嶼，以其迷人的自然風光和獨特的文化而聞名於世。在這裡，你可以沉浸在潔白的沙灘、湛藍的海水和壯觀的椰樹森林中。參觀峇里寺廟，如翁加蘭水廟和波羅水廟，感受當地宗教的神秘氛圍。峇里島的藝術和手工藝品充滿當地風情，從木雕、織品到銀飾，應有盡有。探索翡翠綠的稻田，參與冥想課程，品嚐當地美食，如美味的峇里咖啡和傳統巴巴吉多。峇里島是一個充滿靈感的度假勝地，結合了自然之美和文化之深。</p>
        <div class="d-flex justify-content-end">
            <router-link to="/products" class="text-decoration-none">了解更多<i class="bi bi-caret-right-fill"></i></router-link>
        </div>
    </div>
  </div>
</template>

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
