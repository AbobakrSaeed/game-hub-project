import useGenericData from "./useGenericData";
export interface Genre {
  id: number;
  name: string;
};

const useGenres= ()=>useGenericData<Genre>('/genres');

export default useGenres;