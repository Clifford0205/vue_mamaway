<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <CustomerInfo />
    <Footer />
    <BottomMenu />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";
import BottomMenu from "./BottomMenu";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BottomMenu
  }
};
</script>

<style lang="scss">
@import "@/assets/all.scss";
</style>
