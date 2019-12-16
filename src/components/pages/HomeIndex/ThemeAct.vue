<template>
  <div class="theme-activities">
    <h2 class="theme-activitie-title">主題活動</h2>
    <h4 class="theme-activitie-subtitle">兒童手冊換好禮</h4>

    <div class="forweb  justify-content-center">
      <a href="" class="item">
        <div class="img-area">
          <img src="~@/assets/img/photos/矩形 14 拷貝 2@2x.png" alt="" />
        </div>
        <p>無縫孕哺內衣2件7折</p>
      </a>
      <a href="" class="item">
        <div class="img-area">
          <img src="~@/assets/img/photos/矩形 14 拷貝 2@2x.png" alt="" />
        </div>
        <p>無縫孕哺內衣2件7折</p>
      </a>
      <a href="" class="item">
        <div class="img-area">
          <img src="~@/assets/img/photos/矩形 14 拷貝 2@2x.png" alt="" />
        </div>
        <p>無縫孕哺內衣2件7折</p>
      </a>
    </div>

    <div class="for-mobile">
      <div
        id="carouselExampleIndicators"
        class="carousel slide theme-activities-KV"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner">
          <a href="https://tw.yahoo.com/" class="carousel-item active">
            <img
              class="d-block w-100"
              src="~@/assets/img/photos/矩形 14 拷貝 2@2x.png"
              alt="First slide"
            />
          </a>
          <a href="#" class="carousel-item">
            <img
              class="d-block w-100"
              src="~@/assets/img/photos/矩形 14 拷貝 2@2x.png"
              alt="Second slide"
            />
          </a>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
