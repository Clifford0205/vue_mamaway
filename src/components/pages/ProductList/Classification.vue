<template>
  <div class="classification">
    <div class="menu-frame" @click.stop>
      <div class="all-list">
        <div class="for-mothers">
          <h3 class="cl-title">商品分類</h3>
          <div class="list-title">孕哺服飾</div>
          <ul class="mother-list">
            <li>
              <a href class="active">孕哺內睡衣</a>
              <ul class="little-list">
                <li>
                  <a href>月子內衣</a>
                </li>
                <li>
                  <a href>無縫內衣</a>
                </li>
                <li>
                  <a href>軟鋼圈內衣</a>
                </li>
                <li>
                  <a href>BRA TOPS</a>
                </li>
                <li>
                  <a href>居家孕哺衣</a>
                </li>
                <li>
                  <a href>修飾衣</a>
                </li>
                <li>
                  <a href>內褲</a>
                </li>
              </ul>
            </li>
          </ul>

          <h3 class="cl-title except-one">熱門關鍵字</h3>
          <div class="key-words">
            <div class="d-flex one-line">
              <a href class="red-box">待產包</a>
              <a href class="red-box">托腹帶</a>
            </div>

            <div class="d-flex one-line">
              <a href class="red-box">雙11限定</a>
              <a href class="red-box">雙11限定</a>
            </div>
          </div>

          <h3 class="cl-title except-one">最新活動</h3>
          <ul class="event-list-img">
            <li class="img-area">
              <a href>
                <img src="~@/assets/img/photos/20191126-MENU@2x.png" alt />
              </a>
            </li>
            <li class="img-area">
              <a href>
                <img src="~@/assets/img/photos/20191126-MENU@2x.png" alt />
              </a>
            </li>
            <li class="img-area">
              <a href>
                <img src="~@/assets/img/photos/20191126-MENU@2x.png" alt />
              </a>
            </li>
          </ul>
          <ul class="event-list-text">
            <li>
              <a href>BABY服飾｜3件$999(網路限定)</a>
            </li>
            <li>
              <a href>零碼抗菌內褲│買1送1(網路限定)</a>
            </li>
            <li>
              <a href>春夏包屁衣│買2送1</a>
            </li>
            <li>
              <a href>米妮居家服│加1元送BABY貼腿褲</a>
            </li>
            <li>
              <a href>親子居家服│加1元送1件BABY居...</a>
            </li>
            <li>
              <a href>春夏孕哺衣│買2送1</a>
            </li>
          </ul>
        </div>
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
