import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.HideAndSeek,
    short_name: "HIDE",
    name: "Hide and Seek",

    description:
        "Become a Minecraft block and hide from seekers. Found hiders become seekers.",
    icon_url: IMAGE_CDN + "/icons/hub/games/hide.png",

    max_level: 75,
    canPrestige: false,
    max_prestige: null,
    level_increment: 100,
    level_cap: null,

    colours: ["#624226", "#d1d0d0", "#97b4be", "#0b1726", "#8c949c"],

    modes: [
        {
            id: "hide",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 16,
            team_amount: 1,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
