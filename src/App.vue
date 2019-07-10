<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name : 'saved'}">Saved</router-link>
      <router-link :to="{ name : 'about'}">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
