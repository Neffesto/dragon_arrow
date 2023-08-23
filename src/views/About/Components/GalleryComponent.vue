<script>
    export default {
    name: "GalleryComponent",
    data() {
      return {
        oneActive: false,
        twoActive: true,
        threeActive: true,
        time: 5000
      }
    },
    methods: {
      sliderStepOne () {
        if (this.oneActive === false) {
          this.oneActive = true
          this.twoActive = false
          this.threeActive = true
        }
        setTimeout(this.sliderStepTwo, this.time)
      },
        sliderStepTwo () {
          if (this.twoActive === false) {
            this.oneActive = true
            this.twoActive = true
            this.threeActive = false
          }
          setTimeout(this.sliderStepThree, this.time)
        },
        sliderStepThree () {
          if (this.threeActive === false) {
            this.oneActive = false
            this.twoActive = true
            this.threeActive = true
          }
          setTimeout(this.sliderStepOne, this.time)
      },
    },
    mounted() {
      setTimeout(this.sliderStepOne, this.time)
    }
  }
</script>

<template>
  <section class="gallery container">
    <div class="gallery__wrapper">
      <img v-bind:class="{imgHideOne: oneActive }" src="../../../gallery/jpeg/1.jpg" alt="image">
      <img v-bind:class="{imgHideTwo: twoActive }" src="../../../gallery/jpeg/2.jpg" alt="image">
      <img v-bind:class="{imgHideThree: threeActive }" src="../../../gallery/jpeg/3.jpg" alt="image">
    </div>
  </section>
  
</template>

<style scoped lang="scss">
.gallery {
  padding: 10px;
  &__wrapper {
    max-width: calc(100vw - 20px);
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
  }
}
img {
  border-radius: 5px;
  height: calc(100vh - 216px);
}
.imgHideOne, .imgHideTwo, .imgHideThree {
  display: none;
}
</style>