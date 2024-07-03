import { Timeframe } from "../../enums";

interface Statistics_HIDE {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    hider_kills: number;
    seeker_kills: number;
}

interface Statistics_HIDE_AllTime extends Statistics_HIDE {
    UUID: string;
    first_played: number;
}
interface Statistics_HIDE_Monthly extends Statistics_HIDE {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_HIDE_AllTime;
    [Timeframe.Monthly]: Statistics_HIDE_Monthly;
}
export type HideStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_HIDE_AllTime extends Statistics_HIDE {
    UUID: string;
    first_played: number;
}
interface Leaderboard_HIDE_Monthly extends Statistics_HIDE {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_HIDE_AllTime;
    [Timeframe.Monthly]: Leaderboard_HIDE_Monthly;
}
export type HideLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
