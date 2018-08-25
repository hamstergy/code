<template>
    <div class="main-search-wrapper">
        <div class="main-search-line">
            <div class="inputs">
                <div class="dir-wrapper dir-from has-error" id='dir-from'>
                    <no-ssr>
                        <v-autocomplete
                                :input-attrs="{
                              'class': 'v-autocomplete-input city-from',
                              'placeholder': 'Город вылета'
                            }"
                                :items="items"
                                :auto-select-one-item='false'
                                v-model="item"
                                :get-label="getLabel"
                                :component-item='template'
                                @update-items="updateItems">
                        </v-autocomplete>
                    </no-ssr>
                    <div class="textcode">(DXB)</div>
                    <div class="error-message">Укажите город вылета</div>
                </div>
                <a href="#" class="btn-standart change-direction"><span class="arrows"></span></a>
                <div class='dir-wrapper dir-to' id='dir-to'>
                    <no-ssr>
                        <v-autocomplete
                                :input-attrs="{
                              'class': 'v-autocomplete-input city-to',
                              'placeholder': 'Город прибытия'
                            }"
                                :items="items"
                                :auto-select-one-item='false'
                                v-model="item"
                                :get-label="getLabel"
                                :component-item='template'
                                @update-items="updateItems">
                        </v-autocomplete>
                    </no-ssr>
                    <div class="textcode">(DXB)</div>
                    <div class="error-message">Укажите город прибытия</div>
                </div>
                <div class="date-wrapper date-from">
                    <no-ssr>
                        <calendar
                                :value="value"
                                :disabled-days-of-week="disabled"
                                :format="format"
                                placeholder="Туда"
                                :pane="2"
                                :has-input="true"
                        ></calendar>
                    </no-ssr>
                </div>
                <div class="date-wrapper date-to">
                    <no-ssr>
                        <calendar
                                :value="value"
                                :disabled-days-of-week="disabled"
                                :format="format"
                                placeholder="Обратно"
                                :pane="2"
                                :has-input="true"
                        ></calendar>
                    </no-ssr>
                </div>
                <no-ssr>
                    <v-select v-model="selected"
                              class='input-plan'
                              inputId='input-plan'
                              :options="options"
                              maxHeight='235px'
                              :open='true'
                              placeholder='qwe'
                              label="title">
                        <span slot="no-options">Ничего не найдено</span>
                        <template slot="option" slot-scope="option">
                            <i class="fas fa-angle-right"></i>
                            {{ option.title }}
                        </template>
                    </v-select>
                </no-ssr>
            </div>
            <a href="#" class="btn-standart">найти</a>
        </div>

        <a href="#" class="route-difficulty">Составить сложный маршрут</a>
        <!-- <a href="#" class="route-difficulty simple">Перейти к простому маршруту</a> -->
    </div>
</template>

<script>
    import ItemTemplate from '~/components/AutocompleteItem.vue'

    export default {
        data () {
            return {
                // datepicker
                disabled: [0],
                value: '',
                format: 'dd/MM/yy',
                clear: true,
                placeholder: 'placeholder',


                // autocomplete
                item: {id: 1, city: 'Дубаи', country: 'ОАЭ', textcode: 'DXB'},
                items: [
                    {id: 1, city: 'Дубаи', country: 'ОАЭ', textcode: 'DXB'},
                    {id: 2, city: 'Дублин', country: 'Ирландия', textcode: 'DUB'},
                    {id: 3, city: 'Дубаи', country: 'Дубай', textcode: 'DXB'},
                    {id: 4, city: 'Дубровник', country: 'Хорватия', textcode: 'DBV'},
                ],
                template: ItemTemplate,


                // v-select
                options: [
                    {
                        title: '1 пасс, эконом',
                    },
                    {
                        title: '2 пасс, эконом',
                    },
                    {
                        title: '2 пасс + 1 реб, эконом',
                    },
                    {
                        title: '2 пасс + 2 реб, эконом',
                    },
                ],
                selected: {title: '1 пасс, эконом'},
            }
        },

        methods: {
            getLabel (item) {
                return item.city
            },
            updateItems (text) {
                yourGetItemsMethod(text).then( (response) => {
                    this.items = response
                })
            }
        }
    }
</script>

<style lang="sass">
    @import '~assets/sass/main-search'
</style>
