import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/sass/main.scss'
Vue.use(Vuetify);

const theme = {
    primary: '#6200EA',
    secondary: '#4DB6AC',
  }
  
  export default new Vuetify({
    theme: {
      themes: {
        dark: theme,
        light: theme,
      },
    },
  })
