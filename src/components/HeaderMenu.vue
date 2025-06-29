<template>
  <header>
    <nav>
      <RouterLink to="catalog">Каталог</RouterLink>
      <RouterLink to="favorites">Избранное</RouterLink>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
nav a {
  display: inline-block;
  padding: 16px 152px;
  font-weight: 400;
  font-size: 18px;
  line-height: 130%;
  color: #1c1c1c;
  border-radius: 16px;
  transition: all 0.3s;
  text-decoration: none;
}
nav a:hover {
  background: #edf9ff;
}
.router-link-exact-active {
  color: #117dc1;
  background: #edf9ff;
}
</style>
