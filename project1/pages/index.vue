<template>
  <div id="app">
    <header-item></header-item>
    <top-nav></top-nav>
    <div class="main-top-block">
      <div class="main-top-head">
        <div class="text-big">
          <span class="blue-color">Лучшее</span> лечение в&nbsp;мире <br>по&nbsp;<span class="green-color">оптимальным</span> ценам!
        </div>
        <ul>
          <li>Большой выбор клиник по всему миру</li>
          <li>Организация отдыха во время лечения</li>
          <li>Прямые цены больниц</li>
        </ul>
      </div>
      <slider></slider>
      <main-search></main-search>
    </div>
    <h2 class="block-head">Специализация лечения</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for='card in cards1' :key='card.title'>
          <b-card
                  v-bind:title='card.title'
                  v-bind:img-src="'/img/pic/' + card.n + '.jpg'"
                  v-bind:img-alt="card.title"
                  img-top
                  tag="div"
                  class="green-lined">
            <a href="#" class="card-link long-link">Удаление опухоли молочной железы&nbsp;<span>(65)</span></a>
            <a href="#" class="card-link long-link">Лечение хронической лейкемии&nbsp;<span>(2)</span></a>
            <a href="#" class="card-link long-link">Аорто-коронарное шунтирование&nbsp;<span>(33)</span></a>
          </b-card>
        </div>
        <div class="col-12 text-center  mt-2"><a href="#" class="btn-standart">Другие специализации</a></div>
      </div>
    </div>

    <h2 class="block-head">Страны для отдыха и&nbsp;восстановления здоровья</h2>
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6" v-for='card in cards2' :key="card.title">
          <b-card
                  v-bind:img-src="'/img/pic/' + card.n + '.jpg'"
                  v-bind:img-alt="card.title"
                  img-top
                  tag="div"
                  class="">
            <h4 class="card-title"><i class="fas fa-map-marker-alt blue-color"></i><span>{{ card.title }}</span></h4>
            <a href="#" class="card-link">Берлин</a>
            <a href="#" class="card-link">Ааахен</a>
            <a href="#" class="card-link">Франкфурт</a>
          </b-card>
        </div>
        <div class="col-12 text-center  mt-2"><a href="#" class="btn-standart">Все страны</a></div>
      </div>
    </div>

    <h2 class="block-head">Лучшие клиники</h2>
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-4 col-md-6" v-for='card in cards3' :key='card.title'>
          <b-card no-body
                  href='#'
                  v-bind:img-src="'/img/pic/' + card.n + '.jpg'"
                  v-bind:img-alt="card.title"
                  img-top
                  tag="a"
                  class="">
            <b-card-body>
              <h4 class="card-title">{{ card.title }}</h4>
              <p class="card-text">Кардиология и кардиохирургия, неврология, урология.</p>
              <div class="rate-block">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </b-card-body>
            <b-card-footer><i class="fas fa-map-marker-alt blue-color mr-2"></i><span><b>{{ card.footerTitle }}</b></span></b-card-footer>
          </b-card>
        </div>
      </div>
    </div>

    <div class="dark-bg">
      <div class="container">
        <div class="info-block row align-items-center">
          <div class="col-md-6 col-sm-12 align-middle">
            <h4 class="small-title lined"><i class="fas fa-info-circle blue-color"></i>У Вас есть вопросы?</h4>
            <p>
              Специалисты службы поддержки помогут Вам найти ответ на&nbsp;любой вопрос. Сообщите нам, что Вас интересует и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами в&nbsp;кратчайшие сроки!
            </p>
          </div>
          <div class="col-md-6 col-sm-12 text-md-right mt-sm-0 text-center mt-4 mt-sm-4">
            <a href="#" class="btn-outlined">Проконсультироваться</a>
          </div>
        </div>
      </div>
    </div>

    <h2 class="block-head">Отзывы</h2>
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-3 col-md-6" v-for='n in 4' :key='n'>
          <div class="feedback-card">
            <div class="fb-card-header d-flex align-items-center">
              <img v-bind:src="'/img/pic/u-' + n + '.jpg'">
              <div>
                <div class="name">Амелия Иванова</div>
                <div class="prof">Бизнесвуман</div>
                <div class="blue-line"></div>
              </div>
            </div>
            <div class="fb-card-body">
              <p>
                <b>Ассоцианизм интегрирует филосовский стимул</b>, здесь описывается процесс окраса как взаимодействие влияет на всё вокруг, а именно того
                с чем сталкиваемся.
              </p>
            </div>
            <div class="fb-card-footer">
              <div class="rate-block">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="far fa-star"></i>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

    <div class="dark-bg cases-block">
      <div class="container">
        <h2 class="block-head">Почему нужно пользоваться нашим сервисом</h2>
        <div class="row">
          <div class="col-sm-12 col-md-4 case">
            <div class="case-head">
              <img src="/img/icons/hospital.svg">
              <span>250</span>
            </div>
            <div class="case-body blue-bg">
              Больниц по всему миру
            </div>
          </div>
          <div class="col-sm-12 col-md-4 case">
            <div class="case-head">
              <img src="/img/icons/doctor.svg">
              <span>1000</span>
            </div>
            <div class="case-body green-bg">
              Компетентных докторов
            </div>
          </div>
          <div class="col-sm-12 col-md-4 case">
            <div class="case-head">
              <img src="/img/icons/heart.svg">
                <span>450</span>
              </div>
            <div class="case-body blue-bg">
              Здоровых пользователя
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 class="block-head">Последние новости в медицине</h2>
    <div class="container">
      <div class="row mb-5">
        <div class="col-lg-4 col-md-6" v-for='n in 3' :key='n'>
          <b-card no-body
                  href='#'
                  v-bind:img-src="'/img/pic/n-' + n + '.jpg'"
                  img-top
                  tag="a"
                  class="">
            <b-card-body>
              <h4 class="card-title">
                Факты о лечении за рубежом
                <div class="date"><i class="far fa-calendar"></i><span>5 июня 2018</span></div>
              </h4>
              <p class="card-text"><b>Лечение за границей становится всё более востребованным</b> у граждан государств бывшего Советского Союза. Ассоцианизм интегрирует филосовский стимул, здесь описывается процесс окраса.</p>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>

    <footer-item></footer-item>

  </div>
</template>

<script>
import HeaderItem from '../components/header-item.vue'
import TopNav from '../components/top-nav.vue'
import Slider from '../components/slider.vue'
import MainSearch from '../components/main-search.vue'
import FooterItem from '../components/footer-item.vue'

export default {
  components: {
    HeaderItem,
    TopNav,
    Slider,
    MainSearch,
    FooterItem
  },
  data () {
    return {
      cards1 : [
        {
          'n' : 1,
          'title': 'Онкология'
        },
        {
          'n' : 2,
          'title': 'Нейрохирургия'
        },
        {
          'n' : 3,
          'title': 'Кардиология'
        },
        {
          'n' : 4,
          'title': 'Ортопедия'
        },
        {
          'n' : 5,
          'title': 'Гинекология'
        },
        {
          'n' : 6,
          'title': 'Урология'
        }
      ],
      cards2 : [
        {
          'n' : 7,
          'title': 'Германия'
        },
        {
          'n' : 8,
          'title': 'Франция'
        },
        {
          'n' : 9,
          'title': 'Англия'
        },
        {
          'n' : 10,
          'title': 'Америка'
        },
        {
          'n' : 11,
          'title': 'Италия'
        },
        {
          'n' : 12,
          'title': 'Индия'
        }
      ],
      cards3 : [
        {
          'n' : 13,
          'title': 'Клиника «Шарите»',
          'footerTitle' : 'Берлин, Германия'
        },
        {
          'n' : 14,
          'title': 'Клиника «Ассута»',
          'footerTitle' : 'Тель-Авив, Израиль'
        },
        {
          'n' : 15,
          'title': 'Герцлия Медикал Центр',
          'footerTitle' : 'Герцлия, Израиль'
        }
      ]
    }
  }
}
</script>
<style lang="sass">
  @import '~assets/sass/styles'
</style>