import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
};
interface FetchGenreResponse
{
    count: number;
    results: Genre[];
}
const useGenres= ()=>{
const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenreResponse>("/genres",{signal: controller.signal})
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
      return () => controller.abort();
  },[]);
  return { genres, error, loading };
}

export default useGenres;