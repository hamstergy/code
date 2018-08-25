<template>
  <div class="top-nav">
    <div class="container">

      <b-navbar-nav>

        <slot v-for='(topNavHeader,key) in topNavHeaders'>
          <b-nav-item-dropdown class='multi-col-3 positioned-list'>
            <template slot="button-content">
              <span>{{ topNavHeader }}</span><i class="fas fa-chevron-down"></i>
            </template>
            <div class="row no-gutters">
              <div class="col">
                <b-dropdown-header>Направления</b-dropdown-header>
                <b-dropdown-item href="#">Рак простаты <span>(56)</span></b-dropdown-item>
                <b-dropdown-item href="#">Рак яичка <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Рак уретры <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Аденокарцинома <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Ангиосаркома <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Базалиома <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Ангиосаркома <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Лимфома <span>(65)</span></b-dropdown-item>

              </div>
              <div class="col">
                <b-dropdown-header>Методы лечения</b-dropdown-header>
                <b-dropdown-item href="#">Биопсия простаты <span>(56)</span></b-dropdown-item>
                <b-dropdown-item href="#">Гастроскопия + биопсия <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Кибернож (CyberKnife) <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Truebeam <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">RapidArc <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Лучевая терапия <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Биопсия яичка <span>(65)</span></b-dropdown-item>
                <b-dropdown-item href="#">Лимфома <span>(65)</span></b-dropdown-item>
              </div>
              <div class="col">
                <b-dropdown-header>Заголовок</b-dropdown-header>
                <b-dropdown-item href="#">Рак простаты <span>(56)</span></b-dropdown-item>
                <b-dropdown-item href="#">Second Item</b-dropdown-item>
              </div>
            </div>
          </b-nav-item-dropdown>
          <li class="devider" :key='key'></li>

        </slot>

      </b-navbar-nav>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topNavHeaders : ['Онкология', 'Нейрохирургия', 'Кардиология', 'Ортопедия', 'Гинекология', 'Урология', 'Другие']
    }
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/top-nav'
</style>
