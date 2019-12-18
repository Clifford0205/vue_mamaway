<template>
  <div>
    <Navbar />
    <!-- <router-view></router-view> -->
    <p>123345</p>
    <CustomerInfo />
    <Footer />
    <BottomMenu class="btn-menu" />
    <BigMenu />
    <FilterPage />
    <GoTop />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";
import BottomMenu from "./BottomMenu";
import BigMenu from "./BigMenu";
import FilterPage from "./FilterPage";
import GoTop from "./GoTop";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BottomMenu,
    BigMenu,
    GoTop,
    FilterPage
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/all.scss";

.btn-menu {
  @include lg {
    display: none;
  }
}
</style>
