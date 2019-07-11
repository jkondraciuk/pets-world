<template>
  <div class="navbar-wrapper">
    <b-navbar class="navbar-wrapper__navbar" toggleable="md" variant="transparent">
      <b-navbar-brand class="logo" href="/">
        <Logo />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto navbar-wrapper__list">
          <b-nav-item href="#">
            <router-link class="navbar-wrapper__list-item px-md-3" to="/">Home</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="navbar-wrapper__list-item px-md-3" :to="{ name : 'saved'}">Saved</router-link>
          </b-nav-item>
          <b-nav-item href="#">
            <router-link class="navbar-wrapper__list-item px-md-3" :to="{ name : 'about'}">About</router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from '@/components/Logo/Logo';

export default {
  name: 'Navbar',
  components: {
    Logo
  }
}
</script>

<style src="./Navbar.scss" lang="scss" scoped />>