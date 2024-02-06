import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.TheBridge,
    short_name: "BRIDGE",
    name: "The Bridge",

    description: "Bridge to victory in this fast-paced PvP game.",
    icon_url: IMAGE_CDN + "/icons/hub/games/bridge.png",

    max_level: 20,
    canPrestige: false,
    max_prestige: null,
    level_increment: 300,
    level_cap: null,
    level_multiplier: 1.08,

    colours: ["#7a4b4f", "#d05548", "#1a90d6", "#0d5196", "#8f9e9e"],

    modes: [
        {
            id: "bridge",
            type: GAME_MODE_TYPE.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 2,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.SkillBased,
        },
        {
            id: "bridge-duos",
            type: GAME_MODE_TYPE.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 2,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
