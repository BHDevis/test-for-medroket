<template>
  <div>
    <SpinnerLoader customClass="list-loader" v-if="isLoading" />
    <ErrorNotification customClass="error-list" v-else-if="error" />
    <ul v-else>
      <ListItem
        :opened="openedAlbumId === album.id"
        customClass="album"
        v-for="album in albums"
        :key="album.id"
        @click.stop="showPhotos($event, album.id)"
      >
        <template #text>{{ album.title }}</template>
        <template #list>
          <PhotoList v-if="openedAlbumId === album.id" :albumId="album.id" />
        </template>
      </ListItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PhotoList from "./PhotoList.vue";
import ListItem from "@/UI/ListItem.vue";
import SpinnerLoader from "@/UI/SpinnerLoader.vue";
import type { PropType } from "vue";
import ErrorNotification from "@/UI/ErrorNotification.vue";
import type { Album } from "@/types/types";
import type { AlbumsState } from "@/store/types";

export default defineComponent({
  components: { ListItem, PhotoList, SpinnerLoader, ErrorNotification },
  props: {
    userId: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  data() {
    return {
      openedAlbumId: null as number | null,
    };
  },
  computed: {
    albums(): Album[] {
      const state = this.$store.state.albums as AlbumsState;
      return state.userAlbums[this.userId] || [];
    },
    isLoading(): boolean {
      const state = this.$store.state.albums as AlbumsState;
      return state.isLoading;
    },
    error(): string | null {
      const state = this.$store.state.albums as AlbumsState;
      return state.error;
    },
  },
  methods: {
    showPhotos(event: Event, albumId: number) {
      if (this.openedAlbumId !== albumId) {
        this.openedAlbumId = albumId;
      } else {
        this.openedAlbumId = null;
      }
    },
  },
});
</script>
