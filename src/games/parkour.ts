import { IMAGE_CDN } from ".";
import { Game, Game_Data } from "../types/games.types";

export default {
    id: Game.ParkourWorlds,
    short_name: "PARKOUR",
    name: "Parkour Worlds",
    discontinued: false,

    description:
        "Parkour Worlds will see you traversing a range of unique parkour courses in a range of awesome environments.",
    icon_url: IMAGE_CDN + "/icons/hub/games/hub-parkour.png",

    has_level: false,
    max_level: 0,
    can_prestige: false,
    max_prestige: 0,
    level_increment: 0,
    level_cap: 0,

    colours: ["#66d4e8", "#2094d6", "#267196", "#c5dce4", "#32404c"],

    modes: [],
} as Game_Data<Game.ParkourWorlds>;
