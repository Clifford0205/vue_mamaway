<template>
  <div>
    <Navbar class="top-nav" />
    <router-view></router-view>
    <CustomerInfo />
    <Footer />
    <BottomMenuCart />
    <AddInCartMobile />
    <BigMenu />
    <FilterPage />
    <GoTop />
  </div>
</template>

<script>
import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomerInfo from "./CustomerInfo";
import BottomMenuCart from "./BottomMenuCart";
import AddInCartMobile from "./AddInCartMobile";
import BigMenu from "./BigMenu";
import FilterPage from "./FilterPage";
import GoTop from "./GoTop";

export default {
  components: {
    Navbar,
    Footer,
    CustomerInfo,
    BigMenu,
    GoTop,
    FilterPage,
    BottomMenuCart,
    AddInCartMobile
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/all.scss";
.top-nav {
  @include lg {
    display: none;
  }
}

.btn-menu {
  @include lg {
    display: none;
  }
}
</style>
