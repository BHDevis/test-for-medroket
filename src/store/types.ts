import type { User, Album, Photo } from "@/types/types";
import type { ActionContext } from "vuex";

type RootState = {
  users: UsersState;
  albums: AlbumsState;
  photos: PhotosState;
  favorites: FavoritesState;
};

type UsersState = {
  list: User[];
  isLoading: boolean;
  error: string | null;
};

type AlbumsState = {
  userAlbums: Record<number, Album[]>;
  isLoading: boolean;
  error: string | null;
};

type PhotosState = {
  albumPhotos: Record<number, Photo[]>;
  isLoading: boolean;
  error: string | null;
};

type FavoritesState = {
  photos: Photo[];
};

type UsersActionContext = ActionContext<UsersState, RootState>;
type AlbumsActionContext = ActionContext<AlbumsState, RootState>;
type PhotosActionContext = ActionContext<PhotosState, RootState>;
type FavoritesActionContext = ActionContext<FavoritesState, RootState>;

export type {
  RootState,
  UsersState,
  UsersActionContext,
  AlbumsState,
  AlbumsActionContext,
  PhotosState,
  PhotosActionContext,
  FavoritesState,
  FavoritesActionContext,
};
