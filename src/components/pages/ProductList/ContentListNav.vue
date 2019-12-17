<template>
  <div class="content-list-nav">
    <div class="top-nav">
      <nav aria-label="breadcrumb">
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
      </nav>

      <div class="d-flex ar-nav">
        <v-select :options="options" label="title">
          <template slot="option" slot-scope="option">
            <img :src="option.cardImage" />
            {{ option.title }}
          </template>
        </v-select>

        <a href class="arrange active">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <rect class="four" width="14" height="14" />
            <rect class="four" width="14" height="14" transform="translate(18)" />
            <rect class="four" width="14" height="14" transform="translate(0 18)" />
            <rect class="four" width="14" height="14" transform="translate(18 18)" />
          </svg>
        </a>
        <a href class="arrange">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
            <rect class="three" width="9" height="32" />
            <rect class="three" width="9" height="32" transform="translate(11.5)" />
            <rect class="three" width="9" height="32" transform="translate(23)" />
          </svg>
        </a>
      </div>
    </div>

    <div class="mobile-nav">
      <div class="d-flex btns">
        <button>
          <img src="~@/assets/img/icons/icn_arrow_d_g2.svg" alt />
          <span>分類</span>
        </button>
        <button>
          <img src="~@/assets/img/icons/组件 33 – 3.svg" alt />
          <span>篩選</span>
        </button>
        <button>
          <img src="~@/assets/img/icons/组件 34 – 3.svg" alt />
          <span>排序</span>
        </button>
      </div>
      <div class="d-flex the-array">
        <a href class="arrange">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <rect class="two" width="9" height="20" rx="1" />
            <rect class="two" width="9" height="20" rx="1" transform="translate(11)" />
          </svg>
        </a>
        <a href class="arrange">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <rect class="one" width="20" height="20" rx="1" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
import vSelect from "vue-select";
import "vue-select/src/scss/vue-select.scss";
export default {
  data() {
    return {
      options: [
        {
          title: "Visa",
          cardImage: "~@/assets/img/icons/组件 33 – 3.svg"
        },
        {
          title: "country1",
          cardImage: "https://via.placeholder.com/20"
        }
      ]
    };
  },
  components: {
    carousel,
    vSelect
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
