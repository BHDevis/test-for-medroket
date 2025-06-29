import type { Photo } from "@/types/types";
import type { FavoritesState, FavoritesActionContext } from "@/store/types";

const FAVORITES_KEY = "favorites_photos";

function loadFromStorage(): Photo[] {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(photos: Photo[]) {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(photos));
}

const state: FavoritesState = {
  photos: loadFromStorage(),
};

const mutations = {
  ADD_FAVORITE(state: FavoritesState, photo: Photo) {
    if (!state.photos.find((p) => p.id === photo.id)) {
      state.photos.push(photo);
      saveToStorage(state.photos);
    }
  },
  REMOVE_FAVORITE(state: FavoritesState, photoId: number) {
    state.photos = state.photos.filter((p) => p.id !== photoId);
    saveToStorage(state.photos);
  },
};

const actions = {
  addFavorite({ commit }: FavoritesActionContext, photo: Photo) {
    commit("ADD_FAVORITE", photo);
  },
  removeFavorite({ commit }: FavoritesActionContext, photoId: number) {
    commit("REMOVE_FAVORITE", photoId);
  },
};

const getters = {
  isFavorite: (state: FavoritesState) => (photoId: number) =>
    state.photos.some((p) => p.id === photoId),
  allFavorites: (state: FavoritesState) => state.photos,
};

export const favorites = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
