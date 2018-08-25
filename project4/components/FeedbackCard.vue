<template>

    <div class="feedback-card">
        <div class="fb-card-header">
            <div class="direction">Атырау - Алматы</div>
            <div class="text-muted">5 месяцев назад</div>
        </div>
        <div class="fb-card-body">
            <div class="ava">
                <img v-bind:src="'/src/static/img/man-1.jpg'">
            </div>
            <div class="comment">
                <div class="name">
                    Мария
                    <div>23 года (Москва)</div>
                </div>
                <p>
                    Идеальное соотношение цены и качества! <br>Оплата ушла мгновенно, билеты пришли быстро на почту,<br>Все довольны, все ок.
                </p>
            </div>
        </div>
    </div>

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
