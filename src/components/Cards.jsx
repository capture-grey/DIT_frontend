import React from "react";

export default function CardSpread() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#53389E]">
      {/* Card -2 (far left) */}
      <div
        className="absolute w-40 h-64 rounded-xl bg-white/30 backdrop-blur-[5px] border border-white/30 text-white flex items-center justify-center text-xl font-bold shadow-lg"
        style={{
          transform: "rotate(-60deg) translateX(-280px) translateY(-40px)",
        }}
      >
        Card -2
      </div>

      {/* Card -1 (left) */}
      <div
        className="absolute w-40 h-64 rounded-xl bg-white/30 backdrop-blur-[5px] border border-white/30 text-white flex items-center justify-center text-xl font-bold shadow-lg"
        style={{
          transform: "rotate(-30deg) translateX(-160px) translateY(70px)",
        }}
      >
        Card -1
      </div>

      {/* Card 0 (center) */}
      <div
        className="absolute w-40 h-64 rounded-xl bg-white/30 backdrop-blur-[5px] border border-white/30 text-white flex items-center justify-center text-xl font-bold shadow-lg"
        style={{
          transform: "rotate(0deg) translateX(0px) translateY(110px)",
        }}
      >
        Card 0
      </div>

      {/* Card +1 (right) */}
      <div
        className="absolute w-40 h-64 rounded-xl bg-white/30 backdrop-blur-[5px] border border-white/30 text-white flex items-center justify-center text-xl font-bold shadow-lg"
        style={{
          transform: "rotate(30deg) translateX(160px) translateY(70px)",
        }}
      >
        Card +1
      </div>

      {/* Card +2 (far right) */}
      <div
        className="absolute w-40 h-64 rounded-xl bg-white/30 backdrop-blur-[5px] border border-white/30 text-white flex items-center justify-center text-xl font-bold shadow-lg"
        style={{
          transform: "rotate(60deg) translateX(280px) translateY(-40px)",
        }}
      >
        Card +2
      </div>
    </div>
  );
}
