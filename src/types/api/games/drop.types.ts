import { Timeframe } from "../../enums";

interface Statistics_DROP {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    blocks_destroyed: number;
    powerups_collected: number;
    vaults_used: number;
}

interface Statistics_DROP_AllTime extends Statistics_DROP {
    UUID: string;
    first_played: number;
}
interface Statistics_DROP_Monthly extends Statistics_DROP {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_DROP_AllTime;
    [Timeframe.Monthly]: Statistics_DROP_Monthly;
}
export type DropStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_DROP_AllTime extends Statistics_DROP {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_DROP_Monthly extends Statistics_DROP {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_DROP_AllTime;
    [Timeframe.Monthly]: Leaderboard_DROP_Monthly;
}
export type DropLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
