import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.MurderMystery,
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
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 16,
            team_amount: 1,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.MurderMystery>;
