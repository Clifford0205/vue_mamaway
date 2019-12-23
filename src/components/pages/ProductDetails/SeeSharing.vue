<template>
  <div class="see-sharing">
    <div class="area-900">
      <h2>見證分享</h2>
      <div class="carousel-area">
        <carousel
          :dots="true"
          :items="3"
          :loop="true"
          :nav="true"
          :margin="30"
          :responsive="{
          0: {
            dots: true,
            items: 2,
            nav: false,
            margin: 5
          },
          996: {
            dots: false,
            items: 3
          }
        }"
        >
          <div class="item">
            <a href>
              <div class="img-area">
                <img src="~@/assets/img/photos/矩形 26-1@2x.png" alt />
              </div>
            </a>
          </div>

          <div class="item">
            <a href>
              <div class="img-area">
                <img src="~@/assets/img/photos/矩形 26@2x 拷貝.png" alt />
              </div>
            </a>
          </div>
          <div class="item">
            <a href>
              <div class="img-area">
                <img src="~@/assets/img/photos/矩形 26-1@2x.png" alt />
              </div>
            </a>
          </div>

          <div class="item">
            <a href>
              <div class="img-area">
                <img src="~@/assets/img/photos/矩形 26@2x 拷貝.png" alt />
              </div>
            </a>
          </div>

          <div class="item">
            <a href>
              <div class="img-area">
                <img src="~@/assets/img/photos/矩形 26-1@2x.png" alt />
              </div>
            </a>
          </div>
        </carousel>
      </div>
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
