<script>
  import HeaderComponent from "@/components/HeaderComponent/HeaderComponent.vue";
  import MainView from "@/views/MainView.vue";
  import FooterComponent from "@/components/FooterComponent/FooterComponent.vue";
  export default {
    components: {
      HeaderComponent,
      MainView,
      FooterComponent
    }
  }
</script>

<template>
  <section class="footer-press-down container">
    <HeaderComponent/>
    <MainView/>
    <FooterComponent/>
  </section>
</template>

<style lang="scss">


</style>
