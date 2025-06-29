<template>
  <div>
    <SpinnerLoader customClass="fullscreen-loader" v-if="isLoading" />
    <ErrorNotification customClass="error-users" v-else-if="error" />
    <ul v-else>
      <ListItem
        customClass="user"
        :opened="openedUserId === user.id"
        v-for="user in users"
        :key="user.id"
        @click="showAlbums(user.id)"
      >
        <template #text>{{ user.name }}</template>
        <template #list>
          <AlbumList v-if="openedUserId === user.id" :userId="user.id" />
        </template>
      </ListItem>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AlbumList from "./AlbumList.vue";
import ListItem from "@/UI/ListItem.vue";
import ErrorNotification from "@/UI/ErrorNotification.vue";
import SpinnerLoader from "@/UI/SpinnerLoader.vue";
import type { User } from "@/types/types";
import type { UsersState } from "@/store/types";

export default defineComponent({
  name: "UserList",
  components: { AlbumList, ListItem, SpinnerLoader, ErrorNotification },
  data() {
    return {
      openedUserId: null as number | null,
    };
  },
  computed: {
    users(): User[] {
      const state = this.$store.state.users as UsersState;
      return state.list;
    },
    isLoading(): boolean {
      const state = this.$store.state.users as UsersState;
      return state.isLoading;
    },
    error(): string | null {
      const state = this.$store.state.users as UsersState;
      return state.error;
    },
  },
  methods: {
    showAlbums(userId: number) {
      if (this.openedUserId === userId) {
        this.openedUserId = null;
      } else {
        this.openedUserId = userId;
        this.$store.dispatch("albums/loadAlbums", userId);
      }
    },
  },
});
</script>
