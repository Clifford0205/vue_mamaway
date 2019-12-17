<template>
  <div class="pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link go-prev" href="#" aria-label="Previous">
            <span aria-hidden="true"
              ><img src="~@/assets/img/icons/icn_arrow_l_b.svg" alt=""
            /></span>
          </a>
        </li>
        <li class="page-item "><a class="page-link active" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>

        <li class="page-item">
          <a class="page-link go-next" href="#" aria-label="Next">
            <span aria-hidden="true" class="d-flex align-items-center"
              ><span class="go-next-text">Next</span>
              <img src="~@/assets/img/icons/icn_arrow_r_b.svg" alt=""
            /></span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import $ from "jquery";
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {};
  },
  components: {
    carousel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
