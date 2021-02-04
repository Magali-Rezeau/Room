<template>
  <div id="app">
    <the-navigation></the-navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation';

export default {
  name: 'App',
  components: {
    TheNavigation,
   },
  // scrollBehavior: {

  // }
}
</script>

<style>

</style>
