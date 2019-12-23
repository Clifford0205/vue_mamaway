<template>
  <div class="product-intro-page">
    <Breadcrumb class="breadcrumb" />
    <MainKv />
    <ExpandBar />
    <Slider />
    <VideoPart />
    <LookAll />
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import AddInCart from "./ProductDetails/AddInCart";
import MainKv from "./ProductIntro/MainKv";
import ExpandBar from "./ProductIntro/ExpandBar";
import Slider from "./ProductIntro/Slider";
import VideoPart from "./ProductIntro/VideoPart";
import LookAll from "./ProductIntro/LookAll";

export default {
  components: {
    Breadcrumb,
    MainKv,
    ExpandBar,
    Slider,
    VideoPart,
    LookAll
  }
};
</script>

<style  lang="scss">
@import "@/assets/helpers/_myset.scss";
body {
  .breadcrumb {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0;

    @include lg {
      // display: none;
    }
  }
}
</style>




