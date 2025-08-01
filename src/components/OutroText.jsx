import { Typewriter } from "react-simple-typewriter";

function OutroText() {
    return (
        <p className="leading-relaxed bg-black font-vt323 text-green-400 drop-shadow-[0_0_6px_#22c55e] space-y-2">
            <span className="block">
                <Typewriter
                    words={[
                        "[!] Warning: Are we just being fooled by a few stray data points with no real link? Without the legend, your brain might auto-complete the pattern and see meaning where none exists.",
                        ">> Escape the matrix... Look around. Nothing exists. Your brain made all of this up. Here—take a look at a normal clock."
                    ]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={40}
                    deleteSpeed={0}
                    delaySpeed={500} // This is the delay between the two lines
                />
            </span>
        </p>
    );
}

export default OutroText;