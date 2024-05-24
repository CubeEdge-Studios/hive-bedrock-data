import { APIVersion } from "../../enums";
import { Game } from "../../games.types";

import { Endpoint_AllTimeLeaderboard } from "./alltime_leaderboard.types";
import { Endpoint_AllTimeStatistics } from "./alltime_statistics.types";
import { Endpoint_MonthlyLeaderboard } from "./monthly_leaderboard.types";
import { Endpoint_MonthlyStatistics } from "./monthly_statistics.types";
import { Endpoint_SpecificMonthlyLeaderboard } from "./specific_monthly_leaderboard.types";
import { Endpoint_SpecificMonthlyStatistics } from "./specific_monthly_statistics.types";

export type Endpoints<
    P extends string,
    V extends APIVersion
> = P extends `/game/all/${infer G extends Game | "all" | "main"}/${string}` // AllTime Statistics
    ? Endpoint_AllTimeStatistics<G>[V]
    : P extends `/game/all/${infer G extends Game}` // AllTime Lederboards
    ? Endpoint_AllTimeLeaderboard<G>[V]
    : P extends `/game/monthly/player/${infer G extends Game | "all"}/${string}` // Monthly Statistics
    ? Endpoint_MonthlyStatistics<G>[V]
    : P extends `/game/monthly/${infer G extends Game}` // Monthly Lederboards
    ? Endpoint_MonthlyLeaderboard<G>[V]
    : P extends `/game/monthly/player/${infer G extends
          | Game
          | "all"}/${string}/${number}/${number}` // Specific Monthly Statistics
    ? Endpoint_SpecificMonthlyStatistics<G>[V]
    : P extends `/game/monthly/${infer G extends Game}/${number}/${number}/${number}/${number}` // Monthly Lederboards
    ? Endpoint_SpecificMonthlyLeaderboard<G>[V]
    : unknown;
