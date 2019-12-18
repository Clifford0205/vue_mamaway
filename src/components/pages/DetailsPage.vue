<template>
  <div class="details-page container">
    <div>
      <Breadcrumb />
      <AddInCart />
      <!-- <ProductKv /> -->
      <!-- <ContentArea /> -->
    </div>
  </div>
</template>

<script>
import Breadcrumb from "@/components/Breadcrumb";
import AddInCart from "./ProductDetails/AddInCart";
import ProductKv from "./ProductList/ProductKv";
import ContentArea from "./ProductList/ContentArea";

export default {
  components: {
    ProductKv,
    ContentArea,
    Breadcrumb,
    AddInCart
  }
};
</script>

<style  lang="scss">
body {
  .breadcrumb {
    display: flex;
  }
}
</style>
