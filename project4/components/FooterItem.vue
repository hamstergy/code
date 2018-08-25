<template>

    <footer>
        <div class="container">
            <ul class="top-line">
                <li><a href="#">Вопросы и ответы</a></li>
                <li><a href="#">Помощь</a></li>
                <li><a href="#">Блог путешесвенника</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#">Календарь низких цен</a></li>
                <li class="social">
                    <a href="#" target='_blank'><img src="/src/static/img/icons/fb.png"></a>
                    <a href="#" target='_blank'><img src="/src/static/img/icons/mailru.png"></a>
                    <a href="#" target='_blank'><img src="/src/static/img/icons/ok.png"></a>
                    <a href="#" target='_blank'><img src="/src/static/img/icons/vk.png"></a>
                    <a href="#" target='_blank'><img src="/src/static/img/icons/g.png"></a>
                </li>
                <li class="logo">
                    <a href="/">
                        <img src="/src/static/img/logo.png">
                    </a>
                </li>
            </ul>
            <div class="row">
                <div class="col-md-6 col-sm-12 order-2 order-md-2 mt-4 mt-md-0">

                    <div>
                        <p>
                            Copyright © 2018 <br>
                            Официальный сайт
                        </p>
                        <p>
                            <a href="#" class="policy-link">Политика конфиденциальности и&nbsp;Условия&nbsp;использования</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 text-left text-md-right align-self-end order-1 order-md-2">
                    <img src="/src/static/img/iata.png" class="mb-2">
                </div>
            </div>
        </div>
    </footer>

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
    @import '~assets/sass/footer'
</style>
