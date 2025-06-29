import Vue from "vue";
import VueRouter from "vue-router";
import CatalogView from "@/views/CatalogView.vue";
import FavoritesView from "@/views/FavoritesView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/catalog" },
    { path: "/catalog", component: CatalogView },
    { path: "/favorites", component: FavoritesView },
  ],
});

export default router;
