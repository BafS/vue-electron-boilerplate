<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <hello></hello>
    <p>
      Welcome to your <strong>Vue Electron Boilerplate</strong> app!
    </p>
    <counter></counter>
  </div>
</template>

<script>
import store from './vuex/store'
import Hello from './components/Hello'
import Counter from './components/Counter'

export default {
  store,
  components: {
    Hello,
    Counter
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
