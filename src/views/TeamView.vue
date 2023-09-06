<script>

</script>

<template>
  <section class="team container">
    <div class="team__wrapper">
      <div class="team__item">
        <img class="team__img" src="../assets/img/coach/IMG-20230811-WA0022.jpg" alt="img">
        <div class="team__description">
          <h3>Андрей Зорик</h3>
          <p>Мастер спорта международного класса, тренер-сенсей.</p>
          <p>В лучной тусовке его имя вызывает уважение и трепет. Андрей Зорик – один из ведущих спортсменов России по стрельбе из блочного лука. За его плечами несколько десятков побед: шестикратный чемпион России, чемпион Москвы и Московской области. Он продолжает выступать на соревнованиях, учит стрелять и к каждому находит индивидуальный подход – им выращены кандидаты и мастера спорта, занимающие верхние строчки рейтингов соревнований.
          </p>
        </div>
      </div>
      <div class="team__item">
        <img class="team__img" src="../assets/img/coach/IMG-20230811-WA0020.jpg" alt="img">
        <div class="team__description">
          <h3>Олег Фетисов</h3>
          <p>Мастер спорта по двум дисциплинам – легкая атлетика и стрельба из лука, тренер, специалист по общей и специальной физподготовке.</p>
          <p>У Олега Фетисова многолетняя спортивная карьера: пятикратный чемпион Москвы и чемпион России по лёгкой атлетике. Чемпион России и двукратный чемпион Мособласти по стрельбе из лука. Свой опыт он применил в научно-педагогической работе и тренировке спортсменов. Олег разрабатывает индивидуальные программы по физической подготовке и реабилитации, подготавливает лучников к выполнению спортивных разрядов и выступлению на турнирах.</p>
        </div>
      </div>
      <div class="team__item">
        <img class="team__img" src="../assets/img/coach/IMG-20230811-WA0023.jpg" alt="img">
        <div class="team__description">
          <h3>Дарья Можаева</h3>
          <p>Кандидат в мастера спорта, инструктор.</p>
          <p>В 3Д стрельбе из лука Дарья сильный спортсмен – имеет титул чемпиона Москвы и Московской области, бронзу в личном зачете и золото в команде на Чемпионате России. За её плечами победа и новый рекорд в Кубке Лукомании 2016, первые и призовые места в таргет-соревнованиях для традиционных луков – Мартовский кот, Московская ворона, БОЛТ и др.</p>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
.team {
  &__wrapper {
    padding: 10px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid #002cff;
    border-left: 2px solid #002cff;
    border-radius: 25px;
  }
  &__item {
    display: flex;
  }
  &__img {
    height: 300px;
    padding: 20px;
    border-radius: 50%;
  }
  &__description {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__description :last-child {
    margin-top: 20px;
  }
  &__description :nth-child(2) {
    font-weight: 600;
  }
}
h3 {
  font-size: 35px;
  font-weight: 600;
  color: #002cff;
}
p {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
}
</style>