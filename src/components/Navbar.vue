<template>
  <div>
    <div class="top-float">
      <div class="top-area">
        <section class="download-area">
          <a class="close-d">
            <img src="~@/assets/img/icons/icn_close-1.svg" alt />
          </a>
          <p>寶寶大餵營APP</p>
          <a href class="d-btn">下載</a>
        </section>

        <nav class>
          <div class="nav-inside">
            <a class="web-menu" @click.prevent="openMenu">
              <img src="~@/assets/img/icons/icn_menu_b.svg" alt />
            </a>
            <div class="theLogo mx-auto">
              <img src="~@/assets/img/icons/LOGO2@2x.png" alt class="logo" />
            </div>
            <div class="features ml-auto d-flex justify-content-end">
              <button class="open-sch">
                <img src="~@/assets/img/icons/icn_search.svg" alt />
              </button>

              <button class="open-sch-forweb transition">
                <img src="~@/assets/img/icons/icn_search.svg" alt />
              </button>

              <div class="search-for-web transition">
                <div class="search-bar-area d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="search" class="search-bar" />
                  <button class="search-btn">
                    <img src="~@/assets/img/icons/icn_search.svg" alt />
                  </button>
                </div>
              </div>

              <button class="like">
                <img src="~@/assets/img/icons/icn_like_g.svg" alt />
              </button>

              <button class="man">
                <img src="~@/assets/img/icons/icn_man_g.svg" alt />
              </button>

              <button class="cart">
                <img src="~@/assets/img/icons/icn_shop_g.svg" alt />
                <span class="num">1</span>
              </button>
            </div>
          </div>
        </nav>

        <div class="search-area transition" style="display: none;">
          <div class="search-bar-area d-flex align-items-center justify-content-between">
            <input type="text" placeholder="search" class="search-bar" />
            <button class="s-btn">
              <img src="~@/assets/img/icons/icn_search.svg" alt />
            </button>
          </div>
          <button class="cancel">取消</button>
        </div>
      </div>

      <div class="sort-menu">
        <carousel :items="4" :dots="false" :nav="false">
          <a class="text-center classify activity">孕哺時尚</a>
          <a class="text-center classify">迪士尼</a>
          <a class="text-center classify">機能用品</a>
          <a class="text-center classify">寶寶衣著</a>
          <a class="text-center classify">孕哺時尚</a>
          <a class="text-center classify">迪士尼</a>
          <a class="text-center classify">機能用品</a>
          <a class="text-center classify">寶寶衣著</a>
        </carousel>
      </div>
    </div>

    <!-- fixed留白區域 -->
    <div class="makeup-block"></div>
    <!-- fixed留白區域 -->
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
    openMenu: function() {
      $(".big-menu").css({ display: "flex" });
      setTimeout(function() {
        $(".big-menu").addClass("menu-show");
      }, 500);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
