<script lang="ts">
import { defineComponent } from "vue";
import HeaderMenu from "./components/HeaderMenu.vue";
import BodyMenu from "./components/BodyMenu.vue";

export default defineComponent({
  name: "App",
  components: {
    HeaderMenu,
    BodyMenu,
  },
});
</script>

<template>
  <div class="root">
    <HeaderMenu />
    <BodyMenu />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", serif;
}

ul {
  list-style: none;
}

.root {
  max-width: 744px;
  margin: 64px auto;
}
</style>
