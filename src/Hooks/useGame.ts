import useGenericData from "./useGenericData";

interface Platform {
    id: number;
    name: string;
    slug: string;
    
};
interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform:Platform}[];
  metacritic: number;
};

const useGames= ()=>useGenericData<Game>('/games');

export default useGames;