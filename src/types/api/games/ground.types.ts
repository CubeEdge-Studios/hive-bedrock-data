import { Timeframe } from "../../enums";

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

interface Statistics_GROUND_AllTime extends Statistics_GROUND {
    UUID: string;
    first_played: number;
}
interface Statistics_GROUND_Monthly extends Statistics_GROUND {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_GROUND_AllTime;
    [Timeframe.Monthly]: Statistics_GROUND_Monthly;
}
export type GroundStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_GROUND_AllTime extends Statistics_GROUND {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_GROUND_Monthly extends Statistics_GROUND {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_GROUND_AllTime;
    [Timeframe.Monthly]: Leaderboard_GROUND_Monthly;
}
export type GroundLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
