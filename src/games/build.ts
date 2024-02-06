import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.JustBuild,
    short_name: "BUILD",
    name: "Just Build",

    description:
        "Battle it out to create the best build for a randomly chosen theme.",
    icon_url: IMAGE_CDN + "/icons/hub/games/build.png",

    max_level: 20,
    canPrestige: false,
    max_prestige: null,
    level_increment: 100,
    level_cap: null,

    colours: ["#b99319", "#dbdbdb", "#242a30", "#faee3a", "#744414"],

    modes: [
        {
            id: "build",
            type: GAME_MODE_TYPE.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "buildx",
            type: GAME_MODE_TYPE.Regular,
            name: "Solos (Double Build Time)",
            team_size: 1,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "build-duos",
            type: GAME_MODE_TYPE.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "build-duosx",
            type: GAME_MODE_TYPE.Duos,
            name: "Duos (Double Build Time)",
            team_size: 2,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
