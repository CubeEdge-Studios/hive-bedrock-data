import { GAMES } from "../games";
import { GAME } from "../types/GAMES";

export default function calculateXPFromLevel(
    level: number,
    game_id: GAME
): number | null {
    const game_data = GAMES[game_id];
    if (!game_data) return null;

    // Bridge uses a different xp-level system to the other games
    if (game_data.id === GAME.TheBridge) {
        // These values shouldn't change as only bridge uses this level system
        let level_multiplier = game_data.level_multiplier ?? 1.08;
        let increment = game_data.level_increment;
        let level_increment = game_data.level_increment;
        let total_xp = game_data.level_increment; // The total amount of xp required to reach n level
        let previous_level_xp = 0; // The total amount of xp required to reach n-1 level

        if (level <= 1) return 0;

        for (let l = 2; l <= game_data.max_level; l++) {
            if (l >= level) {
                let current_level_xp = total_xp - previous_level_xp;
                let input_level_percentage = level - l;

                let total_input_level_xp =
                    total_xp + current_level_xp * input_level_percentage;

                return Math.round(total_input_level_xp);
            }
            previous_level_xp = total_xp;

            increment = Math.floor(increment * level_multiplier);
            level_increment += increment;
            total_xp += level_increment;
        }

        return Math.round(previous_level_xp);
    }

    const level_increment = game_data.level_increment / 2;
    const level_cap = game_data.level_cap;

    let xp = level_increment * Math.pow(level, 2) - level_increment * level;

    if (!level_cap || level <= level_cap) return xp;

    xp = -level_increment * (level_cap - 1) * (level_cap - 2 * level);

    return xp;
}
