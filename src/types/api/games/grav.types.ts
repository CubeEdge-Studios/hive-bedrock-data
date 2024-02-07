import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_GRAV {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    maps_completed: number;
    maps_completed_without_dying: number;
}

export type AllTimeStatistics_GRAV = AllTimeStatistics & Statistics_GRAV;
export type MonthlyStatistics_GRAV = MonthlyStatistics & Statistics_GRAV;
export type AllTimeLeaderboard_GRAV = AllTimeLeaderboard & Statistics_GRAV;
export type MonthlyLeaderboard_GRAV = MonthlyLeaderboard & Statistics_GRAV;
