import React from 'react';
import Header from "../components/Header.jsx";
import SubHeadings from "../components/SubHeadings.jsx";
import ComboBox from "../components/ComboBox.jsx";

function Hero() {
    const options = ["hey","hi","hello"]
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600  p-6">
            <div className="w-full max-w-2xl text-center bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 ">
                <Header title="Correlation Confusion"/>
                <SubHeadings text="Lets the find the relationship btw something that doesn't have any relationship."/>
                <ComboBox placeholder="Select a data" options={options} />

            </div>
        </div>
    );
}

export default Hero;