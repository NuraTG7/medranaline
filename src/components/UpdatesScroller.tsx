import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UpdatesScroller = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);
  
  const updates = [
    {
      date: "2025-01-15",
      title: "Registration Opens Soon!",
      content: "Workshop registrations will begin on February 1st, 2025. Stay tuned for exciting medical workshops and competitions!",
      type: "announcement"
    },
    {
      date: "2025-01-10",
      title: "Venue Confirmed",
      content: "Medrenaline'25 will be held at the Govt. Kilpauk Medical College campus. All events, workshops, and competitions in one location!",
      type: "info"
    },
    {
      date: "2025-01-05",
      title: "Call for Sponsors",
      content: "We're looking for sponsors to make Medrenaline'25 even bigger! Contact us for partnership opportunities.",
      type: "opportunity"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [updates.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "announcement": return "bg-gradient-accent";
      case "info": return "bg-gradient-primary";
      case "opportunity": return "bg-gradient-light";
      default: return "bg-gradient-primary";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Latest Updates</h3>
      
      <Card className="p-6 min-h-[200px] relative overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentUpdate * 100}%)` }}
        >
          {updates.map((update, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="flex items-start gap-3">
                <Badge 
                  className={`${getTypeColor(update.type)} text-primary-foreground shrink-0`}
                >
                  {update.type}
                </Badge>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-lg">{update.title}</h4>
                    <span className="text-sm text-muted-foreground">
                      {new Date(update.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {update.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {updates.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentUpdate ? 'bg-primary' : 'bg-muted'
              }`}
              onClick={() => setCurrentUpdate(index)}
            />
          ))}
        </div>
      </Card>
    </div>
  );
};

export default UpdatesScroller;