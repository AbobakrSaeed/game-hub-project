import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T>
{
    count: number;
    results: T[];
}
const useGenericData= <T>(endPoint: string)=>{
const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endPoint,{signal: controller.signal})
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
  },[endPoint]);
  return { data, error, loading };
}

export default useGenericData;