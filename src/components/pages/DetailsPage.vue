<template>
  <div class="details-page">
    <div>
      <Breadcrumb class="breadcrumb" />
      <AddInCart />
      <ProductContent />
      <SeeSharing />
      <Recommend />
      <RelatedProducts />
      <BrowsingHistory />
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import AddInCart from "./ProductDetails/AddInCart";
import ProductContent from "./ProductDetails/ProductContent";
import SeeSharing from "./ProductDetails/SeeSharing";
import Recommend from "./ProductDetails/Recommend";
import RelatedProducts from "./ProductDetails/RelatedProducts";
import BrowsingHistory from "./ProductDetails/BrowsingHistory";

export default {
  components: {
    Breadcrumb,
    AddInCart,
    ProductContent,
    SeeSharing,
    Recommend,
    RelatedProducts,
    BrowsingHistory
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

    @include lg {
      display: none;
    }
  }
}
</style>




