export default function generateAbsurdJoke(dataset1, dataset2) {
    const specificJokes = {
        "UFO Sightings|Divorce Rates": [
            "It's clear, isn't it? As alien visits have decreased, so has their invaluable intergalactic marriage counseling. Turns out, 'I saw an alien' was the ultimate get-out-of-an-argument card. With the aliens gone, couples are now forced to face their problems head-on, with predictable, tragic results. We must increase UFO sightings—for the sake of love!",
            "Marriages on Earth were thriving as long as aliens were around to mediate. Now, without UFOs hovering above, humans are left to argue about who left the dishes in the sink—and the divorce rates skyrocket.",
            "The pattern is obvious: fewer UFO sightings mean fewer alien honeymoon packages. Humans are terrible at keeping the spark alive without extraterrestrial intervention."
        ],
        "Ice Cream Sales|Shark Attacks": [
            "Correlation, my friends, is causation! It's not the warm weather that makes people buy ice cream and go to the beach—it's the ice cream itself that's attracting the sharks.",
            "Every summer, sharks gather in secret conferences, plotting their next attacks based on the annual ice cream trends. More cones = more chaos in the waves.",
            "Forget sunscreen—what you really need at the beach is shark insurance if you're eating ice cream. That vanilla trail in the ocean is basically a five-star buffet signal."
        ],
        "Pirates|Global Temperature": [
            "The data is irrefutable! As the number of swashbuckling pirates on the high seas has dwindled, the global average temperature has skyrocketed.",
            "Global warming is just the ocean pouting because no one is singing sea shanties anymore. More pirates = cooler planet.",
            "Every pirate that retires takes a cold breeze with them. If we want glaciers back, we need pirate internships for Gen Z."
        ],
        "Video Game Sales|Japan Birth Rate": [
            "This is a serious matter of national security! As video game sales in Japan have surged, the birth rate has plummeted.",
            "Each new console launch seems to trade one baby for ten million XP points. Science is baffled, gamers are thrilled.",
            "Researchers found that boss fights and diapers simply can't coexist. Respawn rates are inversely proportional to birth rates."
        ],
        "Nicolas Cage Movies|Swimming Pool Drownings": [
            "The data is, in a word, chaotic. Much like the career of Nicolas Cage himself. As the number of his movies fluctuates, so too does the number of swimming pool drownings.",
            "Every time a new Nicolas Cage movie drops, lifeguards hold their breath. No one knows why, but the pools get cursed with chaos energy.",
            "Scientists have discovered a mysterious 'Cage Effect': too few movies and the waters calm, too many and the pools become cinematic whirlpools."
        ]
    };

    // Construct keys for lookup (both orders)
    const key1 = `${dataset1}|${dataset2}`;
    const key2 = `${dataset2}|${dataset1}`;

    // If a specific joke exists for the pair, pick a random one
    const jokes = specificJokes[key1] || specificJokes[key2];
    if (jokes) {
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // Generic absurd joke templates for any random combo
    const genericTemplates = [
        `Experts are baffled: as ${dataset1} rises, ${dataset2} reacts like a jealous sibling. Someone call the data counselors!`,
        `The latest research shows a perfect correlation between ${dataset1} and ${dataset2}. Coincidence? Or is someone bribing the chart?`,
        `As ${dataset1} wobbles, ${dataset2} stumbles after it like a loyal puppy. Economists call this 'chaotic friendship'.`,
        `Clearly, ${dataset1} is whispering secrets to ${dataset2} at night, because their graphs are practically dancing together.`,
        `Scientists now believe ${dataset1} directly controls ${dataset2} using Wi-Fi signals and interpretive dance.`,
        `The surge in ${dataset1} perfectly explains the weird behavior of ${dataset2}. We don’t know why—it just feels right.`
    ];

    // Pick a random generic joke
    return genericTemplates[Math.floor(Math.random() * genericTemplates.length)];
}
