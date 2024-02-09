import { Timeframe } from "../../enums";
import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_GROUND {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    blocks_destroyed: number;
    blocks_placed: number;
    projectiles_fired: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_GROUND & AllTimeStatistics;
    [Timeframe.Monthly]: Statistics_GROUND & MonthlyStatistics;
}
export type GroundStatistics<T extends Timeframe> = StatisticVariants[T];

interface LeaderboardVariants {
    [Timeframe.AllTime]: Statistics_GROUND & AllTimeLeaderboard;
    [Timeframe.Monthly]: Statistics_GROUND & MonthlyLeaderboard;
}
export type GroundLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
