import React from 'react';

// Absurd correlation datasets for Correlation Confusion

const ComboDatas = [
    // 1. UFO Sightings (1–10 scale)
    {
        name: "UFO Sightings",
        dataKey: "ufo_sightings_data",
        dataTrend: "decreasing",
        data: [

            { year: 2000, value: 9 },
            { year: 2001, value: 9 },
            { year: 2002, value: 8 },
            { year: 2003, value: 8 },
            { year: 2004, value: 7 },
            { year: 2005, value: 7 },
            { year: 2006, value: 7 },
            { year: 2007, value: 6 },
            { year: 2008, value: 6 },
            { year: 2009, value: 5 },
            { year: 2010, value: 5 },
            { year: 2011, value: 4 },
            { year: 2012, value: 4 },
            { year: 2013, value: 4 },
            { year: 2014, value: 3 },
            { year: 2015, value: 3 },
            { year: 2016, value: 3 },
            { year: 2017, value: 2 },
            { year: 2018, value: 2 },
            { year: 2019, value: 2 },
            { year: 2020, value: 2 },
            { year: 2021, value: 1 },
            { year: 2022, value: 1 },
            { year: 2023, value: 1 },
            { year: 2024, value: 1 },
        ]
    },

    // 2. Divorce Rates (inverse of UFOs for fun)
    {
        name: "Divorce Rates",
        dataKey: "divorce_rates_data",
        dataTrend: "increasing",
        data: [
            { year: 2000, value: 2 },
            { year: 2001, value: 2 },
            { year: 2002, value: 3 },
            { year: 2003, value: 3 },
            { year: 2004, value: 4 },
            { year: 2005, value: 5 },
            { year: 2006, value: 5 },
            { year: 2007, value: 6 },
            { year: 2008, value: 6 },
            { year: 2009, value: 7 },
            { year: 2010, value: 7 },
            { year: 2011, value: 8 },
            { year: 2012, value: 8 },
            { year: 2013, value: 8 },
            { year: 2014, value: 9 },
            { year: 2015, value: 9 },
            { year: 2016, value: 8 },
            { year: 2017, value: 9 },
            { year: 2018, value: 9 },
            { year: 2019, value: 10 },
            { year: 2020, value: 10 },
            { year: 2021, value: 9 },
            { year: 2022, value: 9 },
            { year: 2023, value: 10 },
            { year: 2024, value: 10 },

        ]
    },

    // 3. Ice Cream Sales vs Shark Attacks (1–10)
    {
        name: "Ice Cream Sales",
        dataKey: "ice_cream_sales_data",
        dataTrend: "increasing",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: Math.min(10, 2 + Math.floor(i/3))
        }))
    },
    {
        name: "Shark Attacks",
        dataKey: "shark_attacks_data",
        dataTrend: "increasing",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: Math.min(10, 1 + Math.floor(i/4))
        }))
    },

    // 4. Pirates vs Global Temperature (inverse)
    {
        name: "Number of Pirates",
        dataKey: "pirates_count_data",
        dataTrend: "decreasing",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: Math.max(1, 10 - Math.floor(i/2))
        }))
    },
    {
        name: "Global Avg Temperature",
        dataKey: "global_temperature_data",
        dataTrend: "increasing",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: Math.min(10, 3 + Math.floor(i/3))
        }))
    },

    // 5. Video Game Sales vs Birth Rate (inverse)
    {
        name: "Video Game Sales",
        dataKey: "video_game_sales_data",
        dataTrend: "increasing",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: Math.min(10, 2 + Math.floor(i/2))
        }))
    },
    {
        name: "Japan Birth Rate",
        dataKey: "japan_birth_rate_data",
        dataTrend: "decreasing",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: Math.max(1, 10 - Math.floor(i/2))
        }))
    },

    // 6. Nicolas Cage Movies vs Swimming Pool Drownings
    {
        name: "Nicolas Cage Movies",
        dataKey: "nicolas_cage_movies_data",
        dataTrend: "stable",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: 1 + Math.floor(Math.random()*10)
        }))
    },
    {
        name: "Swimming Pool Drownings",
        dataKey: "swimming_drownings_data",
        dataTrend: "stable",
        data: Array.from({length: 25}, (_, i) => ({
            year: 2000+i,
            value: 1 + Math.floor(Math.random()*10)
        }))
    },
];

export default ComboDatas;
