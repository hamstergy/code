<template>
  <div>
    <header>
      <div class="container">

        <b-navbar toggleable="lg" type="dark" class='pr-0 pl-0'>
          <b-navbar-brand href="#">
            <img src="/img/logo.svg" alt="All Hospital">
            <img class="logo-small" src="/img/logo-small.svg" alt="All Hospital">
          </b-navbar-brand>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav class='ml-auto links'>
              <b-nav-item href="#" active>Страны</b-nav-item>
              <b-nav-item href="#">Категории</b-nav-item>
              <b-nav-item href="#">Клиники</b-nav-item>
              <b-nav-item href="#">Новости здоровья</b-nav-item>
              <b-nav-item href="#">О нас</b-nav-item>
            </b-navbar-nav>

            <img src="/img/devider.png" class="devider mr-auto ml-auto">

            <b-navbar-nav class='right-nav'>
              <b-nav-item-dropdown left class='lang'>
                <template slot="button-content">
                  <img src="/img/icons/ru.png"><i class="fas fa-chevron-down"></i>
                </template>
                <b-dropdown-item href="#"><img src="/img/icons/usa.png"><span>English</span></b-dropdown-item>
                <b-dropdown-item href="#" active><img src="/img/icons/ru.png" class='ru'><span>Русский</span></b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown left>
                <template slot="button-content">
                  <span>Рубли</span><i class="fas fa-chevron-down"></i>
                </template>
                <b-dropdown-item href="#" active>Рубли</b-dropdown-item>
                <b-dropdown-item href="#">Доллары</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="#" class='user'><i class="fas fa-user-alt"></i>
                <!-- <span>Константин Константинопольский</span> -->
                <span>Амелия Иванова</span>
              </b-nav-item>
              <!-- <b-nav-item href="#" class='user'><span>Войти / Регистрация</span></b-nav-item> -->

            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="sass">
</style>
