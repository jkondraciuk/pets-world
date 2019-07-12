<template>
  <div id="app">
    <!-- <Navbar /> -->
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
<style lang="scss">
/* Fonts */
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap');

@import '@/assets/styles/colors.scss';

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
  }

  body {
    background-color: $grey-1 !important;
  }

  a {
    color: $grey-6 !important;
  }
</style>