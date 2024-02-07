import { Games } from "../games";
import { Game } from "../types/games.types";
import calculateXPFromLevel from "./calculateXPFromLevel";

export default function calculateLevelXP(
    level: number,
    game_id: Game
): number | null {
    const game_data = Games[game_id];
    if (!game_data) return null;
    if (level > game_data.max_level) return null;

    const current_level_xp = calculateXPFromLevel(level - 1, game_id);
    if (current_level_xp === null) return null;

    const next_level_xp = calculateXPFromLevel(level, game_id);
    if (next_level_xp === null) return null;

    return Math.floor(next_level_xp) - Math.floor(current_level_xp);
}
