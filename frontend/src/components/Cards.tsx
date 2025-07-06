'use client';

import Image from 'next/image';
import { useFavourites } from '@/context/FavouritesContext';

interface CardsProps {
  title: string;
  desp: string;
  image: string;
  language: string;
  genre: string[];
  songId: number;
}

export default function Cards({ title, desp, image, language, genre, songId }: CardsProps) {
  const { favourites, toggleFavourite } = useFavourites();
  const isFav = favourites.includes(songId);

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer relative group">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavourite(songId);
        }}
        className={`absolute top-3 right-3 text-2xl transition-transform duration-200 z-10 ${
          isFav ? "text-red-500" : "text-gray-400"
        }`}
      >
        {isFav ? "❤️" : "🤍"}
      </button>

      <Image
        src={image}
        alt={title}
        width={400}
        height={192}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold mb-1">{title}</h2>
        <p className="text-gray-400 text-sm mb-2">{desp}</p>
        <div className="text-sm text-gray-300">
          <span className="mr-2">🎧 {language}</span>
          <span>🎵 {Array.isArray(genre) ? genre.join(", ") : genre}</span>
        </div>
      </div>
    </div>
  );
} 