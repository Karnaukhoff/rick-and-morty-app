<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/episodes">Episodes</router-link>
        <router-link to="/locations">Locations</router-link>
      </nav>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>
import '@/assets/styles/app.css'

export default {
  name: 'App',
};
</script>