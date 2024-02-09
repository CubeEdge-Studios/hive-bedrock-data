import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_DROP {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    blocks_destroyed: number;
    powerups_collected: number;
    vaults_used: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_DROP & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_DROP & MonthlyStatistics;
}
export type DropStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_DROP & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_DROP & MonthlyLeaderboard;
}
export type DropLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
