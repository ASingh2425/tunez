'use client';

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from 'next/image';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import { useFavourites } from '@/context/FavouritesContext';
import allSongs from '@/data/songs';

export default function SongDetails() {
  const params = useParams();
  const router = useRouter();
  const { favourites, toggleFavourite } = useFavourites();
  const [song, setSong] = useState<any>(null);

  useEffect(() => {
    const foundSong = allSongs.find((s) => s.id === parseInt(params.id as string));
    if (foundSong) {
      setSong(foundSong);
    } else {
      router.push("/explore");
    }
  }, [params.id, router]);

  if (!song) {
    return (
      <div className="min-h-screen bg-black text-white flex justify-center items-center">
        <p>Loading song details...</p>
      </div>
    );
  }

  const isFavorite = favourites.includes(song.id);

  return (
    <>
      <section className="bg-gradient-to-b from-purple-950 to-black min-h-screen text-white">
        <NavBar />

        <div className="max-w-5xl mx-auto py-12 px-6 animate-fadeInUp">
          <button
            onClick={() => router.back()}
            className="text-indigo-400 mb-4 hover:underline"
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Image
              src={song.image}
              alt={song.name}
              width={288}
              height={288}
              className="w-72 h-72 object-cover rounded-lg shadow-lg"
            />

            <div>
              <h1 className="text-4xl font-bold mb-2">{song.name}</h1>
              <p className="text-gray-400 mb-4">{song.desp}</p>

              <p className="mb-2">
                <span className="font-semibold">Genre:</span>{" "}
                {Array.isArray(song.genre) ? song.genre.join(", ") : song.genre}
              </p>
              <p className="mb-4">
                <span className="font-semibold">Language:</span> {song.language}
              </p>

              <div className="flex gap-4">
                <button
                  onClick={() => toggleFavourite(song.id)}
                  className={`text-2xl transition ${
                    isFavorite ? "text-red-500" : "text-gray-400"
                  }`}
                >
                  {isFavorite ? "❤" : "🤍"}
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
      </section>

      <Footer />
    </>
  );
} 