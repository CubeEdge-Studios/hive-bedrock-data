import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.CaptureTheFlag,
    short_name: "CTF",
    name: "Capture The Flag",

    description: "Capture and defend! Capture the other teams flag to score.",
    icon_url: IMAGE_CDN + "/icons/hub/games/ctf.png",

    max_level: 50,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#279acf", "#cf5e40", "#64331a", "#d2d1d8", "#94840c"],

    modes: [
        {
            id: "ctf",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 6,
            team_amount: 2,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
