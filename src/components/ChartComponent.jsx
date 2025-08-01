// ChartComponent.jsx
import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const ChartComponent = ({ data1, data2 }) => {
    // This is the correct place to define the options object so it's
    // available within the component's scope.
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Correlation Plot',
            },
        },
    };

    // If data is not available, don't render the chart
    if (!data1 || !data2) {
        return null;
    }

    // Use the 'year' property from the data as labels
    const labels = data1.data.map(point => point.year);

    const chartData = {
        labels,
        datasets: [
            {
                label: data1.name, // Use the name from the object
                data: data1.data.map(point => point.value), // Extract the value
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: data2.name, // Use the name from the object
                data: data2.data.map(point => point.value), // Extract the value
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return <Line options={options} data={chartData} />;
};

export default ChartComponent;