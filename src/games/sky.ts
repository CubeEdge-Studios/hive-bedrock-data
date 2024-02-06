import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.Skywars,
    short_name: "SKY",
    name: "SkyWars",

    description: "Mine lucky ores to gain loot, then fight!",
    icon_url: IMAGE_CDN + "/icons/hub/games/sky.png",

    max_level: 75,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: 52,

    colours: ["#ad7d22", "#cdcdcd", "#812b2c", "#f2e11f", "#50545a"],

    modes: [
        {
            id: "sky",
            type: GAME_MODE_TYPE.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-duos",
            type: GAME_MODE_TYPE.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 6,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-trios",
            type: GAME_MODE_TYPE.Trios,
            name: "Trios",
            team_size: 3,
            team_amount: 4,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-squads",
            type: GAME_MODE_TYPE.Squads,
            name: "Squads",
            team_size: 4,
            team_amount: 4,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-mega",
            type: GAME_MODE_TYPE.Mega,
            name: "Mega",
            team_size: 7,
            team_amount: 4,
            limited: true,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-royale",
            type: GAME_MODE_TYPE.Royale,
            name: "Royale",
            team_size: 1,
            team_amount: 40,
            limited: true,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-kits",
            type: GAME_MODE_TYPE.Regular,
            name: "Kits Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sky-kits-duos",
            type: GAME_MODE_TYPE.Duos,
            name: "Kits Duos",
            team_size: 2,
            team_amount: 6,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
