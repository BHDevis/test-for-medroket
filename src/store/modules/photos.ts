import Vue from "vue";
import { apiService } from "@/api/api";
import type { Photo } from "@/types/types";
import type { PhotosState, PhotosActionContext } from "@/store/types";

const state: PhotosState = {
  albumPhotos: {},
  isLoading: false,
  error: null,
};

const mutations = {
  SET_PHOTOS(
    state: PhotosState,
    payload: { albumId: number; photos: Photo[] }
  ) {
    Vue.set(state.albumPhotos, payload.albumId, payload.photos);
  },
  SET_LOADING(state: PhotosState, isLoading: boolean) {
    state.isLoading = isLoading;
  },
  SET_ERROR(state: PhotosState, error: string | null) {
    state.error = error;
  },
};

const actions = {
  async loadPhotos({ commit }: PhotosActionContext, albumId: number) {
    commit("SET_LOADING", true);
    try {
      const photos = await apiService.getPhotos(albumId);
      commit("SET_PHOTOS", { albumId, photos });
    } catch {
      commit("SET_ERROR", "Ошибка загрузки фотографий");
      console.log(state.error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export const photos = {
  namespaced: true,
  state,
  mutations,
  actions,
};
