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
    rating_meh_recieved: number;
    rating_okay_recieved: number;
    rating_good_recieved: number;
    rating_great_recieved: number;
    rating_love_recieved: number;
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
