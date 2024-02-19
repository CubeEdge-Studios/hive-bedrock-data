import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.Skywars,
    short_name: "SKY",
    name: "SkyWars",

    description: "Mine lucky ores to gain loot, then fight!",
    icon_url: IMAGE_CDN + "/icons/hub/games/sky.png",

    max_level: 75,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: 52,

    colours: ["#d6654d", "#cdcdcd", "#812b2c", "#f2e11f", "#50545a"],

    modes: [
        {
            id: "sky",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 6,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-trios",
            type: Game_Variant_Type.Trios,
            name: "Trios",
            team_size: 3,
            team_amount: 4,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-squads",
            type: Game_Variant_Type.Squads,
            name: "Squads",
            team_size: 4,
            team_amount: 4,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-mega",
            type: Game_Variant_Type.Mega,
            name: "Mega",
            team_size: 7,
            team_amount: 4,
            limited: true,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sky-royale",
            type: Game_Variant_Type.Royale,
            name: "Royale",
            team_size: 1,
            team_amount: 40,
            limited: true,
            queue_type: Game_Variant_Queue_Type.Default,
        },
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
} as Game_Data<Game.Skywars>;
