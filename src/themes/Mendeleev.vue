<!-- Periodic table of the elements (by Mendeleev or Walter White, it's up to you) -->
<template>
  <main>
    <h1>Mendeleev</h1>
    <section>
      <div class="empty"></div>
      <div class="column" v-for="hive in sortedHives" :key="hive.name">
        <h4>{{ hive.name }}</h4>
        <ChemicalElement v-for="link in hive.links" :link="link" :key="link.href"></ChemicalElement>
      </div>
      <div class="empty"></div>
    </section>
  </main>
</template>

<script>
import ChemicalElement from '@/themes/components/ChemicalElement.vue';

export default {
  name: 'Mendeleev',
  components: { ChemicalElement },
  props: {
    hives: {
      type: Array,
      required: true,
    },
  },
  computed: {
    sortedHives() {
      const sorted = this.hives.slice()
        .sort((hive1, hive2) => hive2.links.length - hive1.links.length);
      const tableSorted = [];
      for (let i = 0; i < sorted.length; i += 1) {
        if (i % 2 === 0) {
          tableSorted.splice(tableSorted.length / 2, 0, sorted[i]);
        } else {
          tableSorted.splice(Math.ceil(tableSorted.length / 2), 0, sorted[i]);
        }
      }
      return tableSorted;
    },
  },
};
</script>

<style scoped lang="scss">
$colors: #1C77C3, #F39237, #D63230, #26C485, #D35269, #F7E8A4;
$text_color: lightgray;
$bg_color: #150000;

main {
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: $text_color;
  background-color: $bg_color;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23ce0101' fill-opacity='0.2'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
h1 {
  font-family: 'Kramola', sans-serif;
  margin: 0;
  padding-top: 1em;
  text-align: center;
  font-size: 5em;
}
section {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.column, .empty {
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
}
h4 {
  text-align: center;
}
@for $i from 1 through length($colors) {
  .column:nth-child(#{$i+1}) > a:hover {
    color: nth($colors, $i);
    border-color: nth($colors, $i);
  }
}
</style>
