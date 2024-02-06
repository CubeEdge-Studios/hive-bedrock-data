import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types.ts";

export default {
    id: GAME.BlockParty,
    short_name: "PARTY",
    name: "Block Party",

    description:
        "It's time ot dance! Dance your way to the correct color or fall to your death!",
    icon_url: IMAGE_CDN + "/icons/hub/games/party.png",

    max_level: 25,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#22262f", "#c79b18", "#2b3754", "#6e603d", "#847434"],

    modes: [
        {
            id: "party",
            type: GAME_MODE_TYPE.Regular,
            name: "Regular",
            team_size: 14,
            team_amount: 1,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
