import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.GroundWars,
    short_name: "GROUND",
    name: "Ground Wars",

    description:
        "Fight for territory control. each kill grants more territory.",
    icon_url: IMAGE_CDN + "/icons/hub/games/ground.png",

    max_level: 20,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#ad7551", "#e2d4b4", "#0c1522", "#881f1c", "#b2b2aa"],

    modes: [
        {
            id: "ground",
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 6,
            team_amount: 2,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data;
