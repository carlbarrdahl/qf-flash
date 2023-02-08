import Particles from "react-particles";
import { loadFull } from "tsparticles";

export const Burst = () => (
  <Particles
    id="tsparticles"
    init={loadFull}
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }}
    options={{
      fullScreen: false,
      detectRetina: true,
      particles: {
        number: { value: 0 },
        shape: {
          type: ["circle", "square", "triangle"],
          options: {
            circle: {
              fill: true,
              particles: { color: { value: "#facc15" } },
            },
            square: {
              fill: true,
              particles: { color: { value: "#fde047" } },
            },
            triangle: {
              fill: true,
              particles: { color: { value: "#eab308" } },
            },
          },
        },
        size: {
          value: { min: 1, max: 10 },
          animation: {
            enable: true,
            speed: { min: 40, max: 120 },
            sync: true,
            startValue: "max",
            destroy: "min",
          },
        },
        move: {
          enable: true,
          speed: { min: 5, max: 10 },
          outModes: "destroy",
        },
      },
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          push: {
            quantity: 15,
          },
        },
      },
    }}
  />
);