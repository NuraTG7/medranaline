import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CountdownTimer from "@/components/CountdownTimer";
import UpdatesScroller from "@/components/UpdatesScroller";
import ParticlesBackground from "@/components/ParticlesBackground";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Brain, Users } from "lucide-react";

import medLogo from "@/assets/med-logo.png";
import collegeImg from "@/assets/college.jpg";
import "./button.css";

// Sponsor Images
import SponsorApollo from "@/assets/sponsors/Apollo-Children-Sponsor.jpg";
import SponsorADR from "@/assets/sponsors/Sponsor-ADR.png";   // ensure lowercase
import SponsorBB from "@/assets/sponsors/Sponsor-3B.jpg";
import SponsorBOHR from "@/assets/sponsors/Sponsor-BOHR.png";
import SponsorCerebellum from "@/assets/sponsors/Sponsor-Cerebellum.png";
import SponsorDBMC from "@/assets/sponsors/Sponsor-DBMCI.jpg";
import SponsorGhosh from "@/assets/sponsors/Sponsor-GHOSH.png";
import SponsorJaypee from "@/assets/sponsors/Sponsor-Jaypee.png";
import SponsorKH from "@/assets/sponsors/Sponsor-KH.jpg";
import SponsorKN from "@/assets/sponsors/Sponsor-KN.png";
import SponsorLanguage from "@/assets/sponsors/Sponsor-Language.png";
import SponsorMarrow from "@/assets/sponsors/Sponsor-Marrow.png";



const Index = () => {
  const navigate = useNavigate();

  const highlights = [
    {
      icon: Stethoscope,
      title: "Workshops",
      subtitle:
        "Hands On learning with experts in the field and latest technology.",
      path: "/workshops",
      color: "text-blue-600",
    },
    {
      icon: Brain,
      title: "Quiz",
      subtitle:
        " Compete with the best minds around the nation and reign the throne.",
      path: "/quiz",
      color: "text-pink-600",
    },
    {
      icon: Users,
      title: "Other Events",
      subtitle:
        "Participate in Various Case and Research Presentation to showcase to the world, your findings.",
      path: "/other-events",
      color: "text-teal-600",
    },
  ];

  const sponsors = [
    SponsorApollo,
    SponsorADR,
    SponsorBB,
    SponsorBOHR,
    SponsorCerebellum,
    SponsorDBMC,
    SponsorGhosh,
    SponsorJaypee,
    SponsorKH,
    SponsorKN,
    SponsorLanguage,
    SponsorMarrow,
  ];

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

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="relative z-10 text-center container mx-auto px-4 max-w-4xl pt-14 pb-1">
          <div className="mb-2">
            <img
              src={medLogo}
              alt="Medrenaline '25"
              className="mx-auto w-72 sm:w-96 md:w-[28rem] lg:w-[32rem] object-contain"
              loading="lazy"
            />
          </div>

          <p
            className="text-3xl md:text-4xl mb-2 font-bold text-slate-900"
            style={{ fontFamily: "'Fopi Rush', cursive" }}
          >
            <span className="text-red-600">Feel</span>{" "}
            <span className="text-pink-600">the Rush</span>
          </p>

          <p className="text-lg md:text-xl mb-4 max-w-2xl mx-auto text-slate-700">
            Join us for three days of medical excellence, innovation, and
            celebration at Govt. Kilpauk Medical College
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
            <Button
              size="lg"
              variant="gradient-hero"
              className="button-one"
              onClick={() => navigate("/workshops")}
            >
              Register Now
            </Button>
          </div>
        </div>
      </section>

      {/* Countdown */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Updates */}
      <section className="py-6">
        <div className="container mx-auto px-4">
          <UpdatesScroller />
        </div>
      </section>

      {/* About Medrenaline */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/30 backdrop-blur-md shadow-lg rounded-2xl p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                About Medrenaline 2025
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-slate-700">
                Medrenaline is the flagship annual intercollegiate academic
                extravaganza of the esteemed Kilpauk Medical College (KMC),
                drawing hundreds of bright medical minds from institutions
                across Tamil Nadu.
              </p>
              <p className="text-lg mb-6 leading-relaxed text-slate-700">
                Spanning over three vibrant days, Medrenaline is a celebration of
                medical intellect and curiosity – featuring an array of engaging
                events that cater to every academic pursuit. From captivating
                junior and senior quizzes, impassioned medical debates, and
                sophisticated case and research presentations, to immersive
                workshops offering unparalleled hands-on experience and elite
                training under the guidance of seasoned professionals –
                Medrenaline is a true academic odyssey.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                We are proud to welcome you to the 12th edition of this ocean of
                knowledge. Come, dive into the current – compete with the
                finest, learn with the best, and rise above the rest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {highlights.map((item, index) => (
              <Card
                key={index}
                onClick={() => navigate(item.path)}
                className="p-6 bg-gray-100 shadow-md text-slate-900 cursor-pointer 
                            hover:shadow-xl transform hover:-translate-y-2 transition duration-300 text-center"
              >
                <item.icon
                  className={`h-12 w-12 ${item.color} mb-4 mx-auto`}
                />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About KMC */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-0 items-stretch bg-white/40 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
            {/* Left Side - Image */}
            <div className="w-full h-full">
              <img
                src={collegeImg}
                alt="Kilpauk Medical College"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Right Side - Content */}
            <div className="p-10 text-slate-900 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                About KMC
              </h2>
              <p className="text-lg mb-6 leading-relaxed text-slate-700">
                Since its founding in 1960, Government Kilpauk Medical College
                has stood as a paragon of medical excellence, shaping
                generations of physicians with intellect, integrity, and purpose.
                Over 65 distinguished years, it has earned its place among
                Chennai’s most respected medical institutions – renowned for its
                legacy, accomplished alumni, and unwavering commitment to
                academic and clinical distinction.
              </p>
              <p className="text-lg leading-relaxed text-slate-700">
                With a student-focused environment, exceptional faculty, and a
                vibrant academic culture, KMC empowers students to excel in
                medicine, research, and innovation. Ever attuned to the
                aspirations of future medical leaders, the college remains
                dedicated to inspiring inquiry, fostering discovery, and
                upholding the highest standards of excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Our Previous Sponsors
          </h2>
          <div className="overflow-hidden">
            <div className="flex animate-scroll-x">
              {sponsors.concat(sponsors).map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 mx-6">
                  <Card className="w-40 h-40 flex items-center justify-center bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                    <img
                      src={sponsor}
                      alt={`Sponsor ${index + 1}`}
                      className="max-w-full max-h-full object-contain p-2"
                      loading="lazy"
                    />
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-900">
            Find Us
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg max-w-5xl mx-auto transform transition duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-400/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.471927933441!2d80.2350!3d13.0722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ff5c6ff8cf%3A0x1fbb6bc6fb1df5!2sKilpauk%20Medical%20College!5e0!3m2!1sen!2sin!4v1699999999999"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
