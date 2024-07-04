import { Timeframe } from "../../enums";

interface Statistics_BRIDGE {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    goals: number;
    kills: number;
}

interface Statistics_BRIDGE_AllTime extends Statistics_BRIDGE {
    UUID: string;
    first_played: number;
}

interface Statistics_BRIDGE_Monthly
    extends Omit<Statistics_BRIDGE, "played" | "victories" | "deaths" | "goals" | "kills"> {
    xp: number;
    m_solo_played: number;
    m_solo_victories: number;
    m_solo_kills: number;
    m_solo_deaths: number;
    m_solo_goals: number;

    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_BRIDGE_AllTime;
    [Timeframe.Monthly]: Statistics_BRIDGE_Monthly;
}
export type BridgeStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_BRIDGE_AllTime extends Statistics_BRIDGE {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}

interface Leaderboard_BRIDGE_Monthly extends Statistics_BRIDGE {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_BRIDGE_AllTime;
    [Timeframe.Monthly]: Leaderboard_BRIDGE_Monthly;
}
export type BridgeLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
