<template>
  <div>
    <div class=" contentarea">
      <div class="row">
        <div class="col-lg-4">
          <Classification />
        </div>
        <div class="col-lg-8">
          <ContentListNav />
          <Products />
          <Pagination />
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
import Pagination from "./Pagination";

export default {
  data() {
    return {};
  },
  components: {
    carousel,
    Classification,
    ContentListNav,
    Products,
    Pagination
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
