import { IMAGE_CDN } from ".";
import { Game, Game_Variant_Queue_Type, Game_Variant_Type, Game_Data } from "../types/games.types";

export default {
    id: Game.BlockParty,
    short_name: "PARTY",
    name: "Block Party",
    discontinued: false,

    description: "It's time to dance! Dance your way to the correct color or fall to your death!",
    icon_url: IMAGE_CDN + "/icons/hub/games/party.png",

    has_level: true,
    max_level: 25,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#0144f7", "#c79b18", "#2b3754", "#6e603d", "#847434"],

    modes: [
        {
            id: "party",
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 14,
            team_amount: 1,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.BlockParty>;
