import { Games } from "../games";
import { Game } from "../types/games.types";
import calculateLevelFromXP from "./calculateLevelFromXP";

export default function hasCompleted(xp: number, game_id: Game): boolean {
    const game_data = Games[game_id];
    if (!game_data) return false;

    const level = calculateLevelFromXP(xp, game_id);
    if (level === null) return false;
    if (level >= game_data.max_level) return true;
    return false;
}
