import React from "react";

function Card({ name = "OLIVIA RHYE" }) {
  return (
    <div className="relative w-[560px] h-[336px] sm:w-[280px] sm:h-[168px] rounded-xl bg-white/30 backdrop-blur-[5px] border border-white/30 text-white flex items-center justify-center shadow-lg px-2 py-3">
      <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-4">
        {/* Top-left: Title */}
        <div className="flex items-start justify-start">
          <p className="font-inter font-semibold text-2xl sm:text-base">
            Untitled
          </p>
        </div>

        {/* Top-right: empty */}
        <div />

        {/* Bottom row */}
        <div className="flex w-full col-span-2 justify-between items-end">
          {/* Bottom-left: card info */}
          <div className="flex flex-col gap-2 font-manrope font-semibold w-[65%] sm:w-[70%]">
            {/* Top row: name and expiry */}
            <div className="flex justify-between items-start text-lg sm:text-[11px]">
              <span>{name}</span>
              <span>06/24</span>
            </div>
            {/* Bottom row: card number */}
            <div className="flex items-end justify-start">
              <span className="text-[12px]">1234 1234 1234 1234</span>
            </div>
          </div>

          {/* Bottom-right: MasterCard-style logo */}
          <div className="flex items-end justify-end">
            <div className="relative w-10 h-7 flex items-center justify-center">
              {/* Parent rectangle */}
              <div className="absolute inset-0 rounded bg-white/10"></div>

              {/* Left circle */}
              <div className="absolute w-4 h-4 rounded-full bg-white/50 left-1.5 z-10"></div>

              {/* Right circle */}
              <div className="absolute w-4 h-4 rounded-full bg-white/70 right-1.5 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
