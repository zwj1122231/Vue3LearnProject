<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/declarative">Declarative</router-link>|
    <router-link to="/attribute">Attribute</router-link>|
    <router-link to="/eventListen">EventListen</router-link>|
    <router-link to="/formBinding">FormBinding</router-link>|
    <router-link to="/conditionalRenderin">ConditionalRenderin</router-link>|
    <router-link to="/listRendering">ListRendering</router-link>|
    <router-link to="/calculation">Calculation</router-link>|
    <router-link to="/lifecycle">Lifecycle</router-link>|
    <router-link to="/listener">Listener</router-link>|
    <router-link to="/assemblys">Assembly</router-link>|
    <router-link to="/emits">Emits</router-link>|
    <router-link to="/slot">Slot</router-link>|
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
