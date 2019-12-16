<template>
  <div class="main-event">
    <h2>主打活動</h2>
    <div class="carousel-area">
      <carousel
        :dots="false"
        :item="3"
        :autoWidth="true"
        :loop="true"
        :responsive="{
          0: {
            item: 1,
            nav: false,
            center: true
          },
          996: {
            item: 3
          }
        }"
      >
        <template slot="prev"><span class="prev">prev</span></template>
        <div class="item">
          <a href="">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt="" />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt="" />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt="" />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt="" />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt="" />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href="">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt="" />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <template slot="next"><span class="next">next</span></template>
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
