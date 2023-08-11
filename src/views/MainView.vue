<script>
import AboutView from "@/views/AboutView.vue";
import TeamView from "@/views/TeamView.vue";
import TimetableView from "@/views/TimetableView.vue";
import PriceView from "@/views/PriceView.vue";
import ContactsView from "@/views/ContactsView.vue";

export default {
  components: {
    AboutView,
    TeamView,
    TimetableView,
    PriceView,
    ContactsView
  }
}
</script>

<template>
  <section>
    <AboutView/>
    <TeamView/>
    <TimetableView/>
    <PriceView/>
    <ContactsView/>
  </section>
</template>

<style scoped lang="scss">

</style>