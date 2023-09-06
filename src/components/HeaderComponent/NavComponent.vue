<script>
export default {
  name: "NavComponent",
  data() {
    return {
      menuList: [
        {name: 'Команда',path: '#team'},
        {name: 'Расписание', path: '#timetable'},
        {name: 'Стоимость услуг', path: '#price'},
        {name: 'Контакты', path: '#contacts'}
      ],
    }
  }
}
</script>

<template>
  <nav class="nav">
      <ul class="nav__bar">
        <li class="nav__item" v-for="(item, index) in menuList" :key="index">
          <a :href="item.path">{{item.name}}</a>
        </li>
      </ul>
  </nav>
</template>

<style scoped lang="scss">
  .nav {
    //padding: 10px;
    margin-bottom: 5px;
    border-top: 2px solid #002cff;
    border-bottom: 2px solid #002cff;
    border-radius: 25px;
    &__bar {
      padding-top: 20px;
      padding-bottom: 20px;
      display: flex;
      justify-content: space-around;
      list-style-type: none;
      text-align: center;
    }
    &__item {
      width: 25%;
    }
    &__item:not(:last-child) {
      border-right: 2px solid #000000;
    }
  }
  a {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: #000000;
  }
  a:hover {
    text-decoration: underline;
    color: #002cff;
  }
</style>