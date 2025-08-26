import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

const Quiz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Quiz Competition
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Coming Soon - Quiz details and registration
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;