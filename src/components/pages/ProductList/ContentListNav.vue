<template>
  <div class="content-list-nav">
    <div class="d-flex top-nav">
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

        <a href="" class="arrange active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <rect class="four" width="14" height="14" />
            <rect
              class="four"
              width="14"
              height="14"
              transform="translate(18)"
            />
            <rect
              class="four"
              width="14"
              height="14"
              transform="translate(0 18)"
            />
            <rect
              class="four"
              width="14"
              height="14"
              transform="translate(18 18)"
            />
          </svg>
        </a>
        <a href="" class="arrange"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <rect class="three" width="9" height="32" />
            <rect
              class="three"
              width="9"
              height="32"
              transform="translate(11.5)"
            />
            <rect
              class="three"
              width="9"
              height="32"
              transform="translate(23)"
            /></svg
        ></a>
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
