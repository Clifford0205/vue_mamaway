<template>
  <div>
    <img src="http://lorempixel.com/g/400/200/" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card 3</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  created() {
    console.log(this.$route.params.id);
    const id = this.$route.params.id;
    this.$http
      .get(`https://randomuser.me/api/?seed=${id}`)
      .then(response => console.log(response.data));
  }
};
</script>
