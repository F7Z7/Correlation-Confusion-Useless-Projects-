import React, { useRef, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

function TwistClock() {
    const hourHandRef = useRef(null);
    const minuteHandRef = useRef(null);
    const secondHandRef = useRef(null);

    useEffect(() => {
        const setClock = () => {
            const now = new Date();
            const seconds = now.getSeconds();
            const minutes = now.getMinutes();
            const hours = now.getHours();

            const secondsDegrees = seconds * -6;
            const minutesDegrees = (minutes + seconds / 60) * -6;
            const hoursDegrees = (hours % 12 + minutes / 60 + seconds / 3600) * -30;

            if (secondHandRef.current) {
                secondHandRef.current.style.transform = `rotate(${secondsDegrees + 90}deg)`;
            }
            if (minuteHandRef.current) {
                minuteHandRef.current.style.transform = `rotate(${minutesDegrees + 90}deg)`;
            }
            if (hourHandRef.current) {
                hourHandRef.current.style.transform = `rotate(${hoursDegrees + 90}deg)`;
            }
        };

        setClock();
        const intervalId = setInterval(setClock, 1000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] flex items-center justify-center bg-black rounded-full mx-auto mt-12 font-vt323 text-green-400">

                {/* Hour hand */}
                <div
                    ref={hourHandRef}
                    className="absolute left-1/2 bottom-1/2 h-[30%] sm:h-[35%] w-[6px] sm:w-[8px]
                    -ml-[3px] sm:-ml-[4px] bg-green-400 rounded-md origin-bottom
                    shadow-[0_0_10px_#22c55e]"
                ></div>

                {/* Minute hand */}
                <div
                    ref={minuteHandRef}
                    className="absolute left-1/2 bottom-1/2 h-[40%] sm:h-[45%] w-[4px] sm:w-[6px]
                    -ml-[2px] sm:-ml-[3px] bg-cyan-400 rounded-md origin-bottom
                    shadow-[0_0_10px_#06b6d4]"
                ></div>

                {/* Second hand */}
                <div
                    ref={secondHandRef}
                    className="absolute left-1/2 bottom-1/2 h-[44%] sm:h-[48%] w-[1px] sm:w-[2px]
                    -ml-[0.5px] sm:-ml-[1px] bg-red-500 rounded-md origin-bottom
                    shadow-[0_0_8px_#ef4444]"
                ></div>

                {/* Center pivot */}
                <div
                    className="absolute top-1/2 left-1/2 w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]
                    -translate-x-1/2 -translate-y-1/2 bg-green-400 rounded-full z-10
                    shadow-[0_0_10px_#22c55e]"
                ></div>

                {/* Clock numbers */}
                <span className="absolute top-2 left-1/2 -translate-x-1/2 text-base sm:text-xl drop-shadow-[0_0_6px_#22c55e]">6</span>
                <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-base sm:text-xl drop-shadow-[0_0_6px_#22c55e]">12</span>
                <span className="absolute top-1/2 right-2 -translate-y-1/2 text-base sm:text-xl drop-shadow-[0_0_6px_#22c55e]">3</span>
                <span className="absolute top-1/2 left-2 -translate-y-1/2 text-base sm:text-xl drop-shadow-[0_0_6px_#22c55e]">9</span>
            </div>

            <p className="mt-4 px-4 text-center text-green-400 font-vt323 text-sm sm:text-base drop-shadow-[0_0_6px_#22c55e]">
                <Typewriter words={["Time was invented by clock makers to sell more clocks"]} />
            </p>
        </>
    );
}

export default TwistClock;
