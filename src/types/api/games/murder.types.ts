import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_MURDER {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    coins: number;
    murders: number;
    murderer_eliminations: number;
}

export type AllTimeStatistics_MURDER = AllTimeStatistics & Statistics_MURDER;
export type MonthlyStatistics_MURDER = MonthlyStatistics & Statistics_MURDER;
export type AllTimeLeaderboard_MURDER = AllTimeLeaderboard & Statistics_MURDER;
export type MonthlyLeaderboard_MURDER = MonthlyLeaderboard & Statistics_MURDER;
