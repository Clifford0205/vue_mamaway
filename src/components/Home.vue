<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <CustomerInfo />
    <Footer />
    <BottomMenu />
    <BigMenu />
    <GoTop />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";
import BottomMenu from "./BottomMenu";
import BigMenu from "./BigMenu";
import GoTop from "./GoTop";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BottomMenu,
    BigMenu,
    GoTop
  }
};
</script>

<style lang="scss">
// @import "@/assets/all.scss";
</style>
