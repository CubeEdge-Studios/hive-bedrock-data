import { APIVersion, Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Leaderboards } from "../api.types";

export interface Endpoint_SpecificMonthlyLeaderboard<G extends Game> {
    [APIVersion.None]: Leaderboards<G, Timeframe.Monthly>[];
    [APIVersion.V_2024_03_29]: Endpoint_SpecificMonthlyLeaderboard<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_SpecificMonthlyLeaderboard<G>[APIVersion.V_2024_03_29];
}
