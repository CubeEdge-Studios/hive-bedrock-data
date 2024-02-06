import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.BlockDrop,
    short_name: "DROP",
    name: "Block Drop",

    description:
        "Competitive parkour. Be the last player standing in a disintegrating arena.",
    icon_url: IMAGE_CDN + "/icons/hub/games/drop.png",

    max_level: 25,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: 22,

    colours: ["#808a24", "#e3ae2d", "#196b23", "#941a14", "#83ea44"],

    modes: [
        {
            id: "drop",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 12,
            team_amount: 1,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
