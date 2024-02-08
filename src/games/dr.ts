import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.DeathRun,
    short_name: "DR",
    name: "Deathrun",

    description:
        "Race through parkour maps, avoiding the obstacles being activated by deaths.",
    icon_url: IMAGE_CDN + "/icons/hub/games/dr.png",

    max_level: 75,
    can_prestige: false,
    max_prestige: null,
    level_increment: 200,
    level_cap: 42,

    colours: ["#c1bcb5", "#472d21", "#7c6e61", "#69594b", "#6c645c"],

    modes: [
        {
            id: "dr",
            type: Game_Variant_Type.Regular,
            name: "Regular",
            team_size: 20,
            team_amount: 1,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.DeathRun>;
