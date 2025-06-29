<template>
  <div :class="customClass">
    <img src="@/assets/loader.gif" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SpinnerLoader",
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.fullscreen-loader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-loader {
  padding: 136px 348px;
}
</style>
