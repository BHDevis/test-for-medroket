<template>
  <div class="photo-list">
    <SpinnerLoader customClass="list-loader" v-if="isLoading" />
    <ErrorNotification customClass="error-list" v-else-if="error" />
    <PhotoGrid v-else :photos="photos" :isShowTooltip="true" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SpinnerLoader from "@/UI/SpinnerLoader.vue";
import PhotoGrid from "@/UI/PhotoGrid.vue";
import ErrorNotification from "@/UI/ErrorNotification.vue";
import starActive from "@/assets/star_active.png";
import starEmpty from "@/assets/star_empty.png";
import type { PropType } from "vue";
import type { Photo } from "@/types/types";
import type { PhotosState } from "@/store/types";

export default defineComponent({
  name: "PhotoList",
  components: { SpinnerLoader, PhotoGrid, ErrorNotification },
  props: {
    albumId: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  data() {
    return {
      selectedPhoto: null as Photo | null,
      starActive,
      starEmpty,
    };
  },
  computed: {
    photos(): Photo[] {
      const state = this.$store.state.photos as PhotosState;
      return state.albumPhotos[this.albumId] || [];
    },
    isLoading(): boolean {
      const state = this.$store.state.photos as PhotosState;
      return state.isLoading;
    },
    error(): string | null {
      const state = this.$store.state.photos as PhotosState;
      return state.error;
    },
  },
  methods: {
    openPhoto(photo: Photo) {
      this.selectedPhoto = photo;
    },
  },
  created() {
    this.$store.dispatch("photos/loadPhotos", this.albumId);
  },
});
</script>

<style scoped>
.photo-list {
  margin-left: 49px;
}
</style>
