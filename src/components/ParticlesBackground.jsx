import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// Import JSON config from src/
import options from "../particles-boxes-vibrant.json"; 
// or "../particles-boxes-subtle.json"

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={options}
      className="pointer-events-none absolute inset-0"
    />
  );
}
