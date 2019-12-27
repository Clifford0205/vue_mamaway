<template>
  <div>
    <div class="top-float">
      <div class="top-area">
        <section class="download-area">
          <a class="close-d" @click="closeDArea">
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

              <button
                class="open-sch-forweb transition"
                :class="{noshow:schNoShow}"
                @click="showTheInput"
              >
                <img src="~@/assets/img/icons/icn_search.svg" alt />
              </button>

              <div class="search-for-web transition" :class="{show:schBarShow}">
                <div class="search-bar-area d-flex align-items-center justify-content-between">
                  <input type="text" placeholder="search" class="search-bar" />
                  <button class="search-btn" @click="hideInput">
                    <img src="~@/assets/img/icons/icn_search.svg" alt />
                  </button>
                </div>
              </div>

              <button class="like">
                <img src="~@/assets/img/icons/icn_like_g.svg" alt />
              </button>

              <button class="man" @click.stop="openDrop" :class="{active:isMemActive}">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                  <g transform="translate(-273.646 -519.741)">
                    <path
                      class="man-icon"
                      d="M403.428,15A5.69,5.69,0,0,1,397.8,9.25a5.629,5.629,0,1,1,11.255,0A5.69,5.69,0,0,1,403.428,15Zm0-10a4.251,4.251,0,1,0,4.16,4.25A4.206,4.206,0,0,0,403.428,5Z"
                      transform="translate(-115.036 519.241)"
                    />
                    <path
                      class="man-icon"
                      d="M408.3,35.75h-1.468a10.034,10.034,0,1,0-20.064,0H385.3a11.5,11.5,0,1,1,23,0Z"
                      transform="translate(-108.653 508.991)"
                    />
                  </g>
                  <rect class="back" width="28" height="28" />
                </svg>
              </button>

              <button class="cart">
                <img src="~@/assets/img/icons/icn_shop_g.svg" alt />
                <span class="num">1</span>
              </button>
            </div>

            <!-- 會員下拉式選單 -->
            <div class="float-member-area" :style="{display:memberShow}">
              <ul>
                <li>
                  <a class="float-member-item title">
                    <p>會員專區</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_bonus.svg" alt />
                    <p>紅利點數</p>
                    <p class="red-text four-text">30點</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_stored.svg" alt />
                    <p>儲值金</p>
                    <p class="red-text">5000元</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_ticket.svg" alt />
                    <p>抵用券</p>
                    <p class="red-text">1000元</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_money.svg" alt />
                    <p>購物金</p>
                    <p class="red-text">1000元</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_list2.svg" alt />
                    <p>購買訂單</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_man 拷貝.svg" alt />
                    <p>帳號設定</p>
                  </a>
                </li>
                <li>
                  <a class="float-member-item">
                    <img src="~@/assets/img/icons/icn_longout.svg" alt />
                    <p>登出</p>
                  </a>
                </li>
              </ul>
            </div>
            <!-- 會員下拉式選單 -->
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

      <!-- <router-view name="sortmenu"></router-view> -->
      <router-view name="sortmenuimg"></router-view>
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
    return {
      route: this.$route.path,
      schNoShow: false,
      schBarShow: false,
      isMemActive: false,
      memberShow: "none"
    };
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
    },
    closeDArea: function() {
      $(".download-area").css({ display: "none" });
      $(".makeup-block").addClass("short");
    },

    showTheInput: function(e) {
      let vm = this;
      vm.schNoShow = !vm.schNoShow;
      setTimeout(function() {
        e.target.parentNode.style.display = "none";
        $(".search-for-web").css({ display: "inline-block" });
        //search BAR出現的動畫
        setTimeout(function() {
          vm.schBarShow = !vm.schBarShow;
        }, 200);
      }, 200);
      console.log(e.target.parentNode);
    },

    hideInput: function(e) {
      let vm = this;
      vm.schBarShow = !vm.schBarShow;
      //search BAR消失的動畫
      setTimeout(function() {
        $(".search-for-web").css({ display: "none" });
        $(".open-sch-forweb").css({ display: "block" });
        //出現指標的動畫
        setTimeout(function() {
          vm.schNoShow = !vm.schNoShow;
        }, 200);
      }, 200);
    },

    sortChange: function() {
      if (this.$route.path == "/product_intro") {
        $(".makeup-block").addClass("two-sort");
      } else {
        $(".makeup-block").removeClass("two-sort");
      }
    },

    openDrop: function() {
      let vm = this;
      vm.isMemActive = !vm.isMemActive;
    },

    watchMem: function() {
      let vm = this;
      if (vm.isMemActive) {
        vm.memberShow = "block";
      } else {
        vm.memberShow = "none";
      }
    }
  },

  watch: {
    // $route(to, from) {
    //   alert("路徑改變");
    //   console.log("路徑改變");
    //   if (this.$route.path == "/product_intro") {
    //     $(".makeup-block").addClass("two-sort");
    //   } else {
    //     $(".makeup-block").removeClass("two-sort");
    //   }
    // }
    isMemActive: function() {
      this.watchMem();
    }
  },

  updated() {
    this.sortChange();
    // console.log(this.$route);
    // console.log(this.$route.path);
    // if (this.$route.path !== "/") {
    //   $(".makeup-block").addClass("no-sort");
    // }
    // if (this.$route.path == "/product_intro") {
    //   $(".makeup-block").addClass("two-sort");
    // }
  },

  mounted() {
    let vm = this;
    vm.sortChange();
    let body = document.body;
    console.log(body);
    body.addEventListener(
      "click",
      function() {
        vm.isMemActive = false;
        vm.memberShow = "none";
      },
      false
    );
    // console.log(this.$route);
    // console.log(this.$route.path);
    // if (this.$route.path !== "/" || this.$route.path !== "/product_intro") {
    //   $(".makeup-block").addClass("no-sort");
    // }
    // if (this.$route.path == "/product_intro") {
    //   $(".makeup-block").addClass("two-sort");
    // }
    // if ($(".sort-menu").length == 0) {
    //   $(".makeup-block").addClass("no-sort");
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
