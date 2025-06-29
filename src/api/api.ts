import axios from "axios";
import type { User, Album, Photo } from "@/types/types";

const API_URL = "https://json.medrocket.ru";

export const apiService = {
  async getUsers(): Promise<User[]> {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  },
  async getAlbums(userId: number): Promise<Album[]> {
    const response = await axios.get(`${API_URL}/albums?userId=${userId}`);
    return response.data;
  },
  async getPhotos(albumId: number): Promise<Photo[]> {
    const response = await axios.get(`${API_URL}/photos?albumId=${albumId}`);
    return response.data;
  },
};
