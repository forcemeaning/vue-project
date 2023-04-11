<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/todo-list">TodoList</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
  <NavBar />
  <div id="notification"></div>
  <router-view></router-view>
</template>

<script>
import NavBar from './components/navigator/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  },
};

/**
 * Options API 사용
 * Q1. Composition API를 사용해서 구조를 변경하면?
 */
</script>