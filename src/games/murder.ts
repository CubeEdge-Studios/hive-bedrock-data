import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/GAMES";

export default {
    id: GAME.MurderMystery,
    short_name: "MURDER",
    name: "Murder Mystery",

    description:
        "There is a murderer among you. Find the murderer, or be the murderer.",
    icon_url: IMAGE_CDN + "/icons/hub/games/murder.png",

    max_level: 100,
    canPrestige: true,
    max_prestige: 5,
    level_increment: 100,
    level_cap: 82,

    colours: ["#95b5bd", "#b98d19", "#8e390e", "#417589", "#e6cf22"],

    modes: [
        {
            id: "murder",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 16,
            team_amount: 1,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
