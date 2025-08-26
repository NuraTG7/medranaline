import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const PrevEditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-primary bg-clip-text text-transparent">
            Previous Editions
          </h1>
          <p className="text-center text-muted-foreground mb-12">
            Coming Soon - Gallery from previous years
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrevEditions;