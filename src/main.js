import Vue from 'vue';
import MyTab from './MyTab.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(MyTab),
}).$mount('#app');
