<template>
  <div class="filter-page transition">
    <div class="top-btns">
      <button @click="closeFilter">
        <i class="fas fa-chevron-left"></i>
        <span>返回</span>
      </button>

      <button class="clear-all">
        <img src="~@/assets/img/icons/icn_clear 拷貝.svg" alt />
        <span>全部清除</span>
      </button>
    </div>

    <div class="filter-items">
      <div class="single-item">
        <div class="item-titile">
          <span>尺寸</span>
          <i class="fas fa-angle-down"></i>
        </div>
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
          <button>2XL</button>
        </div>
      </div>

      <div class="single-item">
        <div class="item-titile">
          <span>款式</span>
          <i class="fas fa-angle-down"></i>
        </div>
        <div class="options">
          <button>長袖</button>
          <button>短袖</button>
          <button>襯衫</button>
        </div>
      </div>

      <div class="single-item">
        <div class="item-titile">
          <span>價格</span>
          <i class="fas fa-angle-down"></i>
        </div>
        <div class="options">
          <div class="price-area">
            <input type="text" placeholder="最低價" class="lowest" />
            <span class="range">~</span>
            <input type="text" placeholder="最高價" class="highest" />
          </div>

          <button class="filter-btn">篩選商品</button>
        </div>
      </div>
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
  },
  methods: {
    closeFilter: function() {
      $(".filter-page").css({ display: "none" });
      $("body").removeClass("filter-page-open");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
