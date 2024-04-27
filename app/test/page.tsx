"use client"
import React, { useState, useEffect } from "react";

interface AudioDetails {
  id: string;
  title: string;
  url: string;
  creator: string;
}

export default function App(): JSX.Element {
  const [genres, setGenres] = useState<string[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<string>("");
  const [audioDetailsList, setAudioDetailsList] = useState<AudioDetails[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await fetch(
        'https://current--spotify-demo-graph-a1l0ih.apollographos.net/graphql',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            query: 'query ExampleQuery { genres }',
          }),
        }
      );
      const data = await response.json();
      const fetchedGenres: string[] = data.data.genres;
      setGenres(fetchedGenres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleGenreClick = async (genre: string): Promise<void> => {
    setSelectedGenre(genre);
    fetchAudioData(genre, searchQuery);
  };

  useEffect(() => {
    if (selectedGenre) {
      fetchAudioData(selectedGenre, searchQuery);
    }
  }, [selectedGenre, searchQuery]);

  const fetchAudioData = async (genre: string, query: string) => {
    try {
      const apiUrl = `https://api.openverse.engineering/v1/audio/?q=${encodeURIComponent(genre)}%20${encodeURIComponent(query)}&page_size=4`;
      const response = await fetch(
        apiUrl,
        {
          headers: {
            Authorization: "Bearer WjbXUJIRVm8rOV79eKhSqC0Exp8F7c",
          },
        }
      );
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setAudioDetailsList(data.results);
      }
    } catch (error) {
      console.error("Error fetching audio data:", error);
    }
  };

  return (
    <div>
      <div className="genres-list">
        {genres.map((genre: string, index: number) => (
          <div
            key={index}
            onClick={() => handleGenreClick(genre)}
            className={`p-2 shadow-md cursor-pointer ${selectedGenre === genre ? "bg-blue-200" : ""}`}
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="audio-details">
        {audioDetailsList.map((audioDetails: AudioDetails, index: number) => (
          <div key={index}>
            <div>
              <div>
                <h3>{audioDetails.title}</h3>
                <p>{audioDetails.creator}</p>
                <audio controls>
                  <source src={audioDetails.url} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
