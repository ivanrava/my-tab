<template>
  <a :href="link.href">
    <div id="initials">{{ initials }}</div>
    <div id="name">{{ link.name }}</div>
  </a>
</template>

<script>
export default {
  name: 'ChemicalElement',
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
  computed: {
    initials() {
      const initials = this.link.name.match(/[A-Z]/g).join('').toLowerCase();
      return initials[0].toUpperCase() + initials.slice(1);
    },
  },
};
</script>

<style scoped lang="scss">
$border_width: 4px;
$no_hover_color: #9a9a9a;
$hover_color: seagreen;

a {
  color: $no_hover_color;
  margin-bottom: -$border_width/2;
  border: $border_width solid $no_hover_color;
  padding: 2em;
  display: block;
  text-decoration: none;
  transition: color 0.2s, border 0.2s;
}
a:hover {
  color: $hover_color;
  border-color: $hover_color;
  z-index: 100;
}
#initials {
  font-size: 2.1em;
  font-weight: bold;
}
#name {
  font-size: 0.8em;
}
</style>
