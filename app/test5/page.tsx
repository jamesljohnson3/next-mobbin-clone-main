"use client"
import React, { useState, useEffect } from "react";
import axios from 'axios';
import Link from "next/link";

interface AudioDetails {
  id: string;
  title: string;
  url: string;
  creator: string;
  thumbnail?: string;
  tags: { name: string }[];
  type: "artist" | "album";
}

export default function App(): JSX.Element {
  const [audioDetailsList, setAudioDetailsList] = useState<AudioDetails[]>([]);

  useEffect(() => {
    fetchAudioData();
  }, []);

  const fetchAudioData = async () => {
    try {
      const apiUrl = `YOUR_API_URL_HERE`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: "Bearer YOUR_API_TOKEN_HERE",
        },
      });
      const data = response.data;
      if (data.results && data.results.length > 0) {
        setAudioDetailsList(data.results);
      }
    } catch (error) {
      console.error("Error fetching audio data:", error);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Your sidebar content goes here */}
      <div className="hidden w-64 border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        {/* Sidebar content */}
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <main className="flex-1 overflow-auto">
          {/* Artists section */}
          <section className="py-8 px-4 lg:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Artists</h2>
              <p className="text-gray-500 dark:text-gray-400">Explore the latest and greatest artists.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {audioDetailsList
                .filter((audioDetails) => audioDetails.type === "artist")
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
                      <h3 className="text-sm font-semibold tracking-tight line-clamp-1">{audioDetails.title}</h3>
                    </div>
                  </div>
                ))}
            </div>
          </section>

          {/* Albums section */}
          <section className="py-8 px-4 lg:px-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold tracking-tight">Albums</h2>
              <p className="text-gray-500 dark:text-gray-400">Discover the latest and greatest albums.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {audioDetailsList
                .filter((audioDetails) => audioDetails.type === "album")
                .map((audioDetails, index) => (
                  <div key={index} className="group relative">
                    <Link className="absolute inset-0 z-10" href="#">
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
