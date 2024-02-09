import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_BRIDGE {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    goals: number;
    kills: number;
}

interface StatisticsAlt_BRIDGE {
    xp: number;
    m_solo_played: number;
    m_solo_victories: number;
    m_solo_kills: number;
    m_solo_deaths: number;
    m_solo_goals: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_BRIDGE & AllTimeStatistics;
    [Timeframe.Monthly]: StatisticsAlt_BRIDGE & MonthlyStatistics;
}
export type BridgeStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_BRIDGE & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_BRIDGE & MonthlyLeaderboard;
}
export type BridgeLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
