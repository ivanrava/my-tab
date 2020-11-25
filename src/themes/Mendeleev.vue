<!-- Periodic table of the elements (by Mendeleev or Walter White, it's up to you) -->
<template>
  <main>
    <div class="column" v-for="hive in hives" :key="hive.name">
      <h4>{{ hive.name }}</h4>
      <ChemicalElement v-for="link in hive.links" :link="link" :key="link.href"></ChemicalElement>
    </div>
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
};
</script>

<style scoped>
main {
  font-family: 'Verdana', sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}
.column {
  display: flex;
  flex-direction: column-reverse;
}
h4 {
  text-align: center;
}
</style>
