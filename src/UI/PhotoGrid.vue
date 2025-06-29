<template>
  <div class="photo-grid">
    <div
      v-for="photo in photos"
      :key="photo.id"
      class="photo-card"
      @mouseenter="showTooltip($event, photo.title)"
      @mousemove="moveTooltip($event)"
      @mouseleave="hideTooltip"
    >
      <img
        class="photo-img"
        :src="photo.thumbnailUrl"
        :alt="photo.title"
        @click.stop="openPhoto(photo)"
      />
      <img
        class="photo-star"
        :src="isFavorite(photo.id) ? starActive : starEmpty"
        @click.stop="toggleFavorite(photo)"
      />
      <div class="photo-title" v-if="!isShowTooltip">{{ photo.title }}</div>
    </div>

    <ToolTip
      v-if="isShowTooltip"
      :text="tooltip.text"
      :x="tooltip.x"
      :y="tooltip.y"
      :visible="tooltip.visible"
    />
    <PhotoPreview
      v-if="selectedPhoto"
      :photo="selectedPhoto"
      :visible="!!selectedPhoto"
      @close="selectedPhoto = null"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ToolTip from "@/UI/ToolTip.vue";
import PhotoPreview from "@/UI/PhotoPreview.vue";
import starActive from "@/assets/star_active.png";
import starEmpty from "@/assets/star_empty.png";
import type { Photo } from "@/types/types";
import type { PropType } from "vue";

export default defineComponent({
  name: "PhotoGrid",
  components: { ToolTip, PhotoPreview },
  props: {
    photos: {
      type: Array as PropType<Photo[]>,
      required: true,
    },
    isShowTooltip: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selectedPhoto: null as Photo | null,
      starActive,
      starEmpty,
      tooltip: {
        text: "",
        x: 0,
        y: 0,
        visible: false,
      },
    };
  },
  computed: {
    isFavoriteGetter(): (id: number) => boolean {
      return this.$store.getters["favorites/isFavorite"] as (
        id: number
      ) => boolean;
    },
  },
  methods: {
    openPhoto(photo: Photo) {
      this.selectedPhoto = photo;
    },
    showTooltip(event: MouseEvent, text: string) {
      this.tooltip.text = text;
      this.tooltip.visible = true;
      this.moveTooltip(event);
    },
    moveTooltip(event: MouseEvent) {
      this.tooltip.x = event.clientX;
      this.tooltip.y = event.clientY + 6;
    },
    hideTooltip() {
      this.tooltip.visible = false;
    },
    isFavorite(photoId: number): boolean {
      return this.isFavoriteGetter(photoId);
    },
    toggleFavorite(photo: Photo) {
      if (this.isFavorite(photo.id)) {
        this.$store.dispatch("favorites/removeFavorite", photo.id);
      } else {
        this.$store.dispatch("favorites/addFavorite", photo);
      }
    },
  },
});
</script>

<style scoped>
.photo-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 42px;
  margin-top: 32px;
}

.photo-card {
  position: relative;
  width: 150px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.photo-img {
  height: 150px;
  text-align: left;
  border-radius: 4px;
  object-fit: cover;
  display: block;
}

.photo-star {
  width: 32px;
  height: 32px;
  cursor: pointer;
  position: absolute;
  top: 12px;
  right: 12px;
}

.photo-title {
  margin-top: 10px;
  text-align: left;
  font-size: 14px;
  line-height: 150%;
  color: #787878;
}
</style>
