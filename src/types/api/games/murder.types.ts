import { Timeframe } from "../../enums";

interface Statistics_MURDER {
    xp: number;
    played: number;
    victories: number;
    deaths: number;
    coins: number;
    murders: number;
    murderer_eliminations: number;
    prestige: number;
}

interface Statistics_MURDER_AllTime extends Statistics_MURDER {
    UUID: string;
    first_played: number;
}
interface Statistics_MURDER_Monthly extends Statistics_MURDER {
    index: number;
    human_index: number;
    username: string;
    uncapped_xp?: number;
}

interface StatisticVariants {
    [Timeframe.AllTime]: Statistics_MURDER_AllTime;
    [Timeframe.Monthly]: Statistics_MURDER_Monthly;
}
export type MurderStatistics<T extends Timeframe> = StatisticVariants[T];

interface Leaderboard_MURDER_AllTime extends Statistics_MURDER {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
}
interface Leaderboard_MURDER_Monthly extends Statistics_MURDER {
    index: number;
    human_index: number;
    username: number;
    UUID: string;
    uncapped_xp?: number;
}

interface LeaderboardVariants {
    [Timeframe.AllTime]: Leaderboard_MURDER_AllTime;
    [Timeframe.Monthly]: Leaderboard_MURDER_Monthly;
}
export type MurderLeaderboard<T extends Timeframe> = LeaderboardVariants[T];
