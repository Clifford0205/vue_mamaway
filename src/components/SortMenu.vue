<template>
  <div>
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
