"use client"
import Link from "next/link";
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
    <div className="flex min-h-screen">
      {/* Sidebar with genres */}
      <div className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-4 p-4">
          <div className="grid gap-2">
            <p className="px-3 text-sm font-medium text-gray-500 dark:text-gray-400">Genres</p>
            {genres.map((genre: string, index: number) => (
              <Link
                key={index}
                className={`flex items-center gap-3 rounded-md px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 ${selectedGenre === genre ? 'bg-blue-200' : ''}`}
                href="#"
                onClick={() => handleGenreClick(genre)}
              >
                {genre}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between px-4 lg:px-6 border-b border-gray-200 dark:border-gray-800">
          {/* Header content */}
        </header>
        <main className="flex-1 overflow-auto">
          {/* Main content */}
        </main>
      </div>
    </div>
  );
}
