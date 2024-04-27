import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.Gravity,
    short_name: "GRAV",
    name: "Gravity",
    deprecated: false,

    description:
        "The ultimate movement challenge! Can you fall to the bottom safely?",
    icon_url: IMAGE_CDN + "/icons/hub/games/grav.png",

    max_level: 25,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#22565b", "#339b26", "#d6dddd", "#0b5099", "#61ba63"],

    modes: [
        {
            id: "grav",
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 14,
            team_amount: 1,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.Gravity>;
