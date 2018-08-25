<template>
    <div class="card">
        <div class="card-header">
            <h4>
                <img src="/src/static/img/logo-small.png">
                <a href="#">Geocult.kz</a>
            </h4>
        </div>
        <img class="card-img rounded-0" v-bind:src="'/src/static/img/bg/bg-' + n + '.jpg'" v-bind:alt="title">
        <div class="card-body">
            <div class="card-title">{{ title }}</div>
            <p>
                Сердце города – Старый порт, на лодочном причале которого продается свежая рыба. Из базилики Нотр-Дам-де-ла-Гард в романо-византийском стиле открывается великолепный вид на Марсель. Наиболее известные современные сооружения – комплекс "Лучезарный город"  построенный по проекту ... Ле Корбюзье, и небоскреб CMA CGM Tower архитектора Захи Хадид.
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        props: {
            n: Number,
            title: String,
        },
        data () {
            return {}
        },
    }
</script>

<style lang="sass">
</style>
