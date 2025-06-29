<template>
  <div :class="customClass">
    <img src="@/assets/error.png" />
    <div>
      <h3>Сервер не отвечает</h3>
      <p>Уже работаем над этим</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotification",
  props: {
    customClass: {
      type: String,
      default: "",
    },
  },
});
</script>

<style scoped>
.error-users {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: -9999;
}

.error-list {
  display: flex;
  padding: 136px 348px;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}
.error-list h3 {
  font-size: 22px;
}

.error-list p {
  font-size: 18px;
}

img {
  margin-bottom: 32px;
}

h3 {
  margin-bottom: 6px;
  white-space: nowrap;
}

p {
  white-space: nowrap;
}
</style>
