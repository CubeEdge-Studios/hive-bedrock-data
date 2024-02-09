import { Timeframe } from "../../enums";
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

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_HIDE & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_HIDE & MonthlyStatistics;
}
export type HideStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_HIDE & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_HIDE & MonthlyLeaderboard;
}
export type HideLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
