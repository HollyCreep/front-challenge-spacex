<template>
  <v-app style="background-image: url('./assets/espaco.jpg')">
    <v-main>
      <Dashboard/>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './views/Dashboard';

export default {
  name: 'App',

  components: {
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>
