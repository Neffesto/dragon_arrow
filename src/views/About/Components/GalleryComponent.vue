<script>
    export default {
    name: "GalleryComponent",
    data() {
      return {
        oneActive: false,
        twoActive: true,
        threeActive: true,
        fourActive: true,
        fiveActive: true,
        sixActive: true,
        sevenActive: true,
        eightActive: true,
        nineActive: true,
        tenActive: true,
        elevenActive: true,
        twelveActive: true,
        thirteenActive: true,
        fourteenActive: true,
        fifteenActive: true,
        sixteenActive: true,
        seventeenActive: true,
        eighteenActive: true,
        nineteenActive: true,
        twentyActive: true,
        twentyOneActive: true,
        twentyTwoActive: true,
        twentyThreeActive: true,
        twentyFourActive: true,

        time: 6000
      }
    },
    methods: {
      sliderStepOne () {
        if (this.oneActive === false) {
          this.oneActive = true
          this.twoActive = false
        }
        setTimeout(this.sliderStepTwo, this.time)
      },
      sliderStepTwo () {
        if (this.twoActive === false) {
          this.twoActive = true
          this.threeActive = false
        }
        setTimeout(this.sliderStepThree, this.time)
      },
      sliderStepThree () {
        if (this.threeActive === false) {
          this.threeActive = true
          this.fourActive = false
        }
        setTimeout(this.sliderStepFour, this.time)
      },
      sliderStepFour () {
        if (this.fourActive === false) {
          this.fourActive = true
          this.fiveActive = false
        }
        setTimeout(this.sliderStepFive, this.time)
      },
      sliderStepFive () {
        if (this.fiveActive === false) {
          this.fiveActive = true
          this.sixActive = false
        }
        setTimeout(this.sliderStepSix, this.time)
      },
      sliderStepSix () {
        if (this.sixActive === false) {
          this.sixActive = true
          this.sevenActive = false
        }
        setTimeout(this.sliderStepSeven, this.time)
      },
      sliderStepSeven () {
        if (this.sevenActive === false) {
          this.sevenActive = true
          this.eightActive = false
        }
        setTimeout(this.sliderStepEight, this.time)
      },
      sliderStepEight () {
        if (this.eightActive === false) {
          this.eightActive = true
          this.nineActive = false
        }
        setTimeout(this.sliderStepNine, this.time)
      },
      sliderStepNine () {
        if (this.nineActive === false) {
          this.nineActive = true
          this.tenActive = false
        }
        setTimeout(this.sliderStepTen, this.time)
      },
      sliderStepTen () {
        if (this.tenActive === false) {
          this.tenActive = true
          this.elevenActive = false
        }
        setTimeout(this.sliderStepEleven, this.time)
      },
      sliderStepEleven () {
        if (this.elevenActive === false) {
          this.elevenActive = true
          this.twelveActive = false
        }
        setTimeout(this.sliderStepTwelve, this.time)
      },
      sliderStepTwelve () {
        if (this.twelveActive === false) {
          this.twelveActive = true
          this.thirteenActive = false
        }
        setTimeout(this.sliderStepThirteen, this.time)
      },
      sliderStepThirteen () {
        if (this.thirteenActive === false) {
          this.thirteenActive = true
          this.fourteenActive = false
        }
        setTimeout(this.sliderStepFourteen, this.time)
      },
      sliderStepFourteen () {
        if (this.fourteenActive === false) {
          this.fourteenActive = true
          this.fifteenActive = false
        }
        setTimeout(this.sliderStepFifteen, this.time)
      },
      sliderStepFifteen () {
        if (this.fifteenActive === false) {
          this.fifteenActive = true
          this.sixteenActive = false
        }
        setTimeout(this.sliderStepSixteen, this.time)
      },
      sliderStepSixteen () {
        if (this.sixteenActive === false) {
          this.sixteenActive = true
          this.seventeenActive = false
        }
        setTimeout(this.sliderStepSeventeen, this.time)
      },
      sliderStepSeventeen () {
        if (this.seventeenActive === false) {
          this.seventeenActive = true
          this.eighteenActive = false
        }
        setTimeout(this.sliderStepEighteen, this.time)
      },
      sliderStepEighteen () {
        if (this.eighteenActive === false) {
          this.eighteenActive = true
          this.nineteenActive = false
        }
        setTimeout(this.sliderStepNineteen, this.time)
      },
      sliderStepNineteen () {
        if (this.nineteenActive === false) {
          this.nineteenActive = true
          this.twentyActive = false
        }
        setTimeout(this.sliderStepTwenty, this.time)
      },
      sliderStepTwenty () {
        if (this.twentyActive === false) {
          this.twentyActive = true
          this.twentyOneActive = false
        }
        setTimeout(this.sliderStepTwentyOne, this.time)
      },
      sliderStepTwentyOne () {
        if (this.twentyOneActive === false) {
          this.twentyOneActive = true
          this.twentyTwoActive = false
        }
        setTimeout(this.sliderStepTwentyTwo, this.time)
      },
      sliderStepTwentyTwo () {
        if (this.twentyTwoActive === false) {
          this.twentyTwoActive = true
          this.twentyThreeActive = false
        }
        setTimeout(this.sliderStepTwentyThree, this.time)
      },
      sliderStepTwentyThree () {
        if (this.twentyThreeActive === false) {
          this.twentyThreeActive = true
          this.twentyFourActive = false
        }
        setTimeout(this.sliderStepTwentyFour, this.time)
      },
      sliderStepTwentyFour () {
        if (this.twentyFourActive === false) {
          this.twentyFourActive = true
          this.oneActive = false
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
  <section class="gallery">
    <div class="gallery__wrapper">
      <img v-bind:class="{imgHideOne: oneActive }" src="../../../gallery/jpeg/1.jpg" alt="image">
      <img v-bind:class="{imgHideTwo: twoActive }" src="../../../gallery/jpeg/2.jpg" alt="image">
      <img v-bind:class="{imgHideThree: threeActive }" src="../../../gallery/jpeg/3.jpg" alt="image">
      <img v-bind:class="{imgHideThree: fourActive }" src="../../../gallery/jpeg/4.jpg" alt="image">
      <img v-bind:class="{imgHideThree: fiveActive }" src="../../../gallery/jpeg/5.jpg" alt="image">
      <img v-bind:class="{imgHideThree: sixActive }" src="../../../gallery/jpeg/6.jpg" alt="image">
      <img v-bind:class="{imgHideThree: sevenActive }" src="../../../gallery/jpeg/7.jpg" alt="image">
      <img v-bind:class="{imgHideThree: eightActive }" src="../../../gallery/jpeg/8.jpg" alt="image">
      <img v-bind:class="{imgHideThree: nineActive }" src="../../../gallery/jpeg/9.jpg" alt="image">
      <img v-bind:class="{imgHideThree: tenActive }" src="../../../gallery/jpeg/10.jpg" alt="image">
      <img v-bind:class="{imgHideThree: elevenActive }" src="../../../gallery/jpeg/11.jpg" alt="image">
      <img v-bind:class="{imgHideThree: twelveActive }" src="../../../gallery/jpeg/12.jpg" alt="image">
      <img v-bind:class="{imgHideThree: thirteenActive }" src="../../../gallery/jpeg/13.jpg" alt="image">
      <img v-bind:class="{imgHideThree: fourteenActive }" src="../../../gallery/jpeg/14.jpg" alt="image">
      <img v-bind:class="{imgHideThree: fifteenActive }" src="../../../gallery/jpeg/15.jpg" alt="image">
      <img v-bind:class="{imgHideThree: sixteenActive }" src="../../../gallery/jpeg/16.jpg" alt="image">
      <img v-bind:class="{imgHideThree: seventeenActive }" src="../../../gallery/jpeg/17.jpg" alt="image">
      <img v-bind:class="{imgHideThree: eighteenActive }" src="../../../gallery/jpeg/18.jpg" alt="image">
      <img v-bind:class="{imgHideThree: nineteenActive }" src="../../../gallery/jpeg/19.jpg" alt="image">
      <img v-bind:class="{imgHideThree: twentyActive }" src="../../../gallery/jpeg/20.jpg" alt="image">
      <img v-bind:class="{imgHideThree: twentyOneActive }" src="../../../gallery/jpeg/21.jpg" alt="image">
      <img v-bind:class="{imgHideThree: twentyTwoActive }" src="../../../gallery/jpeg/22.jpg" alt="image">
      <img v-bind:class="{imgHideThree: twentyThreeActive }" src="../../../gallery/jpeg/23.jpg" alt="image">
      <img v-bind:class="{imgHideThree: twentyFourActive }" src="../../../gallery/jpeg/24.jpg" alt="image">
    </div>
  </section>
  
</template>

<style scoped lang="scss">
.gallery {
  padding: 10px;
  margin-bottom: 5px;
  border-right: 2px solid #002cff;
  border-left: 2px solid #002cff;
  border-radius: 25px;
  &__wrapper {
    //max-width: calc(100vw - 20px);
    display: flex;
    justify-content: center;
    border-radius: 25px;
    //box-sizing: border-box;
    overflow: hidden;
  }
}
img {
  border-radius: 25px;
  height: calc(100vh - 270px);
}
.imgHideOne, .imgHideTwo, .imgHideThree {
  display: none;
}
</style>