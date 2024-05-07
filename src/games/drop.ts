import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.BlockDrop,
    short_name: "DROP",
    name: "Block Drop",
    discontinued: false,

    description:
        "Competitive parkour. Be the last player standing in a disintegrating arena.",
    icon_url: IMAGE_CDN + "/icons/hub/games/drop.png",

    max_level: 25,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: 22,

    colours: ["#116a2e", "#e3ae2d", "#196b23", "#941a14", "#83ea44"],

    modes: [
        {
            id: "drop",
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 12,
            team_amount: 1,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.BlockDrop>;
