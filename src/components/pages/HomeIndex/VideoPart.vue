<template>
  <div class="video-part">
    <carousel>
      <div class="item-video" data-merge="1">
        <a
          class="owl-video"
          href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"
        ></a>
      </div>

      <div class="item-video" data-merge="1">
        <a
          class="owl-video"
          href="https://www.youtube.com/watch?v=H3jLkJrhHKQ"
        ></a>
      </div>
    </carousel>
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
