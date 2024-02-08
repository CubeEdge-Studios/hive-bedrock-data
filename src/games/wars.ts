import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.TreasureWars,
    short_name: "WARS",
    name: "Treasure Wars",

    description:
        "Bedwars with treasure, Treasures grant infinite respawns. Protect your treasure and destroy others.",
    icon_url: IMAGE_CDN + "/icons/hub/games/wars.png",

    max_level: 100,
    can_prestige: true,
    max_prestige: 5,
    level_increment: 150,
    level_cap: 52,

    colours: ["#9c6322", "#e0cc52", "#481c17", "#989aa0", "#622116"],

    modes: [
        {
            id: "wars",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 8,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "wars-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 8,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "wars-trios",
            type: Game_Variant_Type.Trios,
            name: "Trios",
            team_size: 3,
            team_amount: 4,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "wars-squads",
            type: Game_Variant_Type.Squads,
            name: "Squads",
            team_size: 4,
            team_amount: 4,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "wars-mega",
            type: Game_Variant_Type.Mega,
            name: "Mega",
            team_size: 12,
            team_amount: 2,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.TreasureWars>;
