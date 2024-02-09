import { Timeframe } from "../../enums";
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

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_GRAV & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_GRAV & MonthlyStatistics;
}
export type GravStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_GRAV & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_GRAV & MonthlyLeaderboard;
}
export type GravLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
