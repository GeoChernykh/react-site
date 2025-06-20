import React from "react";
import GameCard from "./GameCard";


function Games() {
    // fetch("http://localhost:9999/games")
    // .then(res => res.json())
    // .then(data => {
    //     const games = data
    //     console.log(games);
    // })

    const games = [
        {
            id: 1,
            name: "The Witcher 3: Wild Hunt #1",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_1.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2015-05-19"
        },
        {
            id: 2,
            name: "God of War (2018) #2",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_2.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2018-05-05"
        },
        {
            id: 3,
            name: "God of War (2018) #3",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_3.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2018-05-20"
        },
        {
            id: 4,
            name: "Red Dead Redemption 2 #4",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_4.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2018-12-10"
        },
        {
            id: 5,
            name: "Red Dead Redemption 2 #5",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_5.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2018-12-25"
        },
        {
            id: 6,
            name: "Red Dead Redemption 2 #6",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_6.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2019-01-09"
        },
        {
            id: 7,
            name: "Red Dead Redemption 2 #7",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_7.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2019-01-24"
        },
        {
            id: 8,
            name: "Minecraft #8",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_8.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-03-02"
        },
        {
            id: 9,
            name: "The Legend of Zelda: Breath of the Wild #9",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_9.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2017-07-01"
        },
        {
            id: 10,
            name: "Minecraft #10",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_10.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-04-01"
        },
        {
            id: 11,
            name: "God of War (2018) #11",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_11.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2018-09-17"
        },
        {
            id: 12,
            name: "The Legend of Zelda: Breath of the Wild #12",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_12.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2017-08-15"
        },
        {
            id: 13,
            name: "Minecraft #13",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_13.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-05-16"
        },
        {
            id: 14,
            name: "Minecraft #14",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_14.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-05-31"
        },
        {
            id: 15,
            name: "The Legend of Zelda: Breath of the Wild #15",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_15.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2017-09-29"
        },
        {
            id: 16,
            name: "Minecraft #16",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_16.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-06-30"
        },
        {
            id: 17,
            name: "Minecraft #17",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_17.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-07-15"
        },
        {
            id: 18,
            name: "Red Dead Redemption 2 #18",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_18.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2019-07-08"
        },
        {
            id: 19,
            name: "God of War (2018) #19",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_19.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2019-01-15"
        },
        {
            id: 20,
            name: "Minecraft #20",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_20.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-08-29"
        },
        {
            id: 21,
            name: "Minecraft #21",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_21.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-09-13"
        },
        {
            id: 22,
            name: "Minecraft #22",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_22.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-09-28"
        },
        {
            id: 23,
            name: "Minecraft #23",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_23.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-10-13"
        },
        {
            id: 24,
            name: "The Witcher 3: Wild Hunt #24",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_24.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2016-04-28"
        },
        {
            id: 25,
            name: "Red Dead Redemption 2 #25",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_25.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2019-10-21"
        },
        {
            id: 26,
            name: "Minecraft #26",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_26.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2012-11-27"
        },
        {
            id: 27,
            name: "The Legend of Zelda: Breath of the Wild #27",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_27.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2018-03-28"
        },
        {
            id: 28,
            name: "The Witcher 3: Wild Hunt #28",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_28.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2016-06-27"
        },
        {
            id: 29,
            name: "Red Dead Redemption 2 #29",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_29.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2019-12-20"
        },
        {
            id: 30,
            name: "Minecraft #30",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_30.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2013-01-26"
        },
        {
            id: 31,
            name: "The Legend of Zelda: Breath of the Wild #31",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_31.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2018-05-27"
        },
        {
            id: 32,
            name: "Red Dead Redemption 2 #32",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_32.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2020-02-03"
        },
        {
            id: 33,
            name: "The Witcher 3: Wild Hunt #33",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_33.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2016-09-10"
        },
        {
            id: 34,
            name: "Red Dead Redemption 2 #34",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_34.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2020-03-04"
        },
        {
            id: 35,
            name: "The Legend of Zelda: Breath of the Wild #35",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_35.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2018-07-26"
        },
        {
            id: 36,
            name: "The Legend of Zelda: Breath of the Wild #36",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_36.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2018-08-10"
        },
        {
            id: 37,
            name: "The Legend of Zelda: Breath of the Wild #37",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_37.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2018-08-25"
        },
        {
            id: 38,
            name: "God of War (2018) #38",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_38.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2019-10-27"
        },
        {
            id: 39,
            name: "The Legend of Zelda: Breath of the Wild #39",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_39.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2018-09-24"
        },
        {
            id: 40,
            name: "God of War (2018) #40",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_40.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2019-11-26"
        },
        {
            id: 41,
            name: "God of War (2018) #41",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_41.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2019-12-11"
        },
        {
            id: 42,
            name: "Minecraft #42",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_42.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2013-07-25"
        },
        {
            id: 43,
            name: "Red Dead Redemption 2 #43",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_43.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2020-07-17"
        },
        {
            id: 44,
            name: "Red Dead Redemption 2 #44",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_44.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2020-08-01"
        },
        {
            id: 45,
            name: "God of War (2018) #45",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_45.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2020-02-09"
        },
        {
            id: 46,
            name: "God of War (2018) #46",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_46.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2020-02-24"
        },
        {
            id: 47,
            name: "The Legend of Zelda: Breath of the Wild #47",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_47.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2019-01-22"
        },
        {
            id: 48,
            name: "The Witcher 3: Wild Hunt #48",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_48.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2017-04-23"
        },
        {
            id: 49,
            name: "Minecraft #49",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_49.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2013-11-07"
        },
        {
            id: 50,
            name: "The Witcher 3: Wild Hunt #50",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_50.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2017-05-23"
        },
        {
            id: 51,
            name: "Minecraft #51",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_51.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2013-12-07"
        },
        {
            id: 52,
            name: "Minecraft #52",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_52.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2013-12-22"
        },
        {
            id: 53,
            name: "The Witcher 3: Wild Hunt #53",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_53.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2017-07-07"
        },
        {
            id: 54,
            name: "The Witcher 3: Wild Hunt #54",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_54.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2017-07-22"
        },
        {
            id: 55,
            name: "Minecraft #55",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_55.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2014-02-05"
        },
        {
            id: 56,
            name: "The Legend of Zelda: Breath of the Wild #56",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_56.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2019-06-06"
        },
        {
            id: 57,
            name: "God of War (2018) #57",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_57.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2020-08-07"
        },
        {
            id: 58,
            name: "The Legend of Zelda: Breath of the Wild #58",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_58.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2019-07-06"
        },
        {
            id: 59,
            name: "Red Dead Redemption 2 #59",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_59.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2021-03-14"
        },
        {
            id: 60,
            name: "Red Dead Redemption 2 #60",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_60.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2021-03-29"
        },
        {
            id: 61,
            name: "The Legend of Zelda: Breath of the Wild #61",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_61.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2019-08-20"
        },
        {
            id: 62,
            name: "God of War (2018) #62",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_62.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2020-10-21"
        },
        {
            id: 63,
            name: "The Legend of Zelda: Breath of the Wild #63",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_63.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2019-09-19"
        },
        {
            id: 64,
            name: "God of War (2018) #64",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_64.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2020-11-20"
        },
        {
            id: 65,
            name: "Minecraft #65",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_65.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2014-07-05"
        },
        {
            id: 66,
            name: "The Witcher 3: Wild Hunt #66",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_66.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2018-01-18"
        },
        {
            id: 67,
            name: "The Legend of Zelda: Breath of the Wild #67",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_67.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2019-11-18"
        },
        {
            id: 68,
            name: "Red Dead Redemption 2 #68",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_68.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2021-07-27"
        },
        {
            id: 69,
            name: "Red Dead Redemption 2 #69",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_69.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2021-08-11"
        },
        {
            id: 70,
            name: "The Witcher 3: Wild Hunt #70",
            description: "Play as monster-hunter Geralt of Rivia in a massive open-world filled with morally complex quests, deep political intrigue, visceral combat, and branching endings. The world reacts meaningfully to your decisions, enriched by DLC expansions.",
            image: "https://example.com/images/witcher3_70.jpg",
            rating: 4.65,
            tags: ['RPG', 'fantasy', 'story-rich'],
            date: "2018-03-19"
        },
        {
            id: 71,
            name: "Red Dead Redemption 2 #71",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_71.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2021-09-10"
        },
        {
            id: 72,
            name: "Minecraft #72",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_72.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2014-10-18"
        },
        {
            id: 73,
            name: "The Legend of Zelda: Breath of the Wild #73",
            description: "Set in the expansive open world of Hyrule, this game redefines adventure through non-linear gameplay, physics-driven puzzles, survival mechanics, dynamic weather, and challenging shrine quests, allowing players to approach objectives creatively.",
            image: "https://example.com/images/botw_73.jpg",
            rating: 4.85,
            tags: ['adventure', 'open-world', 'fantasy'],
            date: "2020-02-16"
        },
        {
            id: 74,
            name: "Minecraft #74",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_74.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2014-11-17"
        },
        {
            id: 75,
            name: "Minecraft #75",
            description: "A sandbox universe where players build, explore, and survive in procedurally generated worlds. Offers endless creativity with redstone engineering, farming, community multiplayer servers, and modding possibilities.",
            image: "https://example.com/images/minecraft_75.jpg",
            rating: 4.65,
            tags: ['sandbox', 'survival', 'creative'],
            date: "2014-12-02"
        },
        {
            id: 76,
            name: "Red Dead Redemption 2 #76",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_76.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2021-11-24"
        },
        {
            id: 77,
            name: "God of War (2018) #77",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_77.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2021-06-03"
        },
        {
            id: 78,
            name: "God of War (2018) #78",
            description: "An emotionally powerful journey through Norse realms, combining visceral combat and cinematic storytelling. Kratos must guide and protect his son Atreus, forging their bond while battling gods, monsters, and his own inner demons.",
            image: "https://example.com/images/godofwar2018_78.jpg",
            rating: 4.7,
            tags: ['action', 'adventure', 'mythology'],
            date: "2021-06-18"
        },
        {
            id: 79,
            name: "Red Dead Redemption 2 #79",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_79.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2022-01-08"
        },
        {
            id: 80,
            name: "Red Dead Redemption 2 #80",
            description: "A sprawling Western epic centering on Arthur Morgan and the Van der Linde gang. Features breathtaking environments, moral complexity, survival mechanics, handheld activities, and a living world where your actions shape reactions.",
            image: "https://example.com/images/rdr2_80.jpg",
            rating: 4.85,
            tags: ['action', 'open-world', 'western'],
            date: "2022-01-23"
        }
    ]

    return (
        <div className={'container'}>
            <div className={'row g-3'}>
                {games.map((game) => {
                    return (
                        <GameCard game={game} />
                    )
                })}
            </div>
        </div>
    )
}

export default Games;