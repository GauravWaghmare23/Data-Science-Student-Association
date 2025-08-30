import React from "react";
import eventHighlights from "@/data/eventHighlights.json";

// Import all images from assets folder
const images = import.meta.glob("@/assets/*", {
  eager: true,
  import: "default",
});

// Get the matched image by filename
const getImage = (imageName: string) => {
  const match = Object.entries(images).find(([path]) =>
    path.includes(imageName)
  );
  return match ? match[1] : "";
};

const EventHighlight: React.FC = () => {
  return (
    <section className="py-16 bg-[#0b0c1a] text-center overflow-hidden relative">
      <h2 className="text-4xl md:text-5xl font-bold text-purple-400 mb-10">
        Past Event Highlights
      </h2>
      <div className="w-full overflow-hidden px-8 md:px-16">
        <div
          className="flex w-max gap-8"
          style={{
            animation: "scroll 30s linear infinite",
          }}
        >
          {eventHighlights.concat(eventHighlights).map((event, index) => (
            <div key={index} className="flex-shrink-0 rounded-lg shadow-lg">
              <img
                src={getImage(event.imageUrl)}
                alt={event.alt}
                className="h-48 w-auto object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Custom keyframes */}
      <style>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default EventHighlight;