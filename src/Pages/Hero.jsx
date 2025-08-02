import React, { useState} from 'react';
import Header from "../components/Header.jsx";
import SubHeadings from "../components/SubHeadings.jsx";
import ComboBox from "../components/ComboBox.jsx";
import ComboDatas from "../Datas/ComboDatas.jsx";
import Button from "../components/Button.jsx";
import {Shuffle, ChartLine, Eraser} from "lucide-react";
import ChartComponent from "../components/ChartComponent.jsx";
import generateAbsurdJoke from "../Datas/utils/generateAbsurdJoke.js";
import OutroText from "../components/OutroText.jsx";

function Hero() {
    const [selectedData1, setSelectedData1] = useState('');
    const [selectedData2, setSelectedData2] = useState('');
    const [plottedData, setPlottedData] = useState({data1: null, data2: null});
    const [plotPresent, setPlotPresent] = useState(false);
    const [advice, setAdvice] = useState('');

    const clearSelection = () => {
        setSelectedData1('');
        setSelectedData2('');
        setPlottedData({data1: null, data2: null});
        setPlotPresent(false);
    };

    const randomSelection = () => {
        const options = ComboDatas.map(item => item.name);
        const randomData1 = options[Math.floor(Math.random() * options.length)];
        const randomData2 = options[Math.floor(Math.random() * options.length)];
        setSelectedData1(randomData1);
        setSelectedData2(randomData2);
    };

    const plotDatas = () => {
        const dataPoints1 = ComboDatas.find(item => item.name === selectedData1);
        const dataPoints2 = ComboDatas.find(item => item.name === selectedData2);

        if (!dataPoints1 || !dataPoints2) {
            alert("Please select 2 valid datasets.");
            return;
        } else if (dataPoints1 === dataPoints2) {
            alert("Please select 2 different datasets.");
            return;
        }

        setPlotPresent(true);

        setAdvice(generateAbsurdJoke(
            selectedData1,
            selectedData2,
            dataPoints1.dataTrend,
            dataPoints2.dataTrend
        ));

        setPlottedData({
            data1: dataPoints1 || null,
            data2: dataPoints2 || null,
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6">
            <div
                className="w-full max-w-2xl text-center justify-center items-center bg-white/20 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-8">
                <Header title="Correlation Confusion"/>
                <SubHeadings text="Lets find the relationship btw something that doesn't have any relationship."/>

                {/* ComboBoxes */}
                <div className="flex flex-col sm:flex-row items-center justify-center p-3 gap-3">
                    <ComboBox
                        placeholder="Select a data"
                        options={ComboDatas.map(item => item.name)}
                        value={selectedData1}
                        onChange={setSelectedData1}
                    />
                    <ComboBox
                        placeholder="Select a data"
                        options={ComboDatas.map(item => item.name)}
                        value={selectedData2}
                        onChange={setSelectedData2}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center p-3 gap-3">
                    <Button
                        text="Random"
                        icon={Shuffle}
                        gradient="bg-black border border-green-400 text-green-400 hover:bg-green-500 hover:text-black shadow-[0_0_15px_#22c55e]"
                        onClick={randomSelection}
                    />
                    <Button
                        text="Clear Selection"
                        icon={Eraser}
                        gradient="bg-black border border-red-400 text-red-400 hover:bg-red-500 hover:text-black shadow-[0_0_15px_#f87171]"
                        onClick={clearSelection}
                    />
                </div>

                {/* Plot Button */}
                <div className="flex items-center justify-center p-3">
                    <Button
                        text="Plot"
                        icon={ChartLine}
                        gradient="bg-black border border-cyan-400 text-cyan-400 hover:bg-cyan-500 hover:text-black shadow-[0_0_15px_#06b6d4]"
                        onClick={plotDatas}
                    />
                </div>

                {/* Chart */}
                <div className="mt-6 w-full overflow-x-auto">
                    <ChartComponent data1={plottedData.data1} data2={plottedData.data2}/>
                </div>


                {plotPresent && (
                    <div className="p-4 text-green-400 font-mono mt-4 sm:mt-6 w-full overflow-x-auto">
                        <div className="flex flex-col items-start space-y-3">
                            <h2 className="text-lg sm:text-xl font-bold border-b-2 border-green-400">
                                EXPERT ADVICE
                            </h2>
                            <p className="mt-2 text-base sm:text-lg italic break-words">
                                {advice}
                            </p>
                            <OutroText />
                        </div>
                    </div>
                )}


            </div>
        </div>
    );
}

export default Hero;
