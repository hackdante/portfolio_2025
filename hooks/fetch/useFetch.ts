import { useState, useEffect } from "react";
import type { ParamsFetchUI, DataType, ErrorType } from "./interfaces";

export const useFetch = <T>(url: string): ParamsFetchUI<T> => {
  const [data, setData] = useState<DataType<T>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (): Promise<void> => {
      setLoading(true);
      try {
        const response: Response = await fetch(url, { signal: controller.signal });

        if (!response.ok) {
          throw new Error("No fue posible conectar con la base de datos...");
        }

        const raw: Promise<T> = response.json();
        const jsonData: T = await raw;

        setData(jsonData);
      } catch (e) {
        if (e instanceof Error) {
          if (e.name !== "AbortError") {
            setError(e);
          }
        } else {
          setError(new Error("Error inesperado"));
        }
      } finally {
        setLoading(false);
      }
    };

    void fetchData();

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