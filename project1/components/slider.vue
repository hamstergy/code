<template>
  <div>
    <b-carousel id="carousel1"
                controls
                background="#ababab"
                :interval="4000"
                img-width="1920"
                img-height="550"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
    >

      <b-carousel-slide style='background-image: url("/img/pic.jpg")'>
      </b-carousel-slide>
      <b-carousel-slide style='background-image: url("https://nahealth.com/sites/default/files/styles/big_slider_images/public/var/sites/nah/sites/default/files/media/Specialty%20Care%20Thick%20Header-1920%20x%20640.jpg?itok=MyGKI8cy")'>
      </b-carousel-slide>
      <b-carousel-slide style='background-image: url("https://nahealth.com/sites/default/files/styles/big_slider_images/public/media/Patients%201920%20x%20640.jpg?itok=kvgE-jFq")'>
      </b-carousel-slide>

    </b-carousel>

    <!-- <p class="mt-4">
      Slide #: {{ slide }}<br>
      Sliding: {{ sliding }}
    </p> -->

  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>


<style lang="sass">
  @import '~assets/sass/slider'
</style>
