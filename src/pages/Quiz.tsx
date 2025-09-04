import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css"; // reuse same CSS for modal overlay + popup

// ✅ Import all workshop images
import AnatomyImg from "@/assets/workshop/Anatomy-Workshop.jpg";
import BurnsImg from "@/assets/workshop/Burns-Workshop.jpg";
import CardiologyImg from "@/assets/workshop/Cardiology-Workshop.jpg";
import EmergencyMedicineImg from "@/assets/workshop/EmergencyMedicine-Workshop.jpg";
import GastroenterologyImg from "@/assets/workshop/Gastroenterology-Workshop.jpg";
import NeurosurgeryImg from "@/assets/workshop/Neurosurgery-Workshops.jpg";
import ObstetricsImg from "@/assets/workshop/Obstetrics-Workshop.jpg";
import OphthalmologyImg from "@/assets/workshop/Ophthalmology-Workshop.jpg";
import OrthopaedicsImg from "@/assets/workshop/Orthopaedics-Workshop.jpg";
import OtorhinolaryngologyImg from "@/assets/workshop/Otorhinolaryngology-Workshop.jpg";
import PaediatricsImg from "@/assets/workshop/Paediatrics-Workshop.jpg";
import PsychiatryImg from "@/assets/workshop/Psychiatry-Workshop.jpg";
import SurgeryImg from "@/assets/workshop/Surgery-Workshop.jpg";
import ToxicologyImg from "@/assets/workshop/Toxicology-Workshop.jpg";

const WorkshopPage = () => {
  const [workshops, setWorkshops] = useState<any[]>([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/workshop-details.json");
        const data = await res.json();

        // ✅ Map JSON with imported images
        const enriched = data.workshops.map((ws: any) => {
          switch (ws.id) {
            case "anatomy":
              return { ...ws, image: AnatomyImg };
            case "burns":
              return { ...ws, image: BurnsImg };
            case "cardiology":
              return { ...ws, image: CardiologyImg };
            case "emergency-medicine":
              return { ...ws, image: EmergencyMedicineImg };
            case "gastroenterology":
              return { ...ws, image: GastroenterologyImg };
            case "neurosurgery":
              return { ...ws, image: NeurosurgeryImg };
            case "obstetrics":
              return { ...ws, image: ObstetricsImg };
            case "ophthalmology":
              return { ...ws, image: OphthalmologyImg };
            case "orthopaedics":
              return { ...ws, image: OrthopaedicsImg };
            case "otorhinolaryngology":
              return { ...ws, image: OtorhinolaryngologyImg };
            case "paediatrics":
              return { ...ws, image: PaediatricsImg };
            case "psychiatry":
              return { ...ws, image: PsychiatryImg };
            case "surgery":
              return { ...ws, image: SurgeryImg };
            case "toxicology":
              return { ...ws, image: ToxicologyImg };
            default:
              return ws;
          }
        });

        setWorkshops(enriched);
      } catch (error) {
        console.error("Failed to fetch workshop details:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="relative min-h-screen text-slate-900">
      {/* Navbar */}
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* Particles */}
      <div className="fixed inset-0 z-[1000] pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Page Content */}
      <main className="relative z-10">
        {/* Title Section */}
        <section className="pt-28 pb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide 
                       bg-gradient-to-r from-violet-600 to-yellow-500 bg-clip-text text-transparent"
          >
            Medrenaline’25 Workshops
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-700">
            Click on a workshop card for details and registration.
          </p>
        </section>

        {/* Workshop Cards Section */}
        <section className="container mx-auto px-4 pt-4 pb-16">
          {/* Grid for all except last 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {workshops.slice(0, workshops.length - 2).map((ws, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedWorkshop(ws)}
                className="relative rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                {/* Image */}
                <img
                  src={ws.image || "/placeholder.svg"}
                  alt={ws.title}
                  className="w-full h-64 object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-center p-4 text-center text-white">
                  <h2 className="text-lg font-bold">{ws.title}</h2>
                  <p className="text-sm mt-1">{ws.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Last Two Workshops Centered */}
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            {workshops.slice(-2).map((ws, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedWorkshop(ws)}
                className="relative rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl cursor-pointer w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
              >
                <img
                  src={ws.image || "/placeholder.svg"}
                  alt={ws.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex flex-col justify-center p-4 text-center text-white">
                  <h2 className="text-lg font-bold">{ws.title}</h2>
                  <p className="text-sm mt-1">{ws.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- POPUP MODAL --- */}
      {selectedWorkshop && (
        <div className="quiz-overlay" onClick={() => setSelectedWorkshop(null)}>
          <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="quiz-title">{selectedWorkshop.title}</h2>
            <p className="quiz-meta italic">{selectedWorkshop.subtitle}</p>
            <p className="quiz-meta">👨‍🏫 {selectedWorkshop.conductedBy}</p>
            <p className="quiz-meta">📅 {selectedWorkshop.date}</p>
            <p className="quiz-meta">🕒 {selectedWorkshop.time}</p>
            <p className="quiz-meta">📍 {selectedWorkshop.venue}</p>

            {/* Details sections */}
            {selectedWorkshop.details.map((section: any, i: number) => (
              <div key={i} className="mt-4">
                <h3>{section.heading}</h3>
                <ul>
                  {section.points.map((p: string, j: number) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Slots */}
            {selectedWorkshop.slotsAvailable && (
              <p className="quiz-meta mt-2">
                🎟 Slots Available: {selectedWorkshop.slotsAvailable}
              </p>
            )}

            {/* Fees */}
            <h3 className="mt-3">Registration Fees</h3>
            <ul>
              {selectedWorkshop.fees.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            {/* Incharges */}
            <h3 className="mt-3">Incharges</h3>
            <ul>
              {selectedWorkshop.incharges.map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="quiz-buttons mt-4 flex justify-end">
              <button
                onClick={() => setSelectedWorkshop(null)}
                className="px-4 py-2 border rounded-md mr-3"
              >
                Close
              </button>
              <a
                href={selectedWorkshop.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-green-600 text-white rounded-md inline-block text-center"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkshopPage;
