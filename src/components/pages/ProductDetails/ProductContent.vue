<template>
  <div class="row product-content">
    <div class="format-menu">
      <div class="btns">
        <a class="menubtn active">商品內容</a>
        <a class="menubtn">尺寸表</a>
        <a class="menubtn">商品材質</a>
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

    <div class="size-table">
      <img src="~@/assets/img/photos/尺寸表.svg" alt />
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <a class="expand-item" @click.prevent="expandItem">
          <div class="expand-menu-title">
            尺寸表
            <i class="fas fa-chevron-right transition"></i>
          </div>

          <div class="expand-content transition"></div>
        </a>
      </div>
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <a class="expand-item" @click.prevent="expandItem">
          <div class="expand-menu-title">
            商品描述
            <i class="fas fa-chevron-right transition"></i>
          </div>

          <div class="expand-content transition"></div>
        </a>
      </div>
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <a class="expand-item" @click.prevent="expandItem">
          <div class="expand-menu-title">
            商品材質
            <i class="fas fa-chevron-right transition"></i>
          </div>

          <div class="expand-content transition">
            <ul class="texture">
              <li>MAIN：100%POLYESTER</li>
              <li>OTHER：96%COTTON 4%POLYESTER</li>
              <li>哺乳開口：門襟式-兩側腋下哺乳開口</li>
              <li>洗滌：機洗/低溫/入袋/反面/不可浸泡/不可漂白/不可烘乾</li>
              <li>彈性：適中</li>
              <li>產地：台灣</li>
            </ul>
          </div>
        </a>
      </div>
    </div>

    <div class="product-detail">
      <div class="mobile-content">
        <a class="expand-item" @click.prevent="expandItem">
          <div class="expand-menu-title">
            商品詳情
            <i class="fas fa-chevron-right transition"></i>
          </div>

          <div class="expand-content transition">
            <div class="Intro-img-mobile">
              <img src="~@/assets/img/photos/B101192720-1000@2x.png" alt />
            </div>

            <div class="size-table-mobile">
              <img src="~@/assets/img/photos/尺寸表.svg" alt />
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";

export default {
  data() {
    return {
      // expand: false
    };
  },
  components: {
    carousel
  },
  methods: {
    expandItem: function() {
      // this.expand = !this.expand;
      $(".expand-item").toggleClass("open-menu");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
