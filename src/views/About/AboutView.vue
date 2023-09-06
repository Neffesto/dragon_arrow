<script>
import GalleryComponent from "@/views/About/Components/GalleryComponent.vue";
import AboutComponent from "@/views/About/Components/AboutComponent.vue";

export default {
  name: "AboutView",
  components: {
    GalleryComponent,
    AboutComponent,
  }
}
</script>

<template>
  <section class="about container">
    <GalleryComponent/>
    <AboutComponent/>
  </section>
</template>

<style scoped lang="scss">

</style>