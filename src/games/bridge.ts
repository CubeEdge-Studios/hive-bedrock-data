import { IMAGE_CDN } from ".";
import { Game, Game_Variant_Queue_Type, Game_Variant_Type, Game_Data } from "../types/games.types";

export default {
    id: Game.TheBridge,
    short_name: "BRIDGE",
    name: "The Bridge",
    discontinued: false,

    description: "Bridge to victory in this fast-paced PvP game.",
    icon_url: IMAGE_CDN + "/icons/hub/games/bridge.png",

    has_levels: true,
    max_level: 20,
    can_prestige: false,
    max_prestige: null,
    level_increment: 300,
    level_cap: null,
    level_multiplier: 1.08,

    colours: ["#9f2b33", "#d05548", "#1a90d6", "#0d5196", "#8f9e9e"],

    modes: [
        {
            id: "bridge",
            type: Game_Variant_Type.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 2,
            limited: false,
            queue_type: Game_Variant_Queue_Type.SkillBased,
        },
        {
            id: "bridge-duos",
            type: Game_Variant_Type.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 2,
            limited: false,
            queue_type: Game_Variant_Queue_Type.Default,
        },
    ],
} as Game_Data<Game.TheBridge>;
