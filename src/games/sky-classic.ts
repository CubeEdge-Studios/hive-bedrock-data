import { IMAGE_CDN } from ".";
import { Game, Game_Variant_Queue_Type, Game_Variant_Type, Game_Data } from "../types/games.types";

export default {
    id: Game.SkywarsClassic,
    short_name: "SKY-CLASSIC",
    name: "SkyWars Classic",
    discontinued: false,

    description: "No lucky ores, loot chests to collect items.",
    icon_url: IMAGE_CDN + "/icons/hub/games/sky-classic.png",

    has_levels: true,
    max_level: 100,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: 52,

    colours: ["#d6654d", "#cdcdcd", "#812b2c", "#f2e11f", "#50545a"],

    modes: [
        {
            id: "sky-classic",
            type: Game_Variant_Type.Regular,
            name: "Classic Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-classic-squads",
            type: Game_Variant_Type.Squads,
            name: "Classic Squads",
            team_size: 4,
            team_amount: 4,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.SkywarsClassic>;
