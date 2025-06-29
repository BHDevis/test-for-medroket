<template>
  <div v-if="visible" class="modal" @click.self="close">
    <button class="close-btn" @click="close">×</button>
    <div class="modal-content">
      <img :src="photo.url" :alt="photo.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Photo } from "@/types/types";
import type { PropType } from "vue";

export default defineComponent({
  name: "PhotoPreview",
  props: {
    photo: {
      type: Object as PropType<Photo>,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    visible(val: boolean) {
      if (val) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  mounted() {
    if (this.visible) {
      document.body.style.overflow = "hidden";
    }
  },
  destroyed() {
    document.body.style.overflow = "";
  },
});
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(51, 51, 51, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content img {
  display: block;
  max-width: 600px;
  max-height: 600px;
  width: 100%;
  height: auto;
  background: #ffa726;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);
}

.close-btn {
  position: absolute;
  top: 16px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 32px;
  color: #fff;
  cursor: pointer;
  z-index: 2;
  line-height: 1;
  padding: 0;
  transition: color 0.2s;
}
</style>
