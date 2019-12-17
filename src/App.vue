<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
  // created() {
  //   this.$http
  //     .get("https://randomuser.me/api/")
  //     .then(response => console.log(response.data));
  // }
};
</script>

<style lang="scss">
@import "./assets/all";

.container {
  @include lg {
  }
}
</style>
