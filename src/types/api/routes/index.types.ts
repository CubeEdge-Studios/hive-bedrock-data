import {
    Route_AllTimeLeaderboard,
    Response_AllTimeLeaderboard,
} from "./alltime_leaderboard.types";
import {
    Response_AllTimeStatistics,
    Route_AllTimeStatistics,
} from "./alltime_statistics.types";
import {
    Response_MonthlyLeaderboard,
    Route_MonthlyLeaderboard,
} from "./monthly_leaderboard.types";
import {
    Response_MonthlyStatistics,
    Route_MonthlyStatistics,
} from "./monthly_statistics.types";
import {
    Response_SpecificMonthlyLeaderboard,
    Route_SpecificMonthlyLeaderboard,
} from "./specific_monthly_leaderboard.types";
import {
    Response_SpecificMonthlyStatistics,
    Route_SpecificMonthlyStatistics,
} from "./specific_monthly_statistics.types";
import { Response_GameMaps, Route_GameMaps } from "./game_maps.types";
import { Response_GameMetdata, Route_GameMetdata } from "./game_metadata.types";
import {
    Response_GlobalStatistics,
    Route_GlobalStatistics,
} from "./global_statistics.types";

export type Routes<T extends string> =
    | Route_AllTimeLeaderboard<T>
    | Route_AllTimeStatistics<T>
    | Route_GameMaps<T>
    | Route_GameMetdata<T>
    | Route_GlobalStatistics<T>
    | Route_MonthlyLeaderboard<T>
    | Route_MonthlyStatistics<T>
    | Route_SpecificMonthlyLeaderboard<T>
    | Route_SpecificMonthlyStatistics<T>;

export {
    Response_AllTimeLeaderboard,
    Response_AllTimeStatistics,
    Response_GameMaps,
    Response_GameMetdata,
    Response_GlobalStatistics,
    Response_MonthlyLeaderboard,
    Response_MonthlyStatistics,
    Response_SpecificMonthlyLeaderboard,
    Response_SpecificMonthlyStatistics,
};
