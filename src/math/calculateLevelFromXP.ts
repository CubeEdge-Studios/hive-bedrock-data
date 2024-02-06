import { GAMES } from "../games";
import { GAME } from "../types/games.types";

export default function calculateLevelFromXP(
    xp: number,
    game_id: GAME
): number | null {
    const game_data = GAMES[game_id];
    if (!game_data) return null;

    // Bridge uses a different xp-level system to the other games
    if (game_data.id === GAME.TheBridge) {
        // These values shouldn't change as only bridge uses this level system
        let max_level = game_data.max_level;
        let level_multiplier = game_data.level_multiplier ?? 1.08;
        let increment = game_data.level_increment;
        let level_increment = game_data.level_increment;
        let total_xp = game_data.level_increment; // The total amount of xp required to reach n level
        let previous_level_xp = 0; // The total amount of xp required to reach n-1 level

        for (let level = 1; level <= max_level; level++) {
            if (xp < total_xp) {
                if (level === max_level) return level;

                let total_level_xp = total_xp - previous_level_xp; // Total amount of xp to complete the level
                let total_required = total_xp - xp; // Amount of xp player has left to complete the level
                let percentage_left = total_required / total_level_xp;
                let percentage_completed = 1 - percentage_left;
                let total_level_with_percentage = level + percentage_completed; // Add percentage completed to current level

                return Math.floor(total_level_with_percentage * 100) / 100;
            }

            previous_level_xp = total_xp;

            increment = Math.floor(increment * level_multiplier);
            level_increment += increment;
            total_xp += level_increment;
        }

        return 1;
    }

    let level_increment = game_data.level_increment / 2; // The amount of xp that is added between each level
    let level_cap = game_data.level_increment; // The level where the difficulty of each level dosen't increase

    let level =
        (level_increment +
            Math.sqrt(level_increment * (level_increment + 4 * xp))) /
        (2 * level_increment); // Calculate the level without the level cap

    if (level < 1) return 1;
    if (level > game_data.max_level) return game_data.max_level;

    if (!level_cap || level_cap <= level_cap)
        return Math.floor(level * 100) / 100; // Return if there is no level cap or the level dosen't reach the level cap

    let level_with_cap =
        level_cap +
        (xp -
            (level_increment * Math.pow(level_cap - 1, 2) +
                (level_cap - 1) * level_increment)) /
            ((level_cap - 1) * level_increment); // The level is larger than the cap so the excess xp is removed and a level is calculated

    if (level_with_cap < 1) return 1;
    if (level_with_cap > game_data.max_level) return game_data.max_level;

    return Math.floor(level_with_cap * 100) / 100;
}
