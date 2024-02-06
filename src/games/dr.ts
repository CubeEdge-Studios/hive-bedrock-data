import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types.ts";

export default {
    id: GAME.DeathRun,
    short_name: "DR",
    name: "Deathrun",

    description:
        "Race through parkour maps, avoiding the obstacles being activated by deaths.",
    icon_url: IMAGE_CDN + "/icons/hub/games/dr.png",

    max_level: 75,
    canPrestige: false,
    max_prestige: null,
    level_increment: 200,
    level_cap: 42,

    colours: ["#c1bcb5", "#472d21", "#7c6e61", "#69594b", "#6c645c"],

    modes: [
        {
            id: "dr",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 20,
            team_amount: 1,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
