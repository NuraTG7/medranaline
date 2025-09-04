import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

// ✅ Reusable Continuous Scrolling Gallery
const ScrollingGallery = ({
  images,
  square = false,
}: {
  images: string[];
  square?: boolean;
}) => {
  return (
    <div className="overflow-hidden w-full relative">
      <div className="flex gap-6 animate-scroll-x">
        {[...images, ...images].map((img, i) => (
          <div
            key={i}
            className={`flex-shrink-0 ${
              square ? "w-[250px] h-[250px]" : "w-[320px] aspect-video"
            } rounded-xl overflow-hidden shadow-md bg-white`}
          >
            <img
              src={img}
              alt={`gallery-img-${i}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PrevEditions = () => {
  return (
    <div className="relative min-h-screen text-slate-900">
      {/* Navbar */}
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* Particles in background */}
      <div className="fixed inset-0 z-[1000] pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        {/* 👆 Added pt-28 for spacing under navbar */}

        <h1 className="text-4xl font-bold text-center mb-12 text-indigo-900">
          Previous Editions of Medrenaline
        </h1>

        {/* 2024 (Scrolling - Rectangular Frames) */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Medrenaline 2024
          </h2>
          <p className="text-center text-dark-foreground mb-6">
            Medrenaline 2024 was a grand success with workshops, guest
            lectures, and fun events.
          </p>
          <ScrollingGallery
            images={[
              "/Prev_Editions/24/DSC01604.jpeg",
              "/Prev_Editions/24/DSC01636.jpeg",
              "/Prev_Editions/24/DSC01751.jpeg",
              "/Prev_Editions/24/DSC01760.jpeg",
              "/Prev_Editions/24/DSC01790.jpeg",
              "/Prev_Editions/24/DSC01834.jpeg",
              "/Prev_Editions/24/DSC01876.jpeg",
              "/Prev_Editions/24/DSC02116.jpeg",
              "/Prev_Editions/24/DSC02126.jpeg",
            ]}
          />
        </section>

        {/* 2023 (Scrolling - Rectangular Frames) */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Medrenaline 2023
          </h2>
          <p className="text-center text-dark-foreground mb-6">
            Medrenaline 2023 brought together bright minds with interactive
            sessions, medical exhibitions.
          </p>
          <ScrollingGallery
            images={[
              "/Prev_Editions/23/DSC07701.jpeg",
              "/Prev_Editions/23/DSC07721.jpeg",
              "/Prev_Editions/23/DSC07804.jpeg",
              "/Prev_Editions/23/DSC07816.jpeg",
              "/Prev_Editions/23/DSC07844.jpeg",
              "/Prev_Editions/23/DSC07856.jpeg",
              "/Prev_Editions/23/DSC08051.jpeg",
              "/Prev_Editions/23/DSC08098.jpeg",
              "/Prev_Editions/23/IMG_1838.jpeg",
              "/Prev_Editions/23/IMG_1849.jpeg",
            ]}
          />
        </section>

        {/* 2022 (Scrolling - Square Frames) */}
        <section className="mb-20">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Medrenaline 2022
          </h2>
          <p className="text-center text-dark-foreground mb-6">
            The 2022 edition marked the return of Medrenaline with impactful
            workshops, speaker series, and exciting competitions.
          </p>
          <ScrollingGallery
            images={[
              "/Prev_Editions/22/IMG_2041.png",
              "/Prev_Editions/22/IMG_2042.png",
              "/Prev_Editions/22/IMG_2043.png",
              "/Prev_Editions/22/IMG_2044.png",
              "/Prev_Editions/22/IMG_2045.png",
            ]}
            square
          />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PrevEditions;
