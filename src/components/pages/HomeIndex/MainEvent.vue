<template>
  <div class="main-event">
    <h2>主打活動</h2>
    <div class="carousel-area">
      <carousel
        :dots="false"
        :items="3"
        :loop="true"
        :responsive="{
          0: {
            items: 2,
            nav: false,
            center: true,
            autoWidth:true,
          },
          996: {
            item: 3
          }
        }"
      >
        <div class="item">
          <router-link to="/product_list">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </router-link>
        </div>
        <div class="item">
          <router-link to="/product_intro">
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </router-link>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt />
            </div>
            <p>無縫孕哺內衣2件7折</p>
          </a>
        </div>
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/蒙版组 2@3x@2x.png" alt />
            </div>
            <p>無縫孕哺內衣2件7折</p>
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
