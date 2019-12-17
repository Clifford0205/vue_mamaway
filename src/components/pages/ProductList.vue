<template>
  <div class>
    <ProductKv />
    <ContentArea />
  </div>
</template>

<script>
import ProductKv from "./ProductList/ProductKv";
import ContentArea from "./ProductList/ContentArea";

export default {
  components: {
    ProductKv,
    ContentArea
  }
};
</script>
