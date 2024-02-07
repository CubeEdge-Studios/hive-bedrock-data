import { Game, Game_Alt, Game_Name_Alt } from "../../games.types";

export interface GameMetadata<G extends Game> {
    name: Game_Name_Alt[G];
    shortName: Game_Alt[G];
    maxLevel: number;
    allowPrestiging: boolean;
    maxPrestige: number;
    experienceToLevel: {
        [xp: string]: number;
    };
}
