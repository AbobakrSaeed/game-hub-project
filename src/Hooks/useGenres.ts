import useGenericData from "./useGenericData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
};

const useGenres= ()=>useGenericData<Genre>('/genres');

export default useGenres;