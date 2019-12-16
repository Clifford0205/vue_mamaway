<template>
  <div>
    <Navbar />
    <CustomerInfo />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    CustomerInfo
  }
};
</script>

<style lang="scss">
@import "@/assets/all.scss";
</style>
