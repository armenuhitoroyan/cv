import axios from "axios";
import { useEffect, useState } from "react";
import { UseRequestProps } from "../interfaces/Types";

export const useRequest = <T>({ url }: UseRequestProps<T>) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T[]>(
          `https://my-json-server.typicode.com/armenuhitoroyan/cv-api/${url}`
        );
        setData(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};
