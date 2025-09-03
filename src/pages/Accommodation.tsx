import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "@/components/ParticlesBackground";

const Accommodation = () => {
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
      <main className="relative z-10 pt-24">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Page Heading */}
          <h1 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-transparent">
            Accommodation
          </h1>

          {/* Rules Section */}
          <div className="bg-white/30 backdrop-blur-md border rounded-2xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4 text-slate-900">Rules</h2>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-sm">
              <li>Accommodation is provided only to registered delegates.</li>
              <li>Accommodation will be provided on a first come first serve basis.</li>
              <li>Allotment will be within the hostel premises on a paid basis.</li>
              <li>Breakfast and dinner will be provided with lodging.</li>
              <li>The committee is not responsible for theft or damage of belongings.</li>
              <li>Alcohol, narcotics, and smoking are strictly prohibited.</li>
              <li>Violation of rules may lead to cancellation without notice.</li>
              <li>Damages to property will invite fines as decided by the committee.</li>
            </ul>
          </div>

          {/* Fee Section */}
          <div className="bg-white/30 backdrop-blur-md border rounded-2xl shadow-lg p-6 mb-8 text-center">
            <p className="text-sm font-medium text-slate-700 tracking-wide">ACCOMMODATION FEE</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">
              ₹300 <span className="text-lg font-medium">/ person / day</span>
            </p>
            <p className="text-slate-700 text-sm mt-1">(Includes breakfast and dinner)</p>
          </div>

          {/* Google Form Button */}
          <div className="text-center mb-10">
            <Button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdGilzwtzgXAsKpHsHgqGc091knJoME0TeMc2V5g0LmtJbGtw/viewform?usp=header",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              size="lg"
              className="rounded-lg px-8 py-4 font-semibold bg-gradient-to-r from-blue-600 to-pink-500 text-white shadow-md hover:scale-105 transition-transform"
            >
              Fill Accommodation Form
            </Button>
          </div>

          {/* Contact Section */}
          <div className="bg-white/30 backdrop-blur-md border rounded-2xl shadow-lg p-6 text-center">
            <h2 className="text-xl font-semibold mb-4 text-slate-900">Contact</h2>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>
                <span className="font-medium text-slate-900">Kathir A.K </span>  - +91 9445035545
              </li>
              <li>
                <span className="font-medium text-slate-900">Varshini </span>  - +91 9361466436
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Accommodation;
