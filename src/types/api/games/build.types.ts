import {
    AllTimeLeaderboard,
    AllTimeStatistics,
    MonthlyLeaderboard,
    MonthlyStatistics,
} from "./default.types";

interface Statistics_BUILD {
    xp: number;
    played: number;
    victories: number;
    rating_meh_recieved: number;
    rating_okay_recieved: number;
    rating_good_recieved: number;
    rating_great_recieved: number;
    rating_love_recieved: number;
}

export type AllTimeStatistics_BUILD = AllTimeStatistics & Statistics_BUILD;
export type MonthlyStatistics_BUILD = MonthlyStatistics & Statistics_BUILD;
export type AllTimeLeaderboard_BUILD = AllTimeLeaderboard & Statistics_BUILD;
export type MonthlyLeaderboard_BUILD = MonthlyLeaderboard & Statistics_BUILD;
