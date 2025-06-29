<template>
  <div
    v-if="visible"
    class="tooltip"
    :style="{ top: y + 20 + 'px', left: x + 'px' }"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToolTip",
  props: {
    text: { type: String, required: true },
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    visible: { type: Boolean, required: true },
  },
});
</script>

<style scoped>
.tooltip {
  position: fixed;
  z-index: 9999;
  color: #fff;
  font-size: 12px;
  font-family: inherit;
  pointer-events: none;
  line-height: 1.3;
  border-radius: 4px;
  padding: 4px 8px;
  width: 150px;
  background: rgba(0, 0, 0, 0.69);
}
</style>
