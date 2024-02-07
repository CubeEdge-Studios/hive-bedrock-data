import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_HIDE {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    hider_kills: number;
    seeker_kills: number;
}

export type AllTimeStatistics_HIDE = AllTimeStatistics & Statistics_HIDE;
export type MonthlyStatistics_HIDE = MonthlyStatistics & Statistics_HIDE;
export type AllTimeLeaderboard_HIDE = AllTimeLeaderboard & Statistics_HIDE;
export type MonthlyLeaderboard_HIDE = MonthlyLeaderboard & Statistics_HIDE;
