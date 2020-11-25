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
      let uppers = '';
      for (let i = 0; i < this.link.name.length; i += 1) {
        if (this.link.name[i] === this.link.name[i].toUpperCase()) {
          uppers += this.link.name[i].toLowerCase();
        }
      }
      uppers = uppers[0].toUpperCase() + uppers.slice(1);
      return uppers;
    },
  },
};
</script>

<style scoped lang="scss">
$border_width: 4px;
$no_hover_color: black;
$hover_color: seagreen;

a {
  color: $no_hover_color;
  margin-bottom: -$border_width/2;
  border-collapse: collapse;
  border: $border_width solid $no_hover_color;
  padding: 2em;
  display: block;
  text-decoration: none;
  transition: color 0.2s, border 0.2s;
}
a:hover {
  color: $hover_color;
  border-color: $hover_color;
}
#initials {
  font-size: 2.1em;
  font-weight: bold;
}
#name {
  font-size: 0.8em;
}
</style>
