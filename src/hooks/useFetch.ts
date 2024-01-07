import { useEffect, useState } from "react";

type UseJsonFetchResult = {
  data: object,
  isLoading: boolean,
  isSuccess: boolean,
  error: string
}

export const useFetch = (url:string, opts?: object): UseJsonFetchResult => {
  const [data, setData] = useState<Object>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async (url: string) => {
      setIsLoading(true);
      setIsSuccess(false);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        
        setData(data);
        setIsSuccess(true);
        setError("");
      } catch (e) {
        setError(e instanceof Error ? e.toString() : "Invalid request");
      } finally { 
        setIsLoading(false); 
      }
    }

    fetchData(url);
  }, [url])
  

  return {data, isLoading, isSuccess, error};
}