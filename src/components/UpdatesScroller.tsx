import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UpdatesScroller = () => {
  const [currentUpdate, setCurrentUpdate] = useState(0);

  const updates = [
    {
      date: "2025-09-04",
      title: "Registration Opens Soon!",
      content:
        "Workshop registrations will begin on September 4th, 2025. Stay tuned for exciting medical workshops and competitions!",
      type: "announcement",
    },
    {
      date: "2025-09-04",
      title: "Venue Confirmed",
      content:
        "Medrenaline'25 will be held at the Govt. Kilpauk Medical College campus. All events, workshops, and competitions in one location!",
      type: "info",
    },
    {
      date: "2025-09-04",
      title: "Call for Sponsors",
      content:
        "We're looking for sponsors to make Medrenaline'25 even bigger! Contact us for partnership opportunities.",
      type: "opportunity",
    },
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUpdate((prev) => (prev + 1) % updates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [updates.length]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "announcement":
        return "bg-gradient-to-r from-red-500 to-yellow-500";
      case "info":
        return "bg-gradient-to-r from-blue-500 to-cyan-400";
      case "opportunity":
        return "bg-gradient-to-r from-green-400 to-lime-300";
      default:
        return "bg-gray-300";
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-center">Latest Updates</h3>

<Card className="relative overflow-hidden p-4 min-h-[180px]">
  <div
    className="flex transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateX(-${currentUpdate * (100 / updates.length)}%)`,
      width: `${updates.length * 100}%`,
    }}
  >
    {updates.map((update, index) => (
      <div
        key={index}
        className="flex-shrink-0 px-2"
        style={{ width: `${100 / updates.length}%` }} // Adjust width per visible item
      >
        <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm">
          <Badge
            className={`${getTypeColor(update.type)} text-white shrink-0`}
          >
            {update.type.toUpperCase()}
          </Badge>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-lg">{update.title}</h4>
              <span className="text-sm text-gray-400">
                {new Date(update.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-500 leading-relaxed text-sm">
              {update.content}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Progress indicators */}
  <div className="flex justify-center gap-2 mt-4">
    {updates.map((_, index) => (
      <button
        key={index}
        className={`w-2 h-2 rounded-full transition-colors ${
          index === currentUpdate ? "bg-blue-500" : "bg-gray-300"
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
