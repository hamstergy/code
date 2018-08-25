<template>
  <div id="app">
    <Counter/>
    <Invite/>
    <Story/>
    <Color/>
    <Gifts/>
    <Pictures/>
    <Welcome/>
  </div>
</template>

<script>
import Welcome from './components/Welcome'
import Counter from './components/Counter'
import Invite from './components/Invite'
import Color from './components/Color'
import Gifts from './components/Gifts'
import Pictures from './components/Pictures'
import Story from './components/Story'

export default {
  name: 'App',
  components: {
    Welcome,
    Counter,
    Invite,
    Story,
    Pictures,
    Color,
    Gifts
  }
}
</script>

<style>

</style>
