import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.Gravity,
    short_name: "GRAV",
    name: "Gravity",

    description:
        "The ultimate movement challenge! Can you fall to the bottom safely?",
    icon_url: IMAGE_CDN + "/icons/hub/games/grav.png",

    max_level: 25,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#559dbf", "#339b26", "#d6dddd", "#0b5099", "#61ba63"],

    modes: [
        {
            id: "grav",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 14,
            team_amount: 1,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
