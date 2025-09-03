import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css";

// Import the images from your src/assets folder
import casePresentationImg from '@/assets/other_events/CasePresentation-OtherEvents.jpg';
import medicalDebateImg from '@/assets/other_events/MedicalDebate-OtherEvents.jpg';
import researchPaperImg from '@/assets/other_events/ResearchPaper-OtherEvents.jpg';

const OtherEventsPage = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/otherEvents.json");
        const data = await res.json();
        setEvents(data.events);
      } catch (error) {
        console.error("Failed to load events:", error);
      }
    };
    fetchEvents();
  }, []);

  const EventCard = ({ event }: { event: any }) => {
    const titleParts = event.title.split(' - ');
    const mainTitle = titleParts[0] || event.title;
    const subTitle = titleParts.length > 1 ? titleParts.slice(1).join(' - ') : '';

    const getEventImage = () => {
      const upperCaseTitle = event.title.toUpperCase();
      if (upperCaseTitle.includes('CASE PRESENTATION')) { return casePresentationImg; }
      if (upperCaseTitle.includes('MEDICAL DEBATE')) { return medicalDebateImg; }
      if (upperCaseTitle.includes('RESEARCH PAPER')) { return researchPaperImg; }
      return '/placeholder.svg';
    };

    return (
      <div
        onClick={() => setSelectedEvent(event)}
        className="relative rounded-2xl overflow-hidden shadow-lg h-[320px] w-[320px]
                   bg-[#1e1e3a] transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
      >
        <img src={getEventImage()} alt={event.title} className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-6 text-center">
          <div className="w-full">
            <h2 className="text-2xl font-bold text-white uppercase drop-shadow-lg">{mainTitle}</h2>
            <p className="text-xl text-gray-200 drop-shadow-lg mt-1">{subTitle}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen text-slate-900">
      <div className="relative z-[2000]"><Navigation /></div>
      <div className="fixed inset-0 z-[1000] pointer-events-none"><ParticlesBackground /></div>

      <main className="relative z-10">
        <section className="pt-28 pb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent">
            Medrenaline’25 – Other Events
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-700">
            Click on an event card for more details and registration information.
          </p>
        </section>

        <section className="container mx-auto px-4 pt-4 pb-16">
          {/* --- UPDATED: A single container for all cards to ensure consistent spacing --- */}
          <div className="flex flex-wrap justify-center gap-8">
            {events.map((event, idx) => (
              <EventCard key={idx} event={event} />
            ))}
          </div>
        </section>
      </main>

      {selectedEvent && (
        <div className="quiz-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="quiz-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="quiz-title">{selectedEvent.title}</h2>
            {selectedEvent.date && <p className="quiz-meta">📅 {selectedEvent.date}</p>}
            {selectedEvent.time && <p className="quiz-meta">🕒 {selectedEvent.time}</p>}
            {selectedEvent.venue && <p className="quiz-meta">📍 {selectedEvent.venue}</p>}
            {selectedEvent.rules && (<div><h3>Rules</h3><ul>{selectedEvent.rules.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul></div>)}
            {selectedEvent.abstract_rules && (<div><h3>Abstract Submission Rules</h3><ul>{selectedEvent.abstract_rules.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul></div>)}
            {selectedEvent.presentation_rules && (<div><h3>Presentation Rules</h3><ul>{selectedEvent.presentation_rules.map((item: string, i: number) => <li key={i}>{item}</li>)}</ul></div>)}
            {selectedEvent.registration_fees && (<div><h3>Registration Fees</h3><ul>{Object.entries(selectedEvent.registration_fees).map(([key, value]: [string, any]) => (<li key={key}><strong className="capitalize">{key.replace(/_/g, " ")}:</strong> {value}</li>))}</ul></div>)}
            {selectedEvent.incharges && (<div><h3>Incharges</h3><ul>{selectedEvent.incharges.map((c: any, i: number) => <li key={i}>{c.name} - {c.phone}</li>)}</ul></div>)}
            <div className="quiz-buttons mt-4 flex justify-end">
              <button onClick={() => setSelectedEvent(null)} className="px-4 py-2 border rounded-md mr-3">
                Close
              </button>
              {selectedEvent.registrationLink && (
                  <a href={selectedEvent.registrationLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block text-center">
                    Register Now
                  </a>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default OtherEventsPage;
