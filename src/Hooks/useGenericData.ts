import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T>
{
    count: number;
    results: T[];
}
const useGenericData= <T>(endPoint: string, requestConfig?:AxiosRequestConfig, dependency?: React.DependencyList)=>{
const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endPoint,{signal: controller.signal, ...requestConfig}) // ...requestConfig to add any additional properties querystring ?genreId=4
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if(error instanceof CanceledError) return;
        setError(error.message);
        setLoading(false);
      });
      return () => controller.abort();
  }, dependency ? [...dependency] :[]);
  return { data, error, loading };
}

export default useGenericData;