import { useEffect, useState } from "react";
import type { ITest } from "../models/ITest";
import { getUsername } from "../helpers/getUsername";

export function useTelegramNickname(test?: ITest) {
  const [nickname, setNickname] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAuthorNickname = async () => {
    if (!test?.author || test.isIncognito) {
      setNickname("Unknown");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${
          import.meta.env.VITE_TG_TOKEN
        }/getChat?chat_id=${test.author}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.ok && data.result) {
        setNickname(getUsername(data.result));
      } else {
        setNickname("Unknown");
      }
    } catch (error) {
      console.error("Failed to fetch author nickname:", error);
      setError("Failed to load author");
      setNickname("Unknown");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthorNickname();
  }, [test]);
  return { nickname, isLoading, error };
}
