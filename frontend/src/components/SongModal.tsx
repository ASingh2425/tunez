'use client';

import { useEffect } from "react";
import Image from 'next/image';
import { useFavourites } from '@/context/FavouritesContext';

interface Song {
  id: number;
  name: string;
  desp: string;
  image: string;
  language: string;
  genre: string[];
  url: string;
}

interface SongModalProps {
  song: Song | null;
  onClose: () => void;
}

export default function SongModal({ song, onClose }: SongModalProps) {
  const { favourites, toggleFavourite } = useFavourites();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!song) return null;

  const isFav = favourites.includes(song.id);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 animate-scaleIn">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative animate-fadeInUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-xl hover:text-red-400"
        >
          ×
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <Image
            src={song.image}
            alt={song.name}
            width={240}
            height={240}
            className="w-60 h-60 object-cover rounded-lg shadow"
          />

          <div>
            <h1 className="text-3xl font-bold mb-2">{song.name}</h1>
            <p className="text-gray-400 mb-4">{song.desp}</p>

            <p className="mb-2">
              <span className="font-semibold">Genre:</span>{" "}
              {Array.isArray(song.genre) ? song.genre.join(", ") : song.genre}
            </p>
            <p className="mb-4">
              <span className="font-semibold">Language:</span> {song.language}
            </p>

            <div className="flex gap-4 mt-4 items-center">
              <button
                onClick={() => toggleFavourite(song.id)}
                className={`text-2xl transition ${
                  isFav ? "text-red-500" : "text-gray-400"
                }`}
              >
                {isFav ? "❤️" : "🤍"}
              </button>

              <button
                onClick={() =>
                  alert("This would open a story-style preview in the app 🔊")
                }
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded transition"
              >
                Preview
              </button>

              {song.url ? (
                <a
                  href={song.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded transition"
                >
                  Play on Spotify
                </a>
              ) : (
                <button
                  disabled
                  className="px-4 py-2 bg-gray-600 text-white rounded cursor-not-allowed"
                >
                  Not Available on Spotify
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 