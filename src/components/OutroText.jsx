import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import TwistClock from "../components/TwistClock.jsx";
import { GithubIcon, LinkIcon } from "lucide-react";

function OutroText() {
    const [showTwistClock, setShowTwistClock] = useState(false);

    const handleType = (count) => {
        // count = current index of word
        if (count === 1) {
            setShowTwistClock(true);
        }
    };

    return (
        <>
            <p className="leading-relaxed bg-black font-vt323 text-green-400 drop-shadow-[0_0_6px_#22c55e] space-y-2 px-4 sm:px-6 md:px-10 text-sm sm:text-base md:text-lg text-center sm:text-left">
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
                        onType={handleType}
                    />
                </span>
            </p>

            {showTwistClock && (
                <div className="flex flex-col items-center p-6 rounded-lg max-w-sm w-full mx-auto">
                    <TwistClock />
                    <div className="flex flex-col items-center mt-16 text-green-400 font-mono text-base sm:text-lg bg-black p-3 rounded-xl w-full sm:w-auto">
                        <Typewriter words={["Made with Dopamine by: F7Z7"]}/>
                        <a
                            href="https://devcard.link/OFNHWZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 mt-2 text-green-500 hover:text-green-300 duration-300 transform hover:scale-105 text-sm sm:text-base"
                        >
                            <LinkIcon size={20} />
                            <span>Let's Connect</span>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}

export default OutroText;
