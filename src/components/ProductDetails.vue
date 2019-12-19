<template>
  <div>
    <Navbar />
    <router-view></router-view>
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

.top-float {
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
