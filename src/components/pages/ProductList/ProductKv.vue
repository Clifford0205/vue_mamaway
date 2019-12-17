<template>
  <div class="product-kv">
    <div class="carousel-area">
      <carousel
        :dots="true"
        :items="1"
        :loop="true"
        :responsive="{
          0: {
            dots: true,
            nav: false
          },
          996: {
            dots: false,
            nav: true
          }
        }"
      >
        <img src="~@/assets/img/photos/矩形 13@2x.png" />
        <img src="~@/assets/img/photos/矩形 13@2x.png" />
        <img src="~@/assets/img/photos/矩形 13@2x.png" />
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
