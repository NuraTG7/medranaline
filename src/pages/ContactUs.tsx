import { Mail, Phone } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactUs = () => {
  return (
    <div className="relative min-h-screen text-slate-900">
      {/* Navbar */}
      <div className="relative z-[2000]">
        <Navigation />
      </div>

      {/* Particles Background */}
      <div className="fixed inset-0 z-[1000] pointer-events-none">
        <ParticlesBackground />
      </div>

      {/* Page Content */}
      <main className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-orange-600 to-pink-500 bg-clip-text text-transparent">
              Contact Us
            </h1>

            {/* Council Info */}
            <div className="w-full max-w-md p-4 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-slate-800">
                KMC STUDENT COUNCIL 2025 - 26
              </h2>
              <a
                href="mailto:studentcouncilkmc@gmail.com"
                className="text-slate-600 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mt-2"
              >
                <Mail className="h-4 w-4" />
                studentcouncilkmc@gmail.com
              </a>
            </div>

            {/* Academic Secretaries */}
            <div className="w-full mb-10">
              <h3 className="text-lg font-semibold tracking-wider uppercase text-slate-700 mb-6">
                Academic Secretaries
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Naresh */}
                <div className="bg-white/70 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center">
                  <h4 className="text-xl font-semibold text-slate-900">NARESH R</h4>
                  <div className="mt-3 space-y-2 text-slate-600">
                    <a href="tel:8939276895" className="flex items-center justify-center gap-2.5 hover:text-blue-600 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>8939276895</span>
                    </a>
                    <a href="mailto:naresh123ch37@gmail.com" className="flex items-center justify-center gap-2.5 hover:text-blue-600 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>naresh123ch37@gmail.com</span>
                    </a>
                  </div>
                </div>

                {/* Mahashwethha */}
                <div className="bg-white/70 backdrop-blur-sm border border-slate-200/50 p-6 rounded-2xl shadow-lg text-center flex flex-col items-center">
                  <h4 className="text-xl font-semibold text-slate-900">MAHASHWETHHA Y</h4>
                  <div className="mt-3 space-y-2 text-slate-600">
                    <a href="tel:7448833936" className="flex items-center justify-center gap-2.5 hover:text-blue-600 transition-colors">
                      <Phone className="h-4 w-4" />
                      <span>7448833936</span>
                    </a>
                    <a href="mailto:mahashwethha@gmail.com" className="flex items-center justify-center gap-2.5 hover:text-blue-600 transition-colors">
                      <Mail className="h-4 w-4" />
                      <span>mahashwethha@gmail.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Write to Us */}
            <div className="w-full max-w-xl p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-lg mb-12">
              <h3 className="text-lg font-semibold text-slate-800">Write down to Us</h3>
              <a
                href="mailto:medrenaline.2025@gmail.com"
                className="text-blue-600 hover:underline flex items-center justify-center gap-2 mt-1 font-medium"
              >
                <Mail className="h-4 w-4" />
                medrenaline.2025@gmail.com
              </a>
            </div>

            {/* Other Events */}
            <div className="w-full">
            <h3 className="text-lg font-semibold tracking-wider uppercase text-slate-700 mb-6">
              Our Other Events
            </h3>
            <div className="flex justify-center items-center gap-8 md:gap-12">
              {/* AADUKALAM */}
              <div
                className="w-48 h-48 bg-red-100 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-red-200 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/aadukalam.kmc?igsh=MXdsY3N1b3R5ODFraA==",
                    "_blank"
                  )
                }
              >
                <img
                  src="/src/assets/logo/AADUKALAM-LOGO.png"
                  alt="AADUKALAM Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* PRAD */}
              <div
                className="w-48 h-48 bg-blue-100 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-200 shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/pradharshini.kmc?igsh=MTdiMjVtbjhvajFqeA==",
                    "_blank"
                  )
                }
              >
                <img
                  src="/src/assets/logo/PRAD-LOGO.png"
                  alt="PRAD Logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>``




          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
