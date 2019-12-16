<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <CustomerInfo />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";

export default {
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
