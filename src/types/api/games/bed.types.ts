import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_BED {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    final_kills: number;
    deaths: number;
    beds_destroyed: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_BED & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_BED & MonthlyStatistics;
}
export type BedStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_BED & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_BED & MonthlyLeaderboard;
}
export type BedLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
