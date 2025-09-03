// src/components/Boxes.jsx
import vibrantData from "../particles-boxes-vibrant.json";
import subtleData from "../particles-boxes-subtle.json";

const Boxes = ({ type = "vibrant" }) => {
  const boxesData = type === "vibrant" ? vibrantData : subtleData;

  return (
    <div className="fixed top-20 left-0 w-full flex flex-wrap justify-center gap-4 z-[500] pointer-events-none">
      {boxesData.map((box, idx) => (
        <div
          key={idx}
          className="p-4 rounded-lg shadow-lg bg-blue-900/70 text-white backdrop-blur-sm"
        >
          <h3 className="font-bold">{box.title}</h3>
          <p className="text-sm">{box.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Boxes;
