<template>
  <li :class="customClass" @click="$emit('click', $event)">
    <div class="list-item">
      <svg
        v-if="!opened"
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#117DC1" />
        <path d="M9 16H23" stroke="white" stroke-width="2" />
        <path d="M16 9L16 23" stroke="white" stroke-width="2" />
      </svg>
      <svg
        v-else
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#117DC1" />
        <path d="M23 16L9 16" stroke="white" stroke-width="2" />
      </svg>
      <slot name="text"></slot>
    </div>
    <slot class="list" name="list"></slot>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ListItem",
  props: {
    customClass: {
      type: String,
      default: "",
    },
    opened: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
});
</script>

<style scoped>
.list-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
  padding: 25.5px 56px;
  line-height: 130%;
  list-style: none;
  border-radius: 16px;
}

svg {
  position: absolute;
  left: 0;
  right: 26px;
}

.user {
  font-size: 22px;
  font-weight: 500;
}
.album {
  font-size: 18px;
  font-weight: 400;
  padding: 0 56px;
}
</style>
