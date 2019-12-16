<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <CustomerInfo />
    <Footer />
    <BottomMenu />
    <BigMenu />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";
import BottomMenu from "./BottomMenu";
import BigMenu from "./BigMenu";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BottomMenu,
    BigMenu
  }
};
</script>

<style lang="scss">
@import "@/assets/all.scss";
</style>
