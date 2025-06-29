import { apiService } from "@/api/api";
import type { UsersState, UsersActionContext } from "@/store/types";
import type { User } from "@/types/types";

const state: UsersState = {
  list: [],
  isLoading: false,
  error: null,
};

const mutations = {
  SET_USERS(state: UsersState, users: User[]): void {
    state.list = users;
  },
  SET_LOADING(state: UsersState, isLoading: boolean): void {
    state.isLoading = isLoading;
  },
  SET_ERROR(state: UsersState, error: string | null): void {
    state.error = error;
  },
};

const actions = {
  async loadUsers({ commit }: UsersActionContext) {
    commit("SET_LOADING", true);
    try {
      const users = await apiService.getUsers();
      commit("SET_USERS", users);
    } catch (error) {
      commit("SET_ERROR", "Ошибка загрузки пользователей");
      console.log(state.error);
    } finally {
      commit("SET_LOADING", false);
    }
  },
};

export const users = {
  namespaced: true,
  state,
  mutations,
  actions,
};
