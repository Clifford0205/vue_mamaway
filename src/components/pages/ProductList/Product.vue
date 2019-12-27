<template>
  <div class="single-product col-lg-3 col-6">
    <div class="item">
      <router-link to="/product_details">
        <div class="img-area">
          <img
            :src="product.img"
            alt
            @click.capture="showSlider"
            class="start-img"
            :style="{display:isImgShow}"
          />
          <carousel
            :items="1"
            :dots="true"
            :nav="false"
            class="the-carousel"
            :loop="true"
            :style="{display:isCaShow}"
          >
            <template slot="prev">
              <button class="prev" @click="preventRoute">
                <img src="~@/assets/img/icons/icn_arrow_l.svg" alt />
              </button>
            </template>

            <template slot="next">
              <button class="next" @click="preventRoute" style="display:block">
                <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
              </button>
            </template>
            <div class="slider-item">
              <img :src="product.carouselImg" alt />
            </div>

            <div class="slider-item">
              <img :src="product.carouselImg" alt />
            </div>

            <div class="slider-item">
              <img :src="product.carouselImg" alt />
            </div>
          </carousel>

          <!-- <button @click.capture="test">></button> -->

          <div class="circle">
            <object>
              <a href="https://github.com/dashboard" class="love-area">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20.16"
                  viewBox="0 0 24 20.16"
                >
                  <path
                    class="a"
                    d="M140.9,25.56l-.335-.144c-.1-.048-9.439-5.315-10.973-9.673s-.383-6.177.623-7.614a6.278,6.278,0,0,1,4.839-2.73A6.832,6.832,0,0,1,140.9,8.034,6.832,6.832,0,0,1,146.744,5.4a6.278,6.278,0,0,1,4.839,2.73c1.006,1.389,1.917,3.879.623,7.614s-10.877,9.673-10.973,9.673ZM135.052,6.884a4.84,4.84,0,0,0-3.642,2.107c-.815,1.149-1.533,3.113-.431,6.273s8.241,7.758,9.918,8.667c1.629-.91,8.769-5.411,9.919-8.667s.383-5.124-.431-6.273a4.84,4.84,0,0,0-3.642-2.107,5.234,5.234,0,0,0-5.175,2.969l-.671,1.58-.671-1.58A5.273,5.273,0,0,0,135.052,6.884Z"
                    transform="translate(-128.845 -5.4)"
                  />
                </svg>
                <svg
                  class="black transition"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20.16"
                  viewBox="0 0 24 20.16"
                >
                  <path
                    class="love"
                    d="M140.9,25.56l-.335-.144c-.1-.048-9.439-5.315-10.973-9.673s-.383-6.177.623-7.614a6.278,6.278,0,0,1,4.839-2.73A6.832,6.832,0,0,1,140.9,8.034,6.832,6.832,0,0,1,146.744,5.4a6.278,6.278,0,0,1,4.839,2.73c1.006,1.389,1.917,3.879.623,7.614s-10.877,9.673-10.973,9.673Z"
                    transform="translate(-128.845 -5.4)"
                  />
                </svg>
              </a>
            </object>
          </div>
        </div>
        <p class="title">{{product.title}}</p>
        <div class="d-flex price">
          <p class="o-price">{{product.oldPrice}}</p>
          <p class="new-price">{{product.newPrice}}</p>
        </div>
        <object>
          <a class="buy">買2送1</a>
        </object>
      </router-link>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
// import carousel from "vue-owl-carousel";
import carousel from "@/components/library/Carousel";

export default {
  // props: ['product'],
  props: {
    product: {
      require: true,
      type: Object
    }
  },
  data() {
    return {
      isThreeCol: false,
      isCaShow: "none",
      isImgShow: "block"
    };
  },
  components: {
    carousel
  },
  methods: {
    showSlider: function(e) {
      let vm = this;
      e.preventDefault();
      vm.isImgShow = "none";
      vm.isCaShow = "block";
      // setTimeout(function() {
      // }, 500);
    },

    sliderMove: function() {
      e.preventDefault();
    },

    preventRoute: function(e) {
      e.preventDefault();

      // alert("test");
    }
    // test: function(e) {
    //   e.preventDefault();
    //   console.log(e.target.parentNode.querySelector(".owl-next"));
    //   let next = e.target.parentNode.querySelector(".owl-next");
    //   next.click();
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
