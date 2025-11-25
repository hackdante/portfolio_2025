import { useState, useEffect } from "react";
import type { ParamsFetchUI, DataType, ErrorType } from "./interfaces";

export const useFetch = <T>(url: string): ParamsFetchUI<T> => {
  const [data, setData] = useState<DataType<T>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("No fue posible conectar con la base de datos...");
        }

        const jsonData: T = await response.json();

        setData(jsonData);
      } catch (e) {
        const err = e as Error;
        if (err.name !== "AbortError") {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
