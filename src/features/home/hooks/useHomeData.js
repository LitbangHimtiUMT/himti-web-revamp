import { useState, useEffect } from "react";

export default function useHomeData() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    // Simulasi ambil data dari API
    setTimeout(() => {
      setFeatures(["Fast and responsive", "Easy to use", "Beautiful design"]);
    }, 1000);
  }, []);

  return features;
}
