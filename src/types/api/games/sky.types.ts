import { Timeframe } from "../../enums";

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

interface Statistics_SKY_AllTime extends Statistics_SKY {
    UUID: string;
    first_played: number;
}
interface Statistics_SKY_Monthly extends Statistics_SKY {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_SKY_AllTime;
    [Timeframe.Monthly]: Statistics_SKY_Monthly;
}
export type SkyStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_SKY_AllTime extends Statistics_SKY {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_SKY_Monthly extends Statistics_SKY {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_SKY_AllTime;
    [Timeframe.Monthly]: Leaderboard_SKY_Monthly;
}
export type SkyLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
