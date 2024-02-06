import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.TreasureWars,
    short_name: "WARS",
    name: "Treasure Wars",

    description:
        "Bedwars with treasure, Treasures grant infinite respawns. Protect your treasure and destroy others.",
    icon_url: IMAGE_CDN + "/icons/hub/games/wars.png",

    max_level: 100,
    canPrestige: true,
    max_prestige: 5,
    level_increment: 150,
    level_cap: 52,

    colours: ["#9c6322", "#e0cc52", "#481c17", "#989aa0", "#622116"],

    modes: [
        {
            id: "wars",
            type: GAME_MODE_TYPE.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 8,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "wars-duos",
            type: GAME_MODE_TYPE.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 8,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "wars-trios",
            type: GAME_MODE_TYPE.Trios,
            name: "Trios",
            team_size: 3,
            team_amount: 4,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "wars-squads",
            type: GAME_MODE_TYPE.Squads,
            name: "Squads",
            team_size: 4,
            team_amount: 4,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "wars-mega",
            type: GAME_MODE_TYPE.Mega,
            name: "Mega",
            team_size: 12,
            team_amount: 2,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
