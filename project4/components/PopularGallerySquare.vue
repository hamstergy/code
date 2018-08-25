<template>
    <a class="square" v-bind:href="{ href }" v-bind:class="{ big: isBig }">
        <div class="gallery-item" v-bind:style="'background-image: url(' + imgSrc + ')'">
            <div class="card-direction">
                <div class="light">{{ directionCity }}</div>
                <div class="dark">{{ directionCountry }}</div>
            </div>
            <div class="label">
                <div class="plane"></div>
                <div class="title">{{ title }}</div>
                <div class="date">{{ date }}</div>
            </div>
        </div>
    </a>
</template>

<script>
    export default {
        name: 'app',
        props: {
            isBig: Boolean,
            href: String,
            imgSrc: String,
            directionCity: String,
            directionCountry: String,
            title: String,
            date: String
        },
        data () {
            return {}
        },
    }
</script>

<style lang="sass">
</style>
