import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_SKY {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    mystery_chests_destroyed: number;
    ores_mined: number;
    spells_used: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_SKY & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_SKY & MonthlyStatistics;
}
export type SkyStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_SKY & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_SKY & MonthlyLeaderboard;
}
export type SkyLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
