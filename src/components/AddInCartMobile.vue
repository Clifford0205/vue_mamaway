<template>
  <div class="add-in-cart-mobile"></div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
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
