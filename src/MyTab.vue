<template>
  <div id="app">
    <component id="skin" :hives="hives" :is="skin"></component>
  </div>
</template>

<script>
import Basic from './themes/Basic.vue';
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
</style>
