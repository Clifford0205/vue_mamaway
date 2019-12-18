<template>
  <div class="ig-area">
    <h2>Instagram</h2>

    <div class="carousel-area">
      <carousel
        :dots="false"
        :items="7"
        :loop="true"
        :nav="true"
        :margin="15"
        :responsive="{
          0: {
            dots: true,
            items: 3,
            nav: false,
            center: true,
            margin: 6
          },
          996: {
            dots: false,
            items: 7
          }
        }"
      >
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-1@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-2@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-2@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-1@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-2@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-2@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-1@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-2@2x.png" alt />
            </div>

            <div class="img-area">
              <img src="~@/assets/img/photos/圖層 3@3x-2@2x.png" alt />
            </div>
          </a>
        </div>
      </carousel>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {};
  },
  components: {
    carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
