"use client"
import React, { useState, useEffect } from "react";

import axios from 'axios';

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
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const response = await axios.post(
        'https://current--spotify-demo-graph-a1l0ih.apollographos.net/graphql',
        {
          query: 'query ExampleQuery { genres }',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const fetchedGenres: string[] = response.data.data.genres;
      setGenres(fetchedGenres);
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  const handleGenreClick = async (genre: string): Promise<void> => {
    setSelectedGenre(genre);
    if (!selectedGenres.includes(genre)) {
      setSelectedGenres([...selectedGenres, genre]);
    } else {
      setSelectedGenres(selectedGenres.filter((selected) => selected !== genre));
    }
    fetchAudioData(genre, searchQuery);
  };

  const handleMultiSelect = (genre: string): string => {
    return selectedGenres.includes(genre) ? "bg-blue-200" : "";
  };

  useEffect(() => {
    if (selectedGenre) {
      fetchAudioData(selectedGenre, searchQuery);
    }
  }, [selectedGenre, searchQuery]);

  const fetchAudioData = async (genre: string, query: string) => {
    try {
      const apiUrl = `https://api.openverse.engineering/v1/audio/?q=${encodeURIComponent(genre)}%20${encodeURIComponent(query)}&page_size=4`;
      const response = await axios.get(
        apiUrl,
        {
          headers: {
            Authorization: "Bearer WjbXUJIRVm8rOV79eKhSqC0Exp8F7c",
          },
        }
      );
      const data = response.data;
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
            className={`p-2 shadow-md cursor-pointer ${handleMultiSelect(genre)}`}
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
