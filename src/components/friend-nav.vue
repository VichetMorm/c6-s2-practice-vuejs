<template>
  <nav>
    <ul>
      <li>HOME</li>
      <li>ABOUT US</li>
      <li>SERVICES</li>
      <li>HELP</li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
nav,
ul {
  display: flex;
  list-style: none;
  background: rgb(255, 0, 0);
  color: white;
  font-family: sans-serif;
}
nav,
ul,
li {
  margin-right: 10px;
}
</style>