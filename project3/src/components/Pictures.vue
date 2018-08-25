<template>
    <div class="section resto">
        <div class="container">
            <h3>Наши фотографии</h3>
            <!-- <img class="del" src="../assets/images/pic-bottom.png"> -->
            <div class="row">
                    <carousel :perPageCustom="[[480, 2], [768, 3]]" :navigationEnabled="true">
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/3.jpg"></div>
                        <p>Новосибирск, 2016</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/10.jpg"></div>
                        <p>Алматы, 2017</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/9.jpg"></div>
                        <p>Алматы, 2018</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/4.jpg"></div>
                        <p>Алматы, 2016</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/5.jpg"></div>
                        <p>Караганда, 2017</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/6.jpg"></div>
                        <p>Новосибирск, 2017</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/7.jpg"></div>
                        <p>Алматы, 2018</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/8.jpg"></div>
                        <p>Новосибирск, 2017</p>
                    </slide>
                    <slide>
                        <div class="gal"><img v-img:group src="../assets/images/gallery/2.jpg"></div>
                        <p>Алматы, 2018</p>
                    </slide>

                    </carousel>
            </div>
        </div>
    </div>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
    name: 'Pictures',
    components: {
        Carousel,
        Slide
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 h3 {
     font-weight: bold;
     padding-bottom: 30px;
 }
 .resto p {
    font-size:110%;
  }
  .del{
      padding-bottom:10px
  }
  .resto {
    padding: 6rem 0 5rem;
  }
  .gal {
      height: 80px;
      padding: 20px;
  }
    img {
        height:100%;
        width: auto;
  }
  
  @media only screen and (min-width: 480px) {
    .gal {
      height: 140px;
      padding: 20px;
  }
  }
  @media only screen and (min-width: 780px) {
    .gal {
      height: 200px;
      padding: 20px;
  }
  }

</style>
