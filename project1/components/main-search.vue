<template>
  <div class="main-search-wrapper">
    <div class="container">
      <div class="main-search">
        <no-ssr>
        <v-select v-model="selected1"
                  class='input-what'
                  inputId='input-what'
                  :options="options1"
                  maxHeight='235px'
                  :open='true'
                  placeholder='Что лечить?'
                  label="title">
          <span slot="no-options">Ничего не найдено</span>
          <template slot="option" slot-scope="option">
              <i class="fas fa-angle-right"></i>
              {{ option.title }}
          </template>
        </v-select>
        </no-ssr>
        <no-ssr>
        <v-select v-model="selected2"
                  class='input-where'
                  inputId='input-where'
                  :options="options2"
                  :close='false'
                  maxHeight='235px'
                  placeholder='Где лечить?'
                  label="title">
          <span slot="no-options">Ничего не найдено</span>
          <template slot="option" slot-scope="option">
              <i class="fas fa-angle-right"></i>
              {{ option.title }}
          </template>
        </v-select>
        </no-ssr>
        <input type="submit" class="btn-standart" value='Поиск'>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      selected1: null,
      selected2: null,
      // options : ['Онкология', 'Нейрохирургия', 'Кардиология', 'Ортопедия', 'Гинекология', 'Урология', 'Другие']
      options1: [
        {
          title: 'Онкология',
        },
        {
          title: 'Нейрохирургия',
        },
        {
          title: 'Кардиология',
        },
        {
          title: 'Ортопедия',
        },
      ],
      options2: [
        {
          title: 'Великобритания',
        },
        {
          title: 'Папуа Новая Гвинея',
        },
        {
          title: 'Израиль',
        },
        {
          title: 'Великобритания',
        },
      ],
    }
  }
}
</script>

<style lang="sass">
  @import '~assets/sass/main-search'
</style>
