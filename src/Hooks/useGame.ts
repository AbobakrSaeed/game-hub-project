import useGenericData from "./useGenericData";
import { Genre } from "./useGenres";


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

const useGames= (selectedGenre:Genre | null)=>{  
 return  useGenericData<Game>('/games', {params: {genreId: selectedGenre?.id}}, [selectedGenre?.id]);
}

//{params: {genreId: selectedGenre?.id}}, pass the genreId as a querystring parameter to the url
// [selectedGenre?.id] > dependency array for the effect hook
  

export default useGames;
