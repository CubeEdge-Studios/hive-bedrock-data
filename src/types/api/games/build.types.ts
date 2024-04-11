import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_BUILD {
    xp: number;
    played: number;
    victories: number;
    rating_meh_received: number;
    rating_okay_received: number;
    rating_good_received: number;
    rating_great_received: number;
    rating_love_received: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_BUILD & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_BUILD & MonthlyStatistics;
}
export type BuildStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_BUILD & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_BUILD & MonthlyLeaderboard;
}
export type BuildLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
