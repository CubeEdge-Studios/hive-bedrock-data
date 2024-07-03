import { Timeframe } from "../../enums";

interface Statistics_BED {
    xp: number;
    played: number;
    victories: number;
    kills: number;
    final_kills: number;
    deaths: number;
    beds_destroyed: number;
}

interface Statistics_BED_AllTime extends Statistics_BED {
    UUID: string;
    first_played: number;
}
interface Statistics_BED_Monthly extends Statistics_BED {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_BED_AllTime;
    [Timeframe.Monthly]: Statistics_BED_Monthly;
}
export type BedStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_BED_AllTime extends Statistics_BED {
    UUID: string;
    first_played: number;
}
interface Leaderboard_BED_Monthly extends Statistics_BED {
    index: number;
    human_index: number;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_BED_AllTime;
    [Timeframe.Monthly]: Leaderboard_BED_Monthly;
}
export type BedLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
