<template>

    <header>
        <b-navbar toggleable='lg' type="dark" class='pr-0 pl-0'>
            <img src="/src/static/img/icons/menu-icon.png" alt="Menu" class="menu-icon">
            <b-navbar-brand href="#">
                <img src="/src/static/img/logo.png">
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav class='links ml-auto mr-auto'>
                    <b-nav-item href="#" active>Авиабилеты</b-nav-item>
                    <b-nav-item href="#">Куда поехать</b-nav-item>
                    <b-nav-item href="#">Календарь низких цен</b-nav-item>
                </b-navbar-nav>
            </b-collapse>

            <b-navbar-nav class='right-nav'>
                <li class="nav-item">
                    <a href="#" class='settings'>
                        <span class="settings-icon"></span>
                    </a>
                </li>

                <li class="nav-item">
                    <a href="#" class='btn-standart'>
              <span class="ava">
                <!-- <img src="/src/static/img/bg/bg-1.jpg" alt=""> -->
              </span>
                        <span class="login-text">
                <span class="top-text">Личный кабинет</span>
                <span class="bottom-text">Войти и сэкономить</span>
              </span>
                    </a>
                </li>
            </b-navbar-nav>
        </b-navbar>
    </header>

</template>

<script>
    export default {
        name: 'app',
        data () {
            return {}
        }
    }
</script>

<style lang="sass">
</style>
