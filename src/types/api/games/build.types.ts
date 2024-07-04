import { Timeframe } from "../../enums";

interface Statistics_BUILD {
    xp: number;
    played: number;
    victories: number;
    rating_meh_received: number;
    rating_okay_received: number;
    rating_good_received: number;
    rating_great_received: number;
    rating_love_received: number;
}

interface Statistics_BUILD_AllTime extends Statistics_BUILD {
    UUID: string;
    first_played: number;
}
interface Statistics_BUILD_Monthly extends Statistics_BUILD {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_BUILD_AllTime;
    [Timeframe.Monthly]: Statistics_BUILD_Monthly;
}
export type BuildStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_BUILD_AllTime extends Statistics_BUILD {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_BUILD_Monthly extends Statistics_BUILD {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_BUILD_AllTime;
    [Timeframe.Monthly]: Leaderboard_BUILD_Monthly;
}
export type BuildLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
