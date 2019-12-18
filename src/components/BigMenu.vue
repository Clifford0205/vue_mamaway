<template>
  <div class="big-menu transition" style="display: none;" @click="closeMenu">
    <div class="menu-frame" @click.stop>
      <div class="logo-search">
        <div class="menu-logo">
          <img src="~@/assets/img/icons/logo.png" alt />
        </div>

        <div class="search-bar-area d-flex align-items-center justify-content-between">
          <input type="text" placeholder="search" class="search-bar" />
          <button class="s-btn">
            <img src="~@/assets/img/icons/icn_search.svg" alt />
          </button>
        </div>
      </div>

      <div class="web-close" @click="closeMenu">
        <img src="~@/assets/img/icons/icn_close_b.svg" alt />
      </div>

      <div class="all-list">
        <div class="for-mothers">
          <div class="list-title">孕哺服飾</div>
          <ul class="mother-list">
            <li>
              <a href>孕哺內睡衣</a>
              <ul class="little-list">
                <li>
                  <a href>月子內衣</a>
                </li>
                <li>
                  <a href>無縫內衣</a>
                </li>
                <li>
                  <a href>軟鋼圈內衣</a>
                </li>
                <li>
                  <a href>BRA TOPS</a>
                </li>
                <li>
                  <a href>居家孕哺衣</a>
                </li>
                <li>
                  <a href>居家孕哺衣</a>
                </li>
                <li>
                  <a href>內褲</a>
                </li>
              </ul>
            </li>
            <li>
              <a href>產後/產前必須</a>
            </li>
            <li>
              <a href>寶貝衣服</a>
            </li>
            <li>
              <a href>雙邊電動吸乳</a>
            </li>
            <li>
              <a href>背巾/背帶</a>
            </li>
            <li>
              <a href>抗菌床寢</a>
            </li>
            <!-- 該項目不一定會有 -->
            <li class="sales">
              <a href class="sales-text">SALE 特惠活動</a>
              <a href class="sales-img">
                <img src="~@/assets/img/photos/20191126-MENU@2x.png" alt />
              </a>
            </li>
          </ul>

          <ul class="expand-menu">
            <li class="expand-item">
              <a class="expand-menu-title">
                MAMAWAY CLUB
                <i class="fas fa-chevron-right transition"></i>
              </a>
            </li>
            <li class="expand-item">
              <a class="expand-menu-title">
                媽媽百科
                <i class="fas fa-chevron-right transition"></i>
              </a>
            </li>
            <li class="expand-item for-mobile">
              <a class="expand-menu-title">
                購物指南
                <i class="fas fa-chevron-right transition"></i>
              </a>
              <ul class="little-item transition">
                <li>
                  <a href>購物常見問題</a>
                </li>
                <li>
                  <a href>退換貨問題</a>
                </li>
                <li>
                  <a href>購物金、抵用券問題</a>
                </li>
                <li>
                  <a href>儲值金問題</a>
                </li>
                <li>
                  <a href>發票問題</a>
                </li>
                <li>
                  <a href>海外訂購</a>
                </li>
                <li>
                  <a href>會員紅利問題</a>
                </li>
                <li>
                  <a href>尺寸建議</a>
                </li>
              </ul>
            </li>
            <li class="expand-item for-mobile">
              <a class="expand-menu-title">
                關於我們
                <i class="fas fa-chevron-right transition"></i>
              </a>
              <ul class="little-item transition">
                <li>
                  <a href>最新消息</a>
                </li>
                <li>
                  <a href>門市據點</a>
                </li>
                <li>
                  <a href>品牌故事</a>
                </li>
                <li>
                  <a href>人力招募</a>
                </li>
                <li>
                  <a href>隱私權聲明</a>
                </li>
              </ul>
            </li>
            <li class="expand-item for-mobile">
              <a class="expand-menu-title">
                FOLLOW US
                <i class="fas fa-chevron-right transition"></i>
              </a>
              <ul class="little-item transition follow">
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_fb_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_line_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_ig_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_pin_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_b_b.svg" alt />
                  </a>
                </li>
                <li>
                  <a href>
                    <img src="~@/assets/img/icons/btn_youtube_b.svg" alt />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="cross">
      <button>
        <img src="~@/assets/img/icons/icn_close-1.svg" alt />
      </button>
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
    closeMenu: function() {
      $(".big-menu").removeClass("menu-show");
      setTimeout(function() {
        $(".big-menu").css({ display: "none" });
      }, 500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
