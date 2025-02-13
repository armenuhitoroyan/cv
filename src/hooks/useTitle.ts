import { useEffect, useState } from "react";

// Define the type for the title parameter
export const useTitle = (title: string | undefined): boolean => {
  const [isChangedTitle, setIsChanged] = useState<boolean>(false);

  useEffect(() => {
    if (title) {
      document.title = `Afsu - ${title}`;
      setIsChanged(true);
    }
  }, [title]);

  return isChangedTitle;
};
