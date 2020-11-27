<!-- Periodic table of the elements (by Mendeleev or Walter White, it's up to you) -->
<template>
  <main>
    <div class="empty"></div>
    <div class="column" v-for="hive in sortedHives" :key="hive.name">
      <h4>{{ hive.name }}</h4>
      <ChemicalElement v-for="link in hive.links" :link="link" :key="link.href"></ChemicalElement>
    </div>
    <div class="empty"></div>
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

main {
  font-family: 'Verdana', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #202020;
}
.column, .empty {
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
}
h4 {
  text-align: center;
  color: lightgray;
}
@for $i from 1 through length($colors) {
  .column:nth-child(#{$i+1}) > a:hover {
    color: nth($colors, $i);
    border-color: nth($colors, $i);
  }
}
</style>
