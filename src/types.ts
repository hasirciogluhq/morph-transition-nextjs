export interface Game {
  id: string;
  title: string;
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  color: string;
  games: Game[];
}
