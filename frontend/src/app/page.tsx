import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-bl from-purple-900 via-blue-800 via-indigo-800 to-black min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 25 }).map((_, index) => {
            const top = `${Math.random() * 100}%`;
            const left = `${Math.random() * 100}%`;
            const size = `${Math.random() * 1.5 + 1}rem`;
            const duration = `${4 + Math.random() * 6}s`;
            const delay = `${Math.random() * 2}s`;
            const opacity = Math.random() * 0.2 + 0.05;

            return (
              <span
                key={index}
                className="absolute animate-floatSlow text-white"
                style={{
                  top,
                  left,
                  fontSize: size,
                  animationDuration: duration,
                  animationDelay: delay,
                  opacity,
                }}
              >
                🎵
              </span>
            );
          })}
        </div>

        <div className="relative z-10">
          <NavBar />

          <div className="flex flex-col justify-center items-center text-center min-h-screen">
            <h1 className="text-white text-6xl font-bold mb-3">Music. Magic.</h1>
            <h3 className="text-white text-2xl my-4">Find tunes that match your vibe.</h3>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 