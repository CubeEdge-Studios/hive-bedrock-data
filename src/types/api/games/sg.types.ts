import { Timeframe } from "../../enums";

interface Statistics_SG {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    kills: number;
    cows: number;
    deathmatches: number;
    crates: number;
    teleporters_used: number;
    launchpads_used: number;
    flares_used: number;
}

interface Statistics_SG_AllTime extends Statistics_SG {
    UUID: string;
    first_played: number;
}
interface Statistics_SG_Monthly extends Statistics_SG {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_SG_AllTime;
    [Timeframe.Monthly]: Statistics_SG_Monthly;
}
export type SgStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_SG_AllTime extends Statistics_SG {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_SG_Monthly extends Statistics_SG {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_SG_AllTime;
    [Timeframe.Monthly]: Leaderboard_SG_Monthly;
}
export type SgLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
