import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_DR {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    checkpoints: number;
    activated: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_DR & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_DR & MonthlyStatistics;
}
export type DrStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_DR & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_DR & MonthlyLeaderboard;
}
export type DrLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
