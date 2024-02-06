import { GAMES } from "../games";
import { GAME } from "../types/games.types.ts";
import calculateLevelFromXP from "./calculateLevelFromXP";

export default function hasCompleted(xp: number, game_id: GAME): boolean {
    const game_data = GAMES[game_id];
    if (!game_data) return false;

    const level = calculateLevelFromXP(xp, game_id);
    if (level === null) return false;
    if (level >= game_data.max_level) return true;
    return false;
}
