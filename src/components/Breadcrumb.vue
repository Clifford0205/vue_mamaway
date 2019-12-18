<template>
  <div aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <a href="#">首頁</a>
      </li>
      <li class="breadcrumb-item">
        <a href="#">孕哺服飾</a>
      </li>
      <li class="breadcrumb-item active" aria-current="page">
        <a href="#">內衣著孕</a>
      </li>
    </ol>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import vSelect from "vue-select";
import "vue-select/src/scss/vue-select.scss";
export default {
  data() {
    return {};
  },
  components: {
    carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
