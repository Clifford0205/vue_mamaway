<template>
  <div class="intro-slider">
    <div class="carousel-area">
      <carousel :items="1" :nav="false">
        <img src="~@/assets/img/photos/20191028_bottomsale_w828@2x 拷貝.png" />
        <img src="~@/assets/img/photos/20191028_bottomsale_w828@2x 拷貝.png" />
        <img src="~@/assets/img/photos/20191028_bottomsale_w828@2x 拷貝.png" />
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
<style scoped lang="scss">
</style>
