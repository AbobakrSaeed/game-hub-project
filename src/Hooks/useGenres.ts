// import useGenericData from './useGenericData';
import genresData from '../data/genres';
export interface Genre {
  id: number;
  name: string;
  image_background: string;
};

// const useGenres= ()=>useGenericData<Genre>('/genres');
/*
here we defined a static data for genres instead of fetching it from the server again and again
*/
const useGenres= ()=>({data: genresData, error:false, loading:false});


export default useGenres;