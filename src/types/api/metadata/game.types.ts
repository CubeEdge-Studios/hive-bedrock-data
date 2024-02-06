import { GAME, GAME_ALT, GAME_NAME_ALT } from "../../games.types";

export interface GameMetadata<G extends GAME> {
    name: GAME_NAME_ALT[G];
    shortName: GAME_ALT[G];
    maxLevel: number;
    allowPrestiging: boolean;
    maxPrestige: number;
    experienceToLevel: {
        [xp: string]: number;
    };
}
