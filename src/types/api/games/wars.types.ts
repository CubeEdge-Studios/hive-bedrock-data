import { Timeframe } from "../../enums";

interface Statistics_WARS {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    final_kills: number;
    deaths: number;
    treasure_destroyed: number;
    prestige: number;
}

interface Statistics_WARS_AllTime extends Statistics_WARS {
    UUID: string;
    first_played: number;
}
interface Statistics_WARS_Monthly extends Statistics_WARS {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_WARS_AllTime;
    [Timeframe.Monthly]: Statistics_WARS_Monthly;
}
export type WarsStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_WARS_AllTime extends Statistics_WARS {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_WARS_Monthly extends Statistics_WARS {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_WARS_AllTime;
    [Timeframe.Monthly]: Leaderboard_WARS_Monthly;
}
export type WarsLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
