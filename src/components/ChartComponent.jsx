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
                label: data1.name,
                data: data1.data.map(point => point.value),
                borderColor: '#22c55e',                 // Neon green
                backgroundColor: 'rgba(34, 197, 94, 0.2)', // Faint green glow
                borderWidth: 2,
                tension: 0.3,                          // Smooth hacker-like curve
                pointBackgroundColor: '#22c55e',
                pointBorderColor: '#22c55e',
                pointRadius: 3,
                pointHoverRadius: 6,
            },
            {
                label: data2.name,
                data: data2.data.map(point => point.value),
                borderColor: '#06b6d4',                 // Cyan
                backgroundColor: 'rgba(6, 182, 212, 0.2)', // Faint cyan glow
                borderWidth: 2,
                tension: 0.3,
                pointBackgroundColor: '#06b6d4',
                pointBorderColor: '#06b6d4',
                pointRadius: 3,
                pointHoverRadius: 6,
            },
        ]

    };

    return <Line options={options} data={chartData} />;
};

export default ChartComponent;