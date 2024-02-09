import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_WARS {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    final_kills: number;
    deaths: number;
    treasure_destroyed: number;
    prestige: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_WARS & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_WARS & MonthlyStatistics;
}
export type WarsStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_WARS & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_WARS & MonthlyLeaderboard;
}
export type WarsLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
