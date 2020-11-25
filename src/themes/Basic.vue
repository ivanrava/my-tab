<!-- Basic Theme with a list of links -->
<template>
  <main>
    <div v-for="hive in hives" :key="hive.name">
      <h4>{{ hive.name }}</h4>
      <ul>
        <li v-for="link in hive.links" :key="link.href">
          <a :href="link.href">
            <div>{{ link.name }}</div>
            <small>{{ link.href }}</small>
          </a>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Basic',
  props: {
    hives: {
      type: Array,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
a {
  text-decoration: none;
  color: #2c3e50;
  display: block;
  padding: 1em;
  transition: background-color 0.2s;
  font-size: 2rem;
}
small {
  color: darkgrey;
  font-size: 1rem;
  font-family: monospace;
}
a:hover {
  color: mediumseagreen;
}
li {
  list-style: none;
}
ul {
  padding: 0;
  margin: 0;
}
h4 {
  margin: 3em 0 0 0;
  text-decoration: underline;
}
</style>
