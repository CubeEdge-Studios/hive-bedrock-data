import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_MURDER {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    coins: number;
    murders: number;
    murderer_eliminations: number;
    prestige: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_MURDER & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_MURDER & MonthlyStatistics;
}
export type MurderStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_MURDER & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_MURDER & MonthlyLeaderboard;
}
export type MurderLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
