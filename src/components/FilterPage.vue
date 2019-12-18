<template>
  <div class="filter-page transition" style="display: none;" @click="closeMenu"></div>
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
      console.log("gg");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
