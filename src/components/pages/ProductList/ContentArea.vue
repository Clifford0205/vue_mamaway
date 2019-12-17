<template>
  <div>
    <div class="container contentarea">
      <div class="row">
        <div class="col-lg-2">
          <Classification />
        </div>
        <div class="col-lg-10"></div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import Classification from "./Classification";

export default {
  data() {
    return {};
  },
  components: {
    carousel,
    Classification
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
