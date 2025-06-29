type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

type Album = {
  id: number;
  userId: number;
  title: string;
};

type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type { User, Album, Photo };
