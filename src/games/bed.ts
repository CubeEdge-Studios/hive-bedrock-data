import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.BedWars,
    short_name: "BED",
    name: "BedWars",
    deprecated: false,

    description:
        "Defend your bed, eliminate others, solo or as a team. Last team standing wins!",
    icon_url: IMAGE_CDN + "/icons/hub/games/bed.png",

    max_level: 50, // More levels to be released
    can_prestige: false,
    max_prestige: 0,
    level_increment: 150,
    level_cap: null,

    // still unsure about main accent colour
    colours: ["#894233", "#c7d5d7", "#d44c43", "#939fa6", "#482618"],

    modes: [
        {
            id: "bed",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 8,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "bed-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 8,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "bed-squads",
            type: Game_Variant_Type.Squads,
            name: "Squads",
            team_size: 4,
            team_amount: 4,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.BedWars>;
