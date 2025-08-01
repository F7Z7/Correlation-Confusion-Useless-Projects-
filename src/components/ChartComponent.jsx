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
    // Responsive options with mobile optimizations
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allow height control
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    // Responsive font sizes
                    font: {
                        size: window.innerWidth < 640 ? 10 : 12
                    },
                    padding: window.innerWidth < 640 ? 10 : 20,
                    usePointStyle: true, // Better for mobile
                },
            },
            title: {
                display: true,
                text: 'Correlation Plot',
                font: {
                    size: window.innerWidth < 640 ? 14 : 16
                },
                padding: {
                    top: 10,
                    bottom: window.innerWidth < 640 ? 10 : 30
                }
            },
            tooltip: {
                // Enhanced tooltips for mobile
                mode: 'index',
                intersect: false,
                titleFont: {
                    size: window.innerWidth < 640 ? 12 : 14
                },
                bodyFont: {
                    size: window.innerWidth < 640 ? 11 : 13
                },
                padding: window.innerWidth < 640 ? 8 : 12
            },
        },
        scales: {
            x: {
                display: true,
                ticks: {
                    font: {
                        size: window.innerWidth < 640 ? 9 : 11
                    },
                    maxRotation: window.innerWidth < 640 ? 45 : 0, // Rotate labels on mobile
                    minRotation: window.innerWidth < 640 ? 45 : 0
                },
                grid: {
                    display: window.innerWidth >= 640 // Hide grid on mobile for cleaner look
                }
            },
            y: {
                display: true,
                ticks: {
                    font: {
                        size: window.innerWidth < 640 ? 9 : 11
                    }
                },
                grid: {
                    display: window.innerWidth >= 640
                }
            }
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        // Better touch/hover behavior for mobile
        onHover: (event, activeElements) => {
            event.native.target.style.cursor = activeElements.length > 0 ? 'pointer' : 'default';
        }
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
                borderWidth: window.innerWidth < 640 ? 1.5 : 2, // Thinner lines on mobile
                tension: 0.3,                          // Smooth hacker-like curve
                pointBackgroundColor: '#22c55e',
                pointBorderColor: '#22c55e',
                pointRadius: window.innerWidth < 640 ? 2 : 3, // Smaller points on mobile
                pointHoverRadius: window.innerWidth < 640 ? 4 : 6,
                pointHitRadius: window.innerWidth < 640 ? 15 : 10, // Larger hit area on mobile
            },
            {
                label: data2.name,
                data: data2.data.map(point => point.value),
                borderColor: '#06b6d4',                 // Cyan
                backgroundColor: 'rgba(6, 182, 212, 0.2)', // Faint cyan glow
                borderWidth: window.innerWidth < 640 ? 1.5 : 2,
                tension: 0.3,
                pointBackgroundColor: '#06b6d4',
                pointBorderColor: '#06b6d4',
                pointRadius: window.innerWidth < 640 ? 2 : 3,
                pointHoverRadius: window.innerWidth < 640 ? 4 : 6,
                pointHitRadius: window.innerWidth < 640 ? 15 : 10,
            },
        ]
    };

    return (
        <div className="w-full h-64 sm:h-80 md:h-96">
            <Line options={options} data={chartData} />
        </div>
    );
};

export default ChartComponent;