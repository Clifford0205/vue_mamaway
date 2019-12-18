<template>
  <div class="video-part">
    <div class="carousel-area">
      <carousel
        :dots="true"
        :items="1"
        :nav="false"
        :loop="true"
        :responsive="{
          0: {
            items: 1,
            center: true
          },
          996: {
            items: 1
          }
        }"
        class="video-carousel"
      >
        <div class="item-video" data-merge="1">
          <a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a>
        </div>

        <div class="item-video" data-merge="1">
          <a class="owl-video" href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"></a>
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
