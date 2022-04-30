import Vue from 'vue';
import App from './App.vue';
import Cube from 'cube-ui';
import 'cube-ui/style.css';

Vue.use(Cube);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
