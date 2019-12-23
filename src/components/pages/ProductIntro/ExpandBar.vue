<template>
  <div class="expand-bar">
    <a class="expand-item" @click.prevent="expandItem">
      <div class="expand-menu-title">
        罩杯上升期
        <i class="fas fa-chevron-right transition"></i>
      </div>

      <div class="expand-content transition"></div>
    </a>

    <a class="expand-item" @click.prevent="expandItem">
      <div class="expand-menu-title">
        罩杯上升期
        <i class="fas fa-chevron-right transition"></i>
      </div>

      <div class="expand-content transition"></div>
    </a>

    <a class="expand-item" @click.prevent="expandItem">
      <div class="expand-menu-title">
        罩杯上升期
        <i class="fas fa-chevron-right transition"></i>
      </div>

      <div class="expand-content transition"></div>
    </a>

    <a class="expand-item" @click.prevent="expandItem">
      <div class="expand-menu-title">
        罩杯上升期
        <i class="fas fa-chevron-right transition"></i>
      </div>

      <div class="expand-content transition"></div>
    </a>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
