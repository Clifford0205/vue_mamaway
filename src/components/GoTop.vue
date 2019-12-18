<template>
  <div class>
    <a class="goTop" @click.prevent="goTop">
      <div class="pos">
        <!-- <div class="triangle"></div> -->
        <p class="arrow text-center">
          <img src="~@/assets/img/icons/组件 55 – 3.svg" alt />
        </p>
        <!-- <p>Top</p> -->
      </div>
    </a>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  },
  methods: {
    goTop: function() {
      $("html,body").animate(
        {
          scrollTop: 0
        },
        1000
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
