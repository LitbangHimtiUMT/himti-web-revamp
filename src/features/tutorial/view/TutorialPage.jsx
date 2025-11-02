import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import VidioSection from "../components/VidioSection";
import { dataTutorial } from "../data/useDataTutorial";

export default function TutorialPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTutorials, setFilteredTutorials] = useState(dataTutorial);

  useEffect(() => {
    const results = dataTutorial.filter((tutorial) =>
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTutorials(results);
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Aksi submit
    console.log("Searching for:", searchTerm);
  };

  return (
    <div>
      <HeroSection
        onSearchChange={handleSearchChange}
        onSearchSubmit={handleSearchSubmit}
      />
      <VidioSection tutorials={filteredTutorials} />
    </div>
  );
}