<template>
  <div id="app">
    <Basic :links="links"/>
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
    };
  },
  components: {
    Basic,
  },
};
</script>
