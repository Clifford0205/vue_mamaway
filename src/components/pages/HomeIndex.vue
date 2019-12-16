<template>
  <div>
    <MainKv />
    <ThemeAct />
    <MainEvent />
    <HotProduct />
  </div>
</template>

<script>
import MainKv from "./HomeIndex/MainKv";
import ThemeAct from "./HomeIndex/ThemeAct";
import MainEvent from "./HomeIndex/MainEvent";
import HotProduct from "./HomeIndex/HotProduct";
export default {
  components: {
    MainKv,
    ThemeAct,
    MainEvent,
    HotProduct
  }
};
</script>
