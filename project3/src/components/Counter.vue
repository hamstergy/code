<template>
    <div class="section values">
        <div class="container">
            <div class="one-half column">
            <h3 class="section-heading pattaya">Юрий</h3>
            <img src="../assets/images/love.png">
            <h3 class="section-heading pattaya">Анастасия</h3>
            
        <p class="sectiondesc">21 июля 2018</p>
        <img src="../assets/images/pic-bottom.png">
        <h3 class="section-heading">До нашей свадьбы осталось</h3>
        <Countdown deadline="July 21, 2018"></Countdown>
        </div>
        </div>
    </div>
</template>
<script>
import Countdown from 'vuejs-countdown'

export default {
    name: 'Counter',
    components: { 
        Countdown 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@media (min-width: 550px) {
.vuejs-countdown li:after {
    position: absolute;
    top: 0;
    right: -13px;
    font-size: 32px;
}
.vuejs-countdown .digit {
    font-size: 48px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0;
}
.vuejs-countdown .text {
    text-transform: lowercase;
    margin-bottom: 0;
    font-size: 13px;
}

.vuejs-countdown {padding:0;margin:0}
.vuejs-countdown li {display:inline-block;margin:0 25px;text-align:center;position:relative}
.vuejs-countdown li p {margin:0}
.vuejs-countdown li:first-of-type {margin-left:0}
.vuejs-countdown li:last-of-type {margin-right:0}
.vuejs-countdown li:last-of-type:after {content:""}
}
@media (min-width: 300px) {
.vuejs-countdown li {display:inline-block;margin:0 8px;text-align:center;position:relative}
.vuejs-countdown .digit {
    font-size: 32px;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 0;
}
.vuejs-countdown .text {
    text-transform: lowercase;
    margin-bottom: 0;
    font-size: 13px;
}
}
    .pattaya{
    font-size: 4em;
    line-height: 1.6;
    font-weight: 200;
    font-family: "Pattaya", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #fff;
    text-shadow: 1px 1px 2px black;
    }
    .values p {
        font-size: 2em;
    }
</style>
