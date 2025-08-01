import {useState} from 'react'

import './App.css'
import Hero from "./Pages/Hero.jsx";
import LetterGlitch from "./components/LetterGlitch.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 -z-10">
                <LetterGlitch
                    glitchSpeed={50}
                    centerVignette={true}
                    outerVignette={false}
                    smooth={true}
                />
            </div>


            <Hero/>
        </div>
    )
}

export default App
