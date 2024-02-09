import { Timeframe } from "../../enums";
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

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_SG & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_SG & MonthlyStatistics;
}
export type SgStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_SG & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_SG & MonthlyLeaderboard;
}
export type SgLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
