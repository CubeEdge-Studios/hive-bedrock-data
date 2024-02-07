import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_SKY {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    mystery_chests_destroyed: number;
    ores_mined: number;
    spells_used: number;
}

export type AllTimeStatistics_SKY = AllTimeStatistics & Statistics_SKY;
export type MonthlyStatistics_SKY = MonthlyStatistics & Statistics_SKY;
export type AllTimeLeaderboard_SKY = AllTimeLeaderboard & Statistics_SKY;
export type MonthlyLeaderboard_SKY = MonthlyLeaderboard & Statistics_SKY;
