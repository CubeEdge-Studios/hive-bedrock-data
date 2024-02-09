import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_CTF {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    kills: number;
    assists: number;
    flags_captured: number;
    flags_returned: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_CTF & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_CTF & MonthlyStatistics;
}
export type CtfStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_CTF & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_CTF & MonthlyLeaderboard;
}
export type CtfLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
