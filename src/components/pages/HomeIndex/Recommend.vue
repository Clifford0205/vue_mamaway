<template>
  <div class="recommend">
    <h2>穿搭推薦</h2>

    <div class="carousel-area">
      <carousel
        :dots="false"
        :items="4"
        :loop="true"
        :margin="27"
        :responsive="{
          0: {
            items: 1,
            autoWidth:true,
            nav: false,
            center: true
          },
          996: {
            item: 4
          }
        }"
      >
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x-1@2x.png" alt />
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 3@3x@2x.png" alt />
            </div>
          </a>
        </div>
      </carousel>
    </div>

    <a href class="more">更多穿搭</a>
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
