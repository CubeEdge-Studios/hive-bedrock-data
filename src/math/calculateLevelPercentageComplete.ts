import { Games } from "../games";
import { Game } from "../types/games.types";
import calculateLevelFromXP from "./calculateLevelFromXP";
import calculateXPFromLevel from "./calculateXPFromLevel";
import calculateLevelXP from "./calculateLevelXP";

export default function calculateLevelPercentageComplete(
    xp: number,
    game_id: Game
): number {
    const game_data = Games[game_id];
    if (!game_data) return 0;

    const current_level = calculateLevelFromXP(xp, game_id);
    if (current_level === null) return 0;
    if (current_level >= game_data.max_level) return 1;

    const current_level_xp = calculateXPFromLevel(
        Math.floor(current_level),
        game_id
    );
    if (current_level_xp === null) return 0;

    const level_xp = xp - current_level_xp;

    const total_level_xp = calculateLevelXP(
        Math.floor(current_level + 1),
        game_id
    );
    if (total_level_xp === null) return 0;

    return Math.round((level_xp / total_level_xp) * 10000) / 10000;
}
