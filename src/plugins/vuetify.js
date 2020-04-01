import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueRouter from 'vue-router'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "vuetify/dist/vuetify.min.css";
import 'material-design-icons-iconfont'

Vue.use(Vuetify, {
    theme: {
      primary: '#3f51b5',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    },
    darkTheme: {
      background: '#2e1a6c',
    },
  })
Vue.use(VueRouter);

export default new Vuetify({
    
});

