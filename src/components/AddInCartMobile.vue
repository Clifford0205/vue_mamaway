<template>
  <div class="add-in-cart-mobile">
    <div class="for-pos">
      <button class="cart-close" @click="closeCartMobile">
        <img src="~@/assets/img/icons/icn_close_b.svg" alt />
      </button>

      <div class="main-img-title">
        <div class="img-area">
          <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
        </div>

        <div class="text-area">
          <div class>
            <div class="number">M106192065</div>
            <div class="title">襯衫式印花孕哺洋裝</div>
            <p class="o-price">NT$1380</p>
            <div class="d-flex new-price">
              <p class="offer-text">活動價</p>
              <p class="offer-NT">NT$990</p>
            </div>
          </div>
        </div>
      </div>

      <div class="choose-color">
        <p class="color-title">顏色 / 黑色</p>
        <div class="d-flex colors">
          <div class="color-out">
            <div class="colorinit color-in1"></div>
          </div>

          <div class="color-out">
            <div class="colorinit color-in2"></div>
          </div>

          <div class="color-out">
            <div class="colorinit color-in3"></div>
          </div>
        </div>
      </div>

      <div class="choose-size">
        <div class="d-flex">
          <p class="size-title">尺寸 / M</p>
          <a href class="look-table">查看尺寸表</a>
        </div>
        <div class="size-btns">
          <button class="class-btn">XS</button>
          <button class="class-btn">S</button>
          <button class="class-btn activity">M</button>
          <button class="class-btn">L</button>
          <button class="class-btn unavailable">XL</button>
        </div>
      </div>

      <div class="quantity">
        <p class="quantity-title">購買數量</p>
        <div class="count">
          <button class="minus">-</button>
          <input type="text" placeholder="0" />
          <button class="plus">+</button>
        </div>
      </div>

      <button class="confirm">確認加入</button>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },

  methods: {
    closeCartMobile: function() {
      $(".add-in-cart-mobile").css({ display: "none" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
