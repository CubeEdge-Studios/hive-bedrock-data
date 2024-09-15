import { IMAGE_CDN } from ".";
import { Game, Game_Variant_Queue_Type, Game_Variant_Type, Game_Data } from "../types/games.types";

// TODO: data for kits?
export default {
    id: Game.SkywarsKits,
    short_name: "SKY-KITS",
    name: "SkyWars Kits",
    discontinued: false,

    description: "Mine lucky ores to gain loot, then fight!",
    icon_url: IMAGE_CDN + "/icons/hub/games/sky-kits.png",

    has_levels: true,
    max_level: 100,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: 52,

    colours: ["#d6654d", "#cdcdcd", "#812b2c", "#f2e11f", "#50545a"],

    modes: [
        {
            id: "sky-kits",
            type: Game_Variant_Type.Regular,
            name: "Kits Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-kits-duos",
            type: Game_Variant_Type.Duos,
            name: "Kits Duos",
            team_size: 2,
            team_amount: 6,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.SkywarsKits>;
