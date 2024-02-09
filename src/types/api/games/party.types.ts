import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_PARTY {
    xp: number;
    played: number;
    victories: number;
    powerups_collected: number;
    rounds_survived: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_PARTY & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_PARTY & MonthlyStatistics;
}
export type PartyStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_PARTY & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_PARTY & MonthlyLeaderboard;
}
export type PartyLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
