import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.HideAndSeek,
    short_name: "HIDE",
    name: "Hide and Seek",

    description:
        "Become a Minecraft block and hide from seekers. Found hiders become seekers.",
    icon_url: IMAGE_CDN + "/icons/hub/games/hide.png",

    max_level: 75,
    can_prestige: false,
    max_prestige: null,
    level_increment: 100,
    level_cap: null,

    colours: ["#7a5332", "#d1d0d0", "#97b4be", "#0b1726", "#8c949c"],

    modes: [
        {
            id: "hide",
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 16,
            team_amount: 1,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.HideAndSeek>;
