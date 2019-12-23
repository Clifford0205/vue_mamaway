<template>
  <div class>
    <!-- <Breadcrumb /> -->
    <ProductKv />
    <ContentArea />
  </div>
</template>

<script>
import Breadcrumb from "./ProductList/Breadcrumb";
import ProductKv from "./ProductList/ProductKv";
import ContentArea from "./ProductList/ContentArea";

export default {
  components: {
    ProductKv,
    ContentArea,
    Breadcrumb
  }
};
</script>

<style scoped lang="scss">
</style>
