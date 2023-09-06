<script>
export default {
  name: "AboutComponent",
  data () {
    return {
      reasons: [
        {position:'one', description: 'Стрельба из лука – это необычное и полезное для здоровья хобби;'},
        {position:'one', description: 'Вы уже опытный спортсмен и хотите улучшить свой результат;'},
        {position:'one', description: 'На день рождения вам подарили лук, и вы хотите понять, что с этим делать;'},
        {position:'one', description: 'Планируете после завершения спортивной карьеры стать тренером;'},
        {position:'one', description: 'Есть желание четко попадать в десятку... чтобы удивлять всех вокруг;'},
        {position:'one', description: 'Хотите участвовать в соревнованиях, выполнить спортивный разряд или звание мастера спорта;'},
        {position:'one', description: 'Вы купили лук для дачных пострелушек, и нужна консультация специалиста;'},
        {position:'one', description: 'Срочно нужно повысить уровень физической подготовки, чтобы стрелять точней и стабильней;'},
        {position:'one', description: 'Мечтаете стать профессионалом и быть в мировых топах (серьезная, но реальная цель!);'},
        {position:'one', description: 'Стало грустно, захотелось поболтать с близкими по духу людьми? Можно прийти в клуб и душевно посидеть за чашечкой чая.'},
      ]
    }
  }
}
</script>

<template>
  <section class="we">
    <div class="we__text">
      <p> Мечтали о стрельбе из лука с детства? Или вдохновляют лучники из мира фэнтези? А может, хотите освоить новый вид спорта? Тогда клуб Dragon Arrow – это то, что вам нужно!</p>
      <br/>
      <p> Наши тренеры научат стрелять из любого вида лука – традиционного, классического или блочного. Они имеют колоссальный опыт: личные победы и призовые места в турнирах, уникальные методики обучения, по которым ученики выполняют спортивные разряды и побеждают в турнирах. </p>
      <br/>
      <p>Dragon Arrow – это не только тир, но и место, где можно познакомиться с совершенно разными по духу и интересам людьми, объединенными общий увлечением.</p>
      <br/>
    </div>
    <ul class="we__description">
      <li class="we__item" v-for="(item, index) in reasons" :key="index">
        <p> {{item.description}} </p>
        <br/>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.we {
  display: flex;
  padding: 10px;
  margin-bottom: 5px;
  border-top: 2px solid #002cff;
  border-bottom: 2px solid #002cff;
  border-radius: 25px;
  &__text {
    padding: 20px;
    flex-basis: 50%;
  }
  &__description {
    padding: 20px;
    list-style-type: decimal;
    flex-basis: 50%;
    font-size: 20px;
  }
}
p {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
}
</style>