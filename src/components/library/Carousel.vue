<script>
import carousel from "vue-owl-carousel";

let mounted = carousel.mounted;

export default Object.assign(carousel, {
  mounted: function() {
    mounted.bind(this).call();
    if (this.loop) {
      this.showPrev = true;
    }
  }
});
// export default {
//   mounted: function() {
//     mounted.bind(this).call();
//     if (this.loop) {
//       this.showPrev = true;
//     }
//   },
//   ...carousel
// };
</script>