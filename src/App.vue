<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div>{{ launchesPast }}</div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import gql from 'graphql-tag'
export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  apollo: {
    launchesPast: gql`query {
      launchesPast(limit: 10) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
  }
    }`,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
