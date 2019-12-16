<template>
  <div class="footer">
    <div class="order">
      <input type="text" placeholder="請輸入你的EMAIL" class />
      <button class>訂閱電子報</button>
    </div>

    <div class="socials d-flex">
      <a href>
        <img src="~@/assets/img/icons/btn_fbw.svg" alt />
      </a>
      <a href>
        <img src="~@/assets/img/icons/btn_linew.svg" alt />
      </a>
      <a href>
        <img src="~@/assets/img/icons/btn_igw.svg" alt />
      </a>
      <a href>
        <img src="~@/assets/img/icons/btn_pinw.svg" alt />
      </a>
      <a href>
        <img src="~@/assets/img/icons/btn_youtube.svg" alt />
      </a>
      <a href>
        <img src="~@/assets/img/icons/btn_bw.svg" alt />
      </a>
    </div>
    <div class="country">
      <div class="forweb align-items-center justify-content-center">
        <p>WORLD MAMAWAY</p>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/圖層 10@2x.png" alt class="global" />GLOBAL
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-9.png" alt />AUSTRALIA
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-8@2x.png" alt />NEW
          ZEALAND
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-7@2x.png" alt />中國大陸
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-6.png" alt />港、澳地區
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-5@2x.png" alt />印尼
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-1@2x.png" alt />菲律賓
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-2@2x.png" alt />俄羅斯
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-3.png" alt />UK
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞-4.png" alt />馬來西亞
        </a>
        <a href class="d-flex align-items-center">
          <img src="~@/assets/img/photos/澳大利亞@2x.png" alt />美國
        </a>
      </div>

      <div class="formobile">
        <div class="line"></div>
        <p>WORLD MAMAWAY</p>
        <!-- <select name="" id="">
                    <option  value="GLOBAL">GLOBAL</option>
        </select>-->

        <select style="width:100%" class="tech" name="tech" id="tech" onchange="showValue(this)">
          <option value="calendar" data-image="~@/assets/img/photos/圖層 10@2x.png">GLOBAL</option>
          <option value="calendar" data-image="~@/assets/img/photos/AUSTRALIA 2.png">AUSTRALIA</option>
          <option value="calendar" data-image="~@/assets/img/photos/澳大利亞-8@2x.png">ZEALAND</option>
          <option value="calendar" data-image="~@/assets/img/photos/澳大利亞-7@2x.png">中國大陸</option>
          <option value="calendar" data-image="~@/assets/img/photos/港澳 2.png">港、澳地區</option>
          <option value="calendar" data-image="~@/assets/img/photos/澳大利亞-5@2x.png">印尼</option>
          <option value="calendar" data-image="~@/assets/img/photos/澳大利亞-1@2x.png">菲律賓</option>
          <option value="calendar" data-image="~@/assets/img/photos/澳大利亞-2@2x.png">俄羅斯</option>
          <option value="calendar" data-image="~@/assets/img/photos/UK.png">UK</option>
          <option value="calendar" data-image="~@/assets/img/photos/馬來西亞.png">馬來西亞</option>
          <option value="calendar" data-image="~@/assets/img/photos/澳大利亞@2x.png">美國</option>
        </select>

        <div class="inside-copyright">
          <p>© 2019 家瑞國際有限公司</p>
          <p>台北市中正區新生南路一段50號2樓之4</p>
          <p>客服專線：02-3322-1855</p>
          <p>服務時間：週一~週五(9:00~18:00)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
