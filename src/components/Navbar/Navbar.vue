<template>
  <div class="navbar-wrapper">
    <nav class="navbar navbar-expand-md navbar-light navbar-wrapper__navbar">
      <a class="navbar-brand" href="/">
        <Logo />
      </a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarCollapsedContent"
              aria-controls="navbarCollapsedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarCollapsedContent">
        <ul class="ml-auto navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link navbar-wrapper__list-item px-md-3" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link navbar-wrapper__list-item px-md-3" :to="{ name : 'saved'}">Saved</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link navbar-wrapper__list-item px-md-3" :to="{ name : 'about'}">About</router-link>
          </li>
        </ul>
      </div>
    </nav>
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