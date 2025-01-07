import { GameQuery } from "@/App";
import useGenericData from "./useGenericData";


export interface Platform {
    id: number;
    name: string;
    slug: string;
    
};
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: {platform:Platform}[];
  metacritic: number;
};

const useGames= (gameQuery: GameQuery)=>{  
 return  useGenericData<Game>('/games', 
  {
    params: 
    {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
      }
  }, [gameQuery]);
}

//{params: {genreId: selectedGenre?.id}}, pass the genreId as a querystring parameter to the url
// [selectedGenre?.id] > dependency array for the effect hook
  

export default useGames;
