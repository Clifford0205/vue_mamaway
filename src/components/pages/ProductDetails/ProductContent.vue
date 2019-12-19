<template>
  <div class="row product-content">
    <div class="format-menu">
      <div class="btns">
        <a class="menubtn active">商品內容</a>
        <a class="menubtn">尺寸表</a>
        <a class="menubtn">商品規格</a>
      </div>
    </div>

    <div class="the-line"></div>

    <div class="product-description">
      <ul>
        <li>●立體五分袖，遮住手臂肉</li>
        <li>●抓皺ALINE剪裁，更顯瘦</li>
        <li>●夏日清新風格</li>
        <li>●涼爽材質, 透氣不悶熱</li>
        <li>●背心+罩衫，可分開隨意搭配</li>
        <li>
          ●可與B101191714搭配親子裝→
          <a href>請點我</a>
        </li>
      </ul>

      <p class="inform">※親愛的顧客，您好，每台電腦皆有色差之問題，標準顏色以實品為準。 下單前請仔細對照上方衣服尺寸表、試穿建議報告，再依您的身材挑選合適的尺吋！</p>
    </div>

    <div class="Intro-img">
      <img src="~@/assets/img/photos/B101192720-1000@2x.png" alt />
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
