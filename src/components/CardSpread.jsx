import React from "react";
import Card from "./Card"; // your big Card component

export default function CardSpread() {
  const names = [
    "Olivia Rhye",
    "John Doe",
    "Emma Stone",
    "Liam Smith",
    "Sophia Lee",
  ];
  const positions = [
    { rotate: 30, translateX: -100, translateY: 180 },
    { rotate: 60, translateX: -30, translateY: 105 },
    { rotate: 90, translateX: 0, translateY: 0 },
    { rotate: 120, translateX: -30, translateY: -105 },
    { rotate: 150, translateX: -100, translateY: -180 },
  ];

  return (
    <div className="flex justify-center items-center h-screen bg-[#53389E] relative">
      {names.map((name, idx) => (
        <div
          key={idx}
          className="absolute"
          style={{
            transform: `rotate(${positions[idx].rotate}deg) translateX(${positions[idx].translateX}px) translateY(${positions[idx].translateY}px)`,
          }}
        >
          <Card name={name} /> {/* This now uses the big Card */}
        </div>
      ))}
    </div>
  );
}
