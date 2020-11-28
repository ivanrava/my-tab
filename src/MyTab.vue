<template>
  <div id="app">
    <component id="skin" :hives="hives" :is="skin"></component>
  </div>
</template>

<script>
import Basic from '@/themes/Basic.vue';
import Mendeleev from '@/themes/Mendeleev.vue';
import hives from './hives.json';

export default {
  name: 'MyTab',
  data() {
    return {
      hives,
      skin: process.env.VUE_APP_SKIN,
    };
  },
  components: {
    Basic,
    Mendeleev,
  },
};
</script>

<style>
#app {
  height: 100%;
}
#skin {
  height: 100%;
}
@font-face {
  font-family: 'Kramola';
  src: local('Kramola'), url('./fonts/Kramola.ttf') format('truetype');
}
@font-face {
  font-family: 'Segoe UI';
  src: local('Segoe UI'), url('fonts/SegoeUI.ttf') format('truetype');
}
@font-face {
  font-family: 'Segoe UI Bold';
  src: local('Segoe UI Bold'), url('fonts/SegoeUIBold.ttf') format('truetype');
}
</style>
