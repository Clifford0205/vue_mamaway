<template>
  <div class="product-kv">
    <div class="carousel-area">
      <carousel :dots="false" :item="1">
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 13@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 13@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 13@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 13@2x.png" alt />
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
