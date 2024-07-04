import { Timeframe } from "../../enums";

interface Statistics_PARTY {
    xp: number;
    played: number;
    victories: number;
    powerups_collected: number;
    rounds_survived: number;
}

interface Statistics_PARTY_AllTime extends Statistics_PARTY {
    UUID: string;
    first_played: number;
}
interface Statistics_PARTY_Monthly extends Statistics_PARTY {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_PARTY_AllTime;
    [Timeframe.Monthly]: Statistics_PARTY_Monthly;
}
export type PartyStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_PARTY_AllTime extends Statistics_PARTY {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_PARTY_Monthly extends Statistics_PARTY {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_PARTY_AllTime;
    [Timeframe.Monthly]: Leaderboard_PARTY_Monthly;
}
export type PartyLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
