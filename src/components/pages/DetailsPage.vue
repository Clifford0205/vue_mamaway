<template>
  <div class="details-page container">
    <div>
      <Breadcrumb />
      <AddInCart />
      <ProductContent />
      <SeeSharing />
      <Recommend />
      <!-- <ProductKv /> -->
      <!-- <ContentArea /> -->
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import AddInCart from "./ProductDetails/AddInCart";
import ProductContent from "./ProductDetails/ProductContent";
import SeeSharing from "./ProductDetails/SeeSharing";
import Recommend from "./ProductDetails/Recommend";
import ProductKv from "./ProductList/ProductKv";
import ContentArea from "./ProductList/ContentArea";

export default {
  components: {
    ProductKv,
    ContentArea,
    Breadcrumb,
    AddInCart,
    ProductContent,
    SeeSharing,
    Recommend
  }
};
</script>

<style  lang="scss">
body {
  .breadcrumb {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
</style>




