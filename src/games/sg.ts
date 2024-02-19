import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.SurvivalGames,
    short_name: "SG",
    name: "Survival Games",

    description:
        "The original battle royale. Loot a vast world and fight other players to be the last player standing.",
    icon_url: IMAGE_CDN + "/icons/hub/games/sg.png",

    max_level: 30,
    can_prestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#78b159", "#8ed25f", "#b08f6b", "#13161c", "#7e8a96"],

    modes: [
        {
            id: "sg",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 24,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "sg-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.SurvivalGames>;
