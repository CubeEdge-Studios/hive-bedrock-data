import { Timeframe } from "../../enums";

interface Statistics_CTF {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    kills: number;
    assists: number;
    flags_captured: number;
    flags_returned: number;
}

interface Statistics_CTF_AllTime extends Statistics_CTF {
    UUID: string;
    first_played: number;
}
interface Statistics_CTF_Monthly extends Statistics_CTF {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_CTF_AllTime;
    [Timeframe.Monthly]: Statistics_CTF_Monthly;
}
export type CtfStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_CTF_AllTime extends Statistics_CTF {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_CTF_Monthly extends Statistics_CTF {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_CTF_AllTime;
    [Timeframe.Monthly]: Leaderboard_CTF_Monthly;
}
export type CtfLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
