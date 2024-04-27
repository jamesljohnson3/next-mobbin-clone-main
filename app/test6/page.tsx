"use client"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { JSX, SVGProps } from "react"
import React, { useState, useEffect } from "react";

interface AudioDetails {
  id: string;
  title: string;
  creator: string;
  thumbnail?: string;
}

interface ApiResponse {
  result_count: number;
  page_count: number;
  page_size: number;
  page: number;
  results: AudioDetails[];
  warnings: any[];
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
      const apiUrl = `https://api.openverse.engineering/v1/audio/?q=${encodeURIComponent(genre)}%20${encodeURIComponent(query)}&page_size=20`;
      const response = await fetch(
        apiUrl,
        {
          headers: {
            Authorization: "Bearer WjbXUJIRVm8rOV79eKhSqC0Exp8F7c",
          },
        }
      );
      const data: ApiResponse = await response.json();
      if (data.results && data.results.length > 0) {
        setAudioDetailsList(data.results);
      }
    } catch (error) {
      console.error("Error fetching audio data:", error);
    }
  };

  return (
    <div className="flex overflow-auto max-h-screen">
      <div className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen overflow-auto flex-col gap-4 p-4">
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
      <div className="flex flex-1 flex-col">
      <header className="flex h-14 items-center justify-between px-4 lg:px-6 border-b border-gray-200 dark:border-gray-800">
          <Link className="flex items-center gap-2" href="#">
            <MusicIcon className="h-6 w-6" />
            <span className="text-lg font-semibold">Melodic</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="relative w-full max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 dark:text-gray-400" />
              <Input
                className="w-full rounded-md bg-gray-100 px-8 py-2 text-sm shadow-none focus:bg-white dark:bg-gray-800 dark:focus:bg-gray-950"
                placeholder="Search for artists, albums, and playlists"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              
            </div>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Home
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Library
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                    href="#"
                  >
                    Playlists
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </header>
        <main className="flex-1 overflow-auto max-h-screen">
          <section className="py-8 px-4 lg:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Artists</h2>
              <p className="text-gray-500 dark:text-gray-400">Explore the latest and greatest artists.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {audioDetailsList
                .filter((audioDetails) => audioDetails.creator)
                .map((audioDetails, index) => (
                  <div key={index} className="group relative">
                    <Link className="absolute inset-0 z-10" href="#">
                      <span className="sr-only">View artist</span>
                    </Link>
                    <img
                      alt="Artist profile"
                      className="aspect-square rounded-full object-cover group-hover:opacity-50 transition-opacity"
                      height={200}
                      src={audioDetails.thumbnail || "/placeholder.svg"}
                      width={200}
                    />
                    <div className="mt-2">
                      <h3 className="text-sm font-semibold tracking-tight line-clamp-1">{audioDetails.creator}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          <section className="py-8 px-4 lg:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Albums</h2>
              <p className="text-gray-500 dark:text-gray-400">Discover the latest and greatest albums.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {audioDetailsList
                .filter((audioDetails) => audioDetails.title)
                .sort((a, b) => (a.title > b.title ? 1 : -1))
                .map((audioDetails, index) => (
                  <div key={index} className="group relative">
                    <Link className="absolute inset-y-0 left-0 z-10" href="#">
                      <span className="sr-only">View album</span>
                    </Link>
                    <img
                      alt="Album cover"
                      className="aspect-square rounded-lg object-cover group-hover:opacity-50 transition-opacity"
                      height={200}
                      src={audioDetails.thumbnail || "/placeholder.svg"}
                      width={200}
                    />
                    <div className="mt-2">
                      <h3 className="text-sm font-semibold tracking-tight line-clamp-1">{audioDetails.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1">{audioDetails.creator}</p>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
function MusicIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}