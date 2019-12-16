<template>
  <div class="member-info">
    <h2>會員訊息</h2>
    <div class="outer">
      <div class="d-flex info-items">
        <a href="#" class="single-item"
          ><img src="~@/assets/img/photos/矩形 26@2x.png" alt="" />
          <p class="white">
            媽媽教室報名 <br />
            CLASS
          </p>
        </a>
        <a href="#" class="single-item"
          ><img src="~@/assets/img/photos/矩形 26 拷貝@2x.png" alt="" />
          <p>門市資訊</p>
        </a>
        <a href="#" class="single-item">
          <div class="noimg"></div>
          <p>
            加入會員 <br />
            送購物金
          </p>
        </a>
      </div>
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
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
