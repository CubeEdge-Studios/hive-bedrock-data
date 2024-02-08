import { IMAGE_CDN } from ".";
import {
    Game,
    Game_Variant_Queue_Type,
    Game_Variant_Type,
    Game_Data,
} from "../types/games.types";

export default {
    id: Game.JustBuild,
    short_name: "BUILD",
    name: "Just Build",

    description:
        "Battle it out to create the best build for a randomly chosen theme.",
    icon_url: IMAGE_CDN + "/icons/hub/games/build.png",

    max_level: 20,
    can_prestige: false,
    max_prestige: null,
    level_increment: 100,
    level_cap: null,

    colours: ["#b99319", "#dbdbdb", "#242a30", "#faee3a", "#744414"],

    modes: [
        {
            id: "build",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "buildx",
            type: Game_Variant_Type.Regular,
            name: "Solos (Double Build Time)",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "build-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
        {
            id: "build-duosx",
            type: Game_Variant_Type.Duos,
            name: "Duos (Double Build Time)",
            team_size: 2,
            team_amount: 12,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.JustBuild>;
