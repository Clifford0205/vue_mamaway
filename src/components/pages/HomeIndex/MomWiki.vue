<template>
  <div class="mom-wiki">
    <h2>媽媽百科</h2>

    <div class="carousel-area forweb">
      <carousel :dots="false" :items="2" :nav="true" :loop="true">
        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 14 拷貝 3@2x.png" alt />
              <div class="d-flex describe">
                <p class="title">懷孕百科</p>
                <a class="more">看更多</a>
              </div>
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 14 拷貝 3-1@2x.png" alt />
              <div class="d-flex describe">
                <p class="title">懷孕百科</p>
                <a class="more">看更多</a>
              </div>
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 14 拷貝 3@2x.png" alt />
              <div class="d-flex describe">
                <p class="title">懷孕百科</p>
                <a class="more">看更多</a>
              </div>
            </div>
          </a>
        </div>

        <div class="item">
          <a href>
            <div class="img-area">
              <img src="~@/assets/img/photos/矩形 14 拷貝 3-1@2x.png" alt />
              <div class="d-flex describe">
                <p class="title">懷孕百科</p>
                <a class="more">看更多</a>
              </div>
            </div>
          </a>
        </div>
      </carousel>
    </div>

    <div class="formobile">
      <div class="item">
        <a href>
          <div class="img-area">
            <img src="~@/assets/img/photos/矩形 14 拷貝 3@2x.png" alt />
            <div class="d-flex describe">
              <p class="title">懷孕百科</p>
              <a class="more">看更多</a>
            </div>
          </div>
        </a>
      </div>

      <div class="item">
        <a href>
          <div class="img-area">
            <img src="~@/assets/img/photos/矩形 14 拷貝 3@2x.png" alt />
            <div class="d-flex describe">
              <p class="title">懷孕百科</p>
              <a class="more">看更多</a>
            </div>
          </div>
        </a>
      </div>

      <div class="item">
        <a href>
          <div class="img-area">
            <img src="~@/assets/img/photos/矩形 14 拷貝 3@2x.png" alt />
            <div class="d-flex describe">
              <p class="title">懷孕百科</p>
              <a class="more">看更多</a>
            </div>
          </div>
        </a>
      </div>

      <div class="item">
        <a href>
          <div class="img-area">
            <img src="~@/assets/img/photos/矩形 14 拷貝 3@2x.png" alt />
            <div class="d-flex describe">
              <p class="title">懷孕百科</p>
              <a class="more">看更多</a>
            </div>
          </div>
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
