<template>
  <div class="row">
    <div class="col-lg-6 product-photo">
      <ul class="album">
        <li>
          <a>
            <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
          </a>
        </li>
        <li>
          <a>
            <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
          </a>
        </li>
        <li>
          <a>
            <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
          </a>
        </li>
        <li>
          <a>
            <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
          </a>
        </li>
        <li>
          <a>
            <img src="~@/assets/img/photos/M106192065-900n@3x-1@2x.png" alt />
          </a>
        </li>
      </ul>
      <div class="big-img">
        <img src="~@/assets/img/photos/M106192065-900n@3x@2x.png" alt />
        <button class="arrow arrow-left">
          <img src="~@/assets/img/icons/icn_arrow_l_b.svg" alt />
        </button>
        <button class="arrow arrow-right">
          <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
        </button>
      </div>
    </div>
    <div class="col-lg-6 text-part">
      <p class="small">產品編號：M106192065</p>
      <div class="product-title d-flex">
        <h2>襯衫式印花孕哺洋裝</h2>
        <div class="btns">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
              <rect class="like" width="28" height="28" />
              <path
                d="M140.9,25.56l-.335-.144c-.1-.048-9.439-5.315-10.973-9.673s-.383-6.177.623-7.614a6.278,6.278,0,0,1,4.839-2.73A6.832,6.832,0,0,1,140.9,8.034,6.832,6.832,0,0,1,146.744,5.4a6.278,6.278,0,0,1,4.839,2.73c1.006,1.389,1.917,3.879.623,7.614s-10.877,9.673-10.973,9.673ZM135.052,6.884a4.84,4.84,0,0,0-3.642,2.107c-.815,1.149-1.533,3.113-.431,6.273s8.241,7.758,9.918,8.667c1.629-.91,8.769-5.411,9.919-8.667s.383-5.124-.431-6.273a4.84,4.84,0,0,0-3.642-2.107,5.234,5.234,0,0,0-5.175,2.969l-.671,1.58-.671-1.58A5.273,5.273,0,0,0,135.052,6.884Z"
                transform="translate(-126.845 -1.4)"
              />
            </svg>
          </button>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <g transform="translate(-280 -457)">
                <path
                  d="M762.186,157a1.178,1.178,0,0,1,.566.209l4.251,4.25a.7.7,0,0,1,0,.991.7.7,0,0,1-.986,0l-3.109-3.1V168.3a.7.7,0,1,1-1.4,0v-8.949l-3.109,3.1a.7.7,0,0,1-.986,0,.7.7,0,0,1,0-.991l4.251-4.25A.957.957,0,0,1,762.186,157Z"
                  transform="translate(-472.207 303)"
                />
                <path
                  d="M6416,11878v-6h1.5v4.5h11v-4.5h1.5v6Z"
                  transform="translate(-6132.999 -11403)"
                />
              </g>
              <rect class="share" width="20" height="20" />
            </svg>
          </button>
        </div>
      </div>

      <div class="price-part d-flex">
        <p class="o-price">NT$1380</p>
        <p class="offer-text">優惠價</p>
        <p class="offer-NT">NT$</p>
        <p class="special-price">990</p>
      </div>

      <div class="price-activity d-flex">
        <p class="red">活動</p>
        <p>秋冬新品 買2送1</p>
        <button>
          <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
        </button>
      </div>

      <div class="price-activity d-flex">
        <p class="red">活動</p>
        <p>秋冬新品 買2送1</p>
        <button>
          <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt />
        </button>
      </div>

      <a href class="more-activity">看更多活動</a>

      <div class="the-line"></div>

      <div class="choose-color">
        <p>顏色/黑色</p>
        <div class="d-flex">
          <div class="color-out">
            <div class="color-in1"></div>
          </div>

          <div class="color-out">
            <div class="color-in2"></div>
          </div>

          <div class="color-out">
            <div class="color-in3"></div>
          </div>
        </div>
      </div>

      <div class="choose-size">
        <div class="d-flex">
          <p>尺寸/M</p>
          <a href>查看尺寸表</a>
        </div>
        <button class="class-btn">XS</button>
        <button class="class-btn">S</button>
        <button class="class-btn">M</button>
        <button class="class-btn">L</button>
        <button class="class-btn">XL</button>
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
