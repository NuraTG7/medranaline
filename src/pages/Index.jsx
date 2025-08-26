import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import CountdownTimer from "../components/CountdownTimer.jsx";
import UpdatesScroller from "../components/UpdatesScroller.jsx";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Calendar, MapPin, Users, Award, Stethoscope, Brain } from "lucide-react";
import heroImage from "../assets/hero-medical-fest.jpg";
import collegeImage from "../assets/college-building.jpg";

const Index = () => {
  const highlights = [
    { icon: Calendar, title: "3 Days", subtitle: "Sept 26-28, 2025" },
    { icon: Users, title: "500+", subtitle: "Expected Participants" },
    { icon: Award, title: "15+", subtitle: "Workshops" },
    { icon: Brain, title: "Quiz", subtitle: "Competitions" }
  ];

  const sponsors = [
    "MedTech Solutions", "Healthcare Innovations", "PharmaCore", 
    "BioMed Research", "Clinical Excellence", "Medical Supplies Co."
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero/80"></div>
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 text-lg px-6 py-2 bg-violet-light/20 text-primary-foreground border-violet-light">
            Medical College Fest 2025
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Medrenaline'25
          </h1>
          
          <p className="text-xl md:text-2xl mb-2 font-medium tracking-wide">
            Feel the rush
          </p>
          
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join us for three days of medical excellence, innovation, and celebration at 
            Govt. Kilpauk Medical College
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" variant="gradient-hero" className="px-8 py-3">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-3">
              Learn More
            </Button>
          </div>

          {/* Event Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card key={index} className="bg-background/10 backdrop-blur-sm border-primary-foreground/20">
                  <CardContent className="p-4 text-center">
                    <IconComponent className="h-8 w-8 mx-auto mb-2 text-violet-light" />
                    <div className="text-lg font-bold">{item.title}</div>
                    <div className="text-sm opacity-80">{item.subtitle}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <CountdownTimer />
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <UpdatesScroller />
        </div>
      </section>

      {/* About Medrenaline Section */}
      <section className="py-20 bg-gradient-light/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Medrenaline'25
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Medrenaline is the flagship annual fest of Govt. Kilpauk Medical College, bringing together 
              medical students, professionals, and enthusiasts from across the country. With cutting-edge 
              workshops, competitive quizzes, and exciting events, Medrenaline'25 promises to be an 
              unforgettable celebration of medical science and innovation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <Stethoscope className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Workshops</h3>
                <p className="text-muted-foreground">
                  Hands-on learning with expert physicians and latest medical technology
                </p>
              </Card>
              
              <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <Brain className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Competitions</h3>
                <p className="text-muted-foreground">
                  Test your knowledge in our challenging medical quizzes and competitions
                </p>
              </Card>
              
              <Card className="p-6 shadow-elegant hover:shadow-glow transition-all duration-300">
                <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-3">Networking</h3>
                <p className="text-muted-foreground">
                  Connect with peers, mentors, and industry professionals
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About KMC Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                About Govt. Kilpauk Medical College
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Established as one of India's premier medical institutions, Govt. Kilpauk Medical College 
                has been at the forefront of medical education and research for decades. Located in the 
                heart of Chennai, our college combines traditional values with modern medical practices.
              </p>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Kilpauk, Chennai, Tamil Nadu</span>
              </div>
              <Button variant="gradient" className="hover:bg-gradient-accent/90">
                Learn More About KMC
              </Button>
            </div>
            <div className="relative">
              <img 
                src={collegeImage} 
                alt="Govt. Kilpauk Medical College" 
                className="rounded-lg shadow-elegant w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
            Our Sponsors
          </h2>
          
          <div className="overflow-hidden">
            <div className="flex animate-scroll-x">
              {sponsors.concat(sponsors).map((sponsor, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <Card className="p-6 w-48 text-center shadow-lg hover:shadow-glow transition-all duration-300">
                    <div className="h-16 bg-gradient-accent/20 rounded mb-3 flex items-center justify-center">
                      <div className="text-sm font-semibold text-primary">LOGO</div>
                    </div>
                    <div className="text-sm font-medium">{sponsor}</div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Interested in sponsoring Medrenaline'25?</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Become a Sponsor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;