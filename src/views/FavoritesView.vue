<template>
  <div class="favorites">
    <FavoritesList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FavoritesList from "@/components/Favorites/FavoritesList.vue";

export default defineComponent({
  name: "FavoritesView",
  components: { FavoritesList },
});
</script>
