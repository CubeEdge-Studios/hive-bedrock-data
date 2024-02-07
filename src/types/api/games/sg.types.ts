import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_SG {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    kills: number;
    cows: number;
    deathmatches: number;
    crates: number;
}

export type AllTimeStatistics_SG = AllTimeStatistics & Statistics_SG;
export type MonthlyStatistics_SG = MonthlyStatistics & Statistics_SG;
export type AllTimeLeaderboard_SG = AllTimeLeaderboard & Statistics_SG;
export type MonthlyLeaderboard_SG = MonthlyLeaderboard & Statistics_SG;
