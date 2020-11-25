<template>
  <div id="app">
    <component :links="links" :is="theme"></component>
  </div>
</template>

<script>
import Basic from './themes/Basic.vue';
import links from './links.json';

export default {
  name: 'MyTab',
  data() {
    return {
      links,
      theme: process.env.VUE_APP_THEME,
    };
  },
  components: {
    Basic,
  },
};
</script>
