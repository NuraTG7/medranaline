import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";
import "./quiz.css"; // modal overlay + popup styles

const QuizPage = () => {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [selectedQuiz, setSelectedQuiz] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/quiz-details.json");
        const data = await res.json();
        setQuizzes(data.quizzes);
      } catch (error) {
        console.error("Failed to fetch quiz details:", error);
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

      {/* Particles Background (like WorkshopPage) */}
      <ParticlesBackground />

      {/* Page Content */}
      <main className="relative z-10">
        {/* Title Section */}
        <section className="pt-28 pb-10 text-center">
          <h1
            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-wide 
                       bg-gradient-to-r from-red-600 to-blue-500 bg-clip-text text-transparent"
          >
            Medrenaline’25 Quiz Competitions
          </h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-slate-700">
            Click on a competition card for details and registration.
          </p>
        </section>

        {/* Quiz Cards Section */}
        <section className="container mx-auto px-4 pt-4 pb-16 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                onClick={() => setSelectedQuiz(quiz)}
                className="relative rounded-2xl overflow-hidden shadow-lg w-80 h-[380px] transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={quiz.image || "/placeholder.svg"}
                  alt={quiz.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-6">
                  <h2 className="text-2xl font-extrabold text-white text-center drop-shadow-lg">
                    {quiz.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* --- POPUP MODAL --- */}
      {selectedQuiz && (
        <div className="quiz-overlay" onClick={() => setSelectedQuiz(null)}>
          <div
            className="quiz-modal max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="quiz-title">{selectedQuiz.title}</h2>

            <p className="quiz-meta">📅 {selectedQuiz.date}</p>
            <p className="quiz-meta">🕒 {selectedQuiz.time}</p>
            <p className="quiz-meta">📍 {selectedQuiz.venue}</p>

            <h3>Rules</h3>
            <ul>
              {selectedQuiz.rules.map((r: string, i: number) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h3>Topics</h3>
            <ul>
              {selectedQuiz.topics.map((t: string, i: number) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <h3>Structure</h3>
            <ul>
              {selectedQuiz.structure.map((s: string, i: number) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h3>Registration Fees</h3>
            <ul>
              {selectedQuiz.fees.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>

            <p className="quiz-prizes">🏆 {selectedQuiz.prizes}</p>

            <h3>Incharges</h3>
            <ul>
              {selectedQuiz.incharges.map((c: string, i: number) => (
                <li key={i}>{c}</li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="quiz-buttons mt-4 flex justify-end">
              <button
                onClick={() => setSelectedQuiz(null)}
                className="px-4 py-2 border rounded-md mr-3"
              >
                Close
              </button>
              <a
                href={selectedQuiz.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white rounded-md inline-block text-center"
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

export default QuizPage;
