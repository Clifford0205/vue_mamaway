<template>
  <div class="filter-box">
    <div class="single-item">
      <div class="item-titile">尺寸</div>
      <div class="options">
        <button>XS</button>
        <button class="sold-out">
          S
          <span class="triangle"></span>
          <img src="~@/assets/img/icons/icn_close10.svg" alt />
        </button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>

        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>

        <button>XS</button>
        <button>S</button>
        <button>M</button>
        <button>L</button>
        <button>XL</button>
      </div>
    </div>
    <div class="single-item">
      <div class="item-titile">款式</div>
      <div class="options">
        <button>長袖</button>
        <button>短袖</button>
        <button>襯衫</button>
        <button>短袖</button>
      </div>
    </div>
    <div class="single-item">
      <div class="item-titile">價格</div>
      <div class="options">
        <div class="price-area d-flex">
          <input type="text" placeholder="最低價" class="lowest" />
          <span class="range">~</span>
          <input type="text" placeholder="最高價" class="highest" />
        </div>

        <button class="filter-btn">篩選商品</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import vSelect from "vue-select";
import "vue-select/src/scss/vue-select.scss";
export default {
  data() {
    return {
      options: [
        {
          title: "Visa",
          cardImage: "~@/assets/img/icons/组件 33 – 3.svg"
        },
        {
          title: "country1",
          cardImage: "https://via.placeholder.com/20"
        }
      ]
    };
  },
  components: {
    carousel,
    vSelect
  },
  methods: {
    openFilter: function() {
      $(".filter-page").css({ display: "block" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
