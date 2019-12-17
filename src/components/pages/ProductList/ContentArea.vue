<template>
  <div>
    <div class="container contentarea">
      <div class="row">
        <div class="col-lg-4">
          <Classification />
        </div>
        <div class="col-lg-8">
          <ContentListNav />
          <Products />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import Classification from "./Classification";
import ContentListNav from "./ContentListNav";
import Products from "./Products";

export default {
  data() {
    return {};
  },
  components: {
    carousel,
    Classification,
    ContentListNav,
    Products
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
