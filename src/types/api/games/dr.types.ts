import { Timeframe } from "../../enums";

interface Statistics_DR {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    deaths: number;
    checkpoints: number;
    activated: number;
}

interface Statistics_DR_AllTime extends Statistics_DR {
    UUID: string;
    first_played: number;
}
interface Statistics_DR_Monthly extends Statistics_DR {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_DR_AllTime;
    [Timeframe.Monthly]: Statistics_DR_Monthly;
}
export type DrStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_DR_AllTime extends Statistics_DR {
    UUID: string;
    first_played: number;
}
interface Leaderboard_DR_Monthly extends Statistics_DR {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_DR_AllTime;
    [Timeframe.Monthly]: Leaderboard_DR_Monthly;
}
export type DrLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
