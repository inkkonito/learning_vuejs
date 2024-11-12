<script setup></script>

<template>
  <h1>Prompt Genius</h1>
  <nav>
    <li><a href="#">Features</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">About</a></li>
  </nav>
</template>

<style scoped>
h1 {
  font-size: 40px;
  text-align: center;
  margin: 20px 0;
}
li {
  list-style-type: none;
  flex: 1;
  text-align: center;
}
li > a {
  text-decoration: none;
  color: black;
}
li > a:hover {
  background: linear-gradient(45deg, #ff0000, #0000ff);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
nav {
  display: flex;
  width: 50%;
  margin: 50px auto;
}
h2 {
  text-align: center;
  font-size: 30px;
  font-style: italic;
  margin: 20px 0;
}
</style>
