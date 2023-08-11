<script>
  import NavComponent from "@/components/HeaderComponent/NavComponent.vue";

  export default {
    components: {
      NavComponent,
    }
  }
</script>

<template>
  <section class="header">
    <div class="header__logo">
      <img alt="Dragon Arrow" src="../../assets/logo.png">
      <h1>Клуб стрельбы из лука</h1>
    </div>
    <p class="header__quote">Стрельба из лука - отличное средство для тех, кто ищет гармонии тела и духа!</p>
    <NavComponent/>
  </section>
</template>

<style scoped lang="scss">
  .header {
    //background-color: gray;
    &__logo {
      padding: 10px 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        height: 100px;
      }
      h1 {
        flex-grow: 1;
        color: #002cff;
        text-transform: uppercase;
        text-align: center;
        font-size: 40px;
        font-weight: 500;
      }
    }
    &__quote {
      margin-right: 10px;
      text-align: end;
      color: #002cff;
      font-style: italic;
      font-size: 20px;
      font-weight: 500;
    }
  }
</style>