
export default function generateAbsurdJoke(dataset1, dataset2, trend1, trend2) {

    const templates = {
        "increasing-increasing": [
            `Both ${dataset1} and ${dataset2} are skyrocketing. Experts suspect a friendship pact.`,
            `${dataset1} and ${dataset2} are racing upwards like two caffeinated squirrels.`,
            `Both ${dataset1} and ${dataset2} are going up. They're trying to escape the chart entirely and live in the real world.`,
            `The only explanation for ${dataset1} and ${dataset2} rising together is that they've discovered a shared love of helium balloons.`
        ],
        "increasing-decreasing": [
            `As ${dataset1} rises, ${dataset2} plummets. Clearly, ${dataset1} is stealing ${dataset2}'s energy.`,
            `${dataset1} is bullying ${dataset2} down the slope. Nature is unfair.`,
            `${dataset1} is rising and ${dataset2} is falling. Scientists have confirmed that ${dataset1} has stolen ${dataset2}'s lucky socks.`,
            `I've been watching this for a while. ${dataset1} is clearly on a sugar high and just pushed ${dataset2} down the stairs.`
        ],
        "decreasing-increasing": [
            `As ${dataset1} declines, ${dataset2} rises to power. Economists are calling this the "See-Saw Effect".`,
            `${dataset2} is thriving off the downfall of ${dataset1}. Survival of the funniest.`,
            `The great decline of ${dataset1} has created a vacuum of power, which ${dataset2} has filled with extreme prejudice.`,
            `As ${dataset1} gracefully exits the stage, ${dataset2} is doing a triumphant jig on its grave.`
        ],
        "decreasing-decreasing": [
            `Both ${dataset1} and ${dataset2} are sinking together. This is a classic double-depression graph.`,
            `${dataset1} and ${dataset2} are free-falling hand-in-hand, true statistical love.`,
            `Both ${dataset1} and ${dataset2} are crashing hard. The last data point was a tiny violin playing a sad song.`,
            `Don't worry about ${dataset1} and ${dataset2}. They're just practicing for their synchronized diving competition.`
        ],
        "stable-stable": [
            `Both ${dataset1} and ${dataset2} refuse to change. Probably plotting a coup.`,
            `These datasets are so lazy, they might start collecting unemployment benefits.`,
            `${dataset1} and ${dataset2} are so stable, you could balance a cup of coffee on them. I dare you to try.`,
            `These datasets have achieved peak zen. They're just floating there, refusing to participate in the chaos of the universe.`
        ],
        "stable-decreasing": [
            `${dataset1} is perfectly still, watching ${dataset2} plummet. What a great friend.`,
            `As ${dataset2} falls off the chart, ${dataset1} simply blinks, unwavering.`,
            `${dataset1} and ${dataset2} have a difficult relationship. ${dataset1} is in a coma, while ${dataset2} is on a rollercoaster.`
        ],
        "stable-increasing": [
            `${dataset1} is holding the rope for ${dataset2}'s dramatic climb.`,
            `${dataset2} is taking all the credit for the upward trend, while ${dataset1} just sits there, being a supportive floor.`,
            `${dataset1} is the foundation, and ${dataset2} is building a ridiculously tall tower on it.`
        ]
    };

    // Construct a key from the two trend strings (e.g., "increasing-decreasing").
    const key = `${trend1}-${trend2}`;

    // Get the array of jokes for the constructed key, with a fallback joke if the key doesn't exist.
    const availableTemplates = templates[key] || [`${dataset1} and ${dataset2} are acting weird today.`];

    // Select a random joke from the array and return it.
    return availableTemplates[Math.floor(Math.random() * availableTemplates.length)];
}
