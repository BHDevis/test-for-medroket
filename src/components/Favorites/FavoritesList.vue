<template>
  <div class="favorite-list">
    <PhotoGrid v-if="favorites.length" :photos="favorites" />
    <div class="empty-favorites" v-else>
      <img src="@/assets/empty.png" />
      <h3>Список избранного пуст</h3>
      <p>Добавляйте изображения, нажимая на звездочки</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PhotoGrid from "@/UI/PhotoGrid.vue";
import starActive from "@/assets/star_active.png";
import type { Photo } from "@/types/types";
import type { FavoritesState } from "@/store/types";

export default defineComponent({
  name: "FavoritesList",
  components: { PhotoGrid },
  computed: {
    favorites(): Photo[] {
      const state = this.$store.state.favorites as FavoritesState;
      return state.photos;
    },
    starActive(): string {
      return starActive;
    },
  },
  methods: {
    removeFavorite(photo: Photo) {
      this.$store.dispatch("favorites/removeFavorite", photo.id);
    },
  },
});
</script>
<style scoped>
.favorite-list {
  display: flex;
  justify-content: center;
}

.empty-favorites {
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

.empty-favorites img {
  margin-bottom: 32px;
}

.empty-favorites h3 {
  margin-bottom: 6px;
}
</style>
