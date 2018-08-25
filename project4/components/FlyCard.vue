<template>
    <a href="#" class="fly-card" v-bind:class="{ filled: isFilled }">
        <div class="fly-card-head">
            <a href="#" class="remove-btn"></a>
            <span class="clock"></span><span>10 минут назад</span>
        </div>
        <div class="fly-card-body">
            <div class="fly-card-dots"><i></i><i></i><i></i></div>
            <div class="body-info">
                <div class="direction">
                    <div class="from">Алматы <span>(ALA)</span></div>
                    <div>Дубаи <span>(DBA)</span></div>
                </div>
                <div class="date">20.06.2018</div>
                <div class="date">27.06.2018</div>
                <div class="pass">1 пассажир<br>эконом</div>
                <div class="price">от 150 000 тг</div>
                <div class="btn-standart">Искать еще раз</div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: 'app',
        props: {
            isFilled: Boolean,
        },
        data () {
            return {}
        }
    }
</script>

<style lang="sass">
    @import '~assets/sass/fly-card'
</style>
