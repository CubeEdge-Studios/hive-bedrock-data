import { GAMES } from "../games";
import { GAME } from "../types/games.types.ts";
import calculateXPFromLevel from "./calculateXPFromLevel";

export default function calculatePercentageComplete(
    xp: number,
    game_id: GAME
): number {
    const game_data = GAMES[game_id];
    if (!game_data) return 0;

    const max_level_xp = calculateXPFromLevel(game_data.max_level, game_id);
    if (!max_level_xp) return 0;

    return Math.round((xp / max_level_xp) * 10000) / 10000;
}
