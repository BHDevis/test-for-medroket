import Vue from "vue";
import Vuex from "vuex";
import { users } from "@/store/modules/users";
import { albums } from "@/store/modules/albums";
import { photos } from "@/store/modules/photos";
import { favorites } from "@/store/modules/favorites";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
    albums,
    photos,
    favorites,
  },
});
