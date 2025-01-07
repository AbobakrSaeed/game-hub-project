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

const useGames= (selectedGenre:Genre | null, selectedPlatform:Platform|null)=>{  
 return  useGenericData<Game>('/games', 
  {
    params: 
    {
      genres: selectedGenre?.id,
      platforms: selectedPlatform?.id
      }
  }, [selectedGenre?.id,selectedPlatform?.id]);
}

//{params: {genreId: selectedGenre?.id}}, pass the genreId as a querystring parameter to the url
// [selectedGenre?.id] > dependency array for the effect hook
  

export default useGames;
