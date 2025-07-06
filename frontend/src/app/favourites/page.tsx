'use client';

import Link from "next/link";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { useFavourites } from '@/context/FavouritesContext';
import allSongs from '@/data/songs';
import Cards from '@/components/Cards';

export default function Favourites() {
  const { favourites } = useFavourites();

  const favSongs = allSongs.filter((song) => favourites.includes(song.id));

  return (
    <>
      <NavBar />

      <section className="bg-black min-h-screen px-10 py-6 text-white">
        <h1 className="text-3xl font-bold mb-6">My Favourites</h1>

        {favSongs.length === 0 ? (
          <p className="text-gray-400">You have no favourite songs yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {favSongs.map((song) => (
              <Link href={`/song/${song.id}`} key={song.id}>
                <Cards
                  title={song.name}
                  desp={song.desp}
                  image={song.image}
                  language={song.language}
                  genre={song.genre}
                  songId={song.id}
                />
              </Link>
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
} 