<template>
  <div>
    <div class="sort-menu-img">
      <carousel :items="4" :dots="false" :nav="false">
        <a class="text-center classify activity">
          <p class="text-center">
            <img src="~@/assets/img/icons/btn_fb_h.svg" alt />
          </p>
          <p class="title">全部商品</p>
        </a>
        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>

        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>

        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>

        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>

        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>

        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>

        <a class="text-center classify">
          <img src="~@/assets/img/icons/btn_line_h.svg" alt />
          <p class="title">寶寶衣著</p>
        </a>
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
