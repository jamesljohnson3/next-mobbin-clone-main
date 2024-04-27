"use client"
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu";
import { JSX, SVGProps } from "react";
import React, { useState, useEffect } from "react";
import { useInfiniteScroll } from "./infinite-scroll"; // Replace with the correct path

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

  useEffect(() => {
    if (selectedGenre) {
      fetchAudioData(selectedGenre, searchQuery);
    }
  }, [selectedGenre, searchQuery]);

  const fetchMoreData = () => {
    // Logic to fetch more data on infinite scroll
    // For example, you can increase page number and fetch more data
    // Example:
    // const nextPage = currentPage + 1;
    // fetchAudioData(selectedGenre, searchQuery, nextPage);
  };

  const handleInfiniteScroll = useInfiniteScroll(fetchMoreData); // Provide fetchMoreData as the callback function

  const fetchGenres = async () => {
    // Your existing fetchGenres function
  };

  const handleGenreClick = async (genre: string): Promise<void> => {
    setSelectedGenre(genre);
    fetchAudioData(genre, searchQuery);
  };

  const fetchAudioData = async (genre: string, query: string) => {
    // Your existing fetchAudioData function
  };

  return (
    <div className="flex overflow-auto max-h-screen">
      {/* Your existing UI code */}
      {/* Ensure to include the sentinelRef in the last element of your scrollable content */}
      <main className="flex-1 overflow-auto max-h-screen" ref={handleInfiniteScroll}>
        {/* Your existing UI code */}
      </main>
    </div>
  );
}