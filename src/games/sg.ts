import { IMAGE_CDN } from ".";
import {
    GAME,
    GAME_MODE_QUEUE_TYPE,
    GAME_MODE_TYPE,
    IGAME,
} from "../types/games.types";

export default {
    id: GAME.SurvivalGames,
    short_name: "SG",
    name: "Survival Games",

    description:
        "The original battle royale. Loot a vast world and fight other players to be the last player standing.",
    icon_url: IMAGE_CDN + "/icons/hub/games/sg.png",

    max_level: 30,
    canPrestige: false,
    max_prestige: null,
    level_increment: 150,
    level_cap: null,

    colours: ["#49703b", "#8ed25f", "#b08f6b", "#13161c", "#7e8a96"],

    modes: [
        {
            id: "sg",
            type: GAME_MODE_TYPE.Regular,
            name: "Solos",
            team_size: 1,
            team_amount: 24,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
        {
            id: "sg-duos",
            type: GAME_MODE_TYPE.Duos,
            name: "Duos",
            team_size: 2,
            team_amount: 12,
            limited: false,
            queue_type: GAME_MODE_QUEUE_TYPE.Default,
        },
    ],
} as IGAME;
