import Vue from "vue";
import { apiService } from "@/api/api";
import type { Album } from "@/types/types";
import type { AlbumsState, AlbumsActionContext } from "@/store/types";

const state: AlbumsState = {
  userAlbums: {},
  isLoading: false,
  error: null,
};

const mutations = {
  SET_ALBUMS(state: AlbumsState, payload: { userId: number; albums: Album[] }) {
    Vue.set(state.userAlbums, payload.userId, payload.albums);
  },
  SET_LOADING(state: AlbumsState, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  SET_ERROR(state: AlbumsState, error: string | null): void {
    state.error = error;
  },
};

const actions = {
  async loadAlbums({ commit }: AlbumsActionContext, userId: number) {
    commit("SET_LOADING", true);
    try {
      const albums = await apiService.getAlbums(userId);
      commit("SET_ALBUMS", { userId, albums });
    } catch (error) {
      commit("SET_ERROR", "Ошибка загрузки альбомов");
      console.log(state.error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export const albums = {
  namespaced: true,
  state,
  mutations,
  actions,
};
