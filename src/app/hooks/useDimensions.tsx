import { useEffect, useState } from "react";

export default function useDimensions() {
  const [dimensions, setDimensions] = useState<{
    width: null | number;
    height: null | number;
  }>({
    width: null,
    height: null,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", updateDimensions);

    updateDimensions();

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimensions;
}
