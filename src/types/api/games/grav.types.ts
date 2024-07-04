import { Timeframe } from "../../enums";

interface Statistics_GRAV {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    maps_completed: number;
    maps_completed_without_dying: number;
}

interface Statistics_GRAV_AllTime extends Statistics_GRAV {
    UUID: string;
    first_played: number;
}
interface Statistics_GRAV_Monthly extends Statistics_GRAV {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_GRAV_AllTime;
    [Timeframe.Monthly]: Statistics_GRAV_Monthly;
}
export type GravStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_GRAV_AllTime extends Statistics_GRAV {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_GRAV_Monthly extends Statistics_GRAV {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_GRAV_AllTime;
    [Timeframe.Monthly]: Leaderboard_GRAV_Monthly;
}
export type GravLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
