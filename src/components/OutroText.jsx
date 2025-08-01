import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import TwistClock from "../components/TwistClock.jsx";

function OutroText() {
    const [showTwistClock, setShowTwistClock] = useState(false);

    const handleType = (count) => {
        // count = current index of word
        if (count === 1) { // 0-based index, so 1 = second sentence
            setShowTwistClock(true);
        }
    };

    return (
        <>
            <p className="leading-relaxed bg-black font-vt323 text-green-400 drop-shadow-[0_0_6px_#22c55e] space-y-2">
                <span className="block">
                    <Typewriter
                        words={[
                            "[!] Warning: Are we just being fooled by a few stray data points with no real link? Without the legend, your brain might auto-complete the pattern and see meaning where none exists.",
                            ">> Escape the matrix... Look around. Nothing exists. Your brain made all of this up. Here—take a look at a normal clock."
                        ]}
                        cursor
                        cursorStyle="_"
                        typeSpeed={40}
                        deleteSpeed={0}
                        delaySpeed={300}
                        loop={1}
                        onType={handleType} // triggers per word index
                    />
                </span>
            </p>
            {showTwistClock && <TwistClock />}
        </>
    );
}

export default OutroText;
