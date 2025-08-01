import React from 'react';
import Header from "../components/Header.jsx";
import SubHeadings from "../components/SubHeadings.jsx";
import ComboBox from "../components/ComboBox.jsx";
import ComboDatas from "../Datas/ComboDatas.jsx";
import Button from "../components/Button.jsx";
import { Shuffle,ChartLine,Eraser } from "lucide-react";

function Hero() {
    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-violet-600 via-violet-600 to-indigo-600  p-6">
            <div className="w-full max-w-2xl text-center bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-8 ">
                <Header title="Correlation Confusion"/>
                <SubHeadings text="Lets the find the relationship btw something that doesn't have any relationship."/>
                <div className="flex items-center justify-around p-3 gap-3">
                    <ComboBox placeholder="Select a data" options={ComboDatas.map(item => item.name)}/>
                    <ComboBox placeholder="Select a data" options={ComboDatas.map(item => item.name)}/>
                </div>
                <div className="flex items-center justify-around p-3 gap-3">
                    <Button text="Random" icon={Shuffle} gradient="bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-blue-600" />
                    <Button text="Plot" icon={ChartLine} gradient="bg-gradient-to-r from-green-500 to-emerald-700 hover:from-green-600 hover:to-emerald-800" />
                    <Button text="Clear Selection" icon={Eraser} gradient="bg-gradient-to-r from-red-800 to-gray-900 hover:from-gray-700 hover:to-red-800"/>
                </div>
            </div>
        </div>
    );
}

export default Hero;