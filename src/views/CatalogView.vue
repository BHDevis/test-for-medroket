<template>
  <div class="catalog">
    <UserList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UserList from "@/components/Catalog/UserList.vue";

export default defineComponent({
  name: "CatalogView",
  components: { UserList },
  created() {
    this.$store.dispatch("users/loadUsers");
  },
});
</script>

<style scoped>
.catalog {
  margin-top: 16px;
}
</style>
