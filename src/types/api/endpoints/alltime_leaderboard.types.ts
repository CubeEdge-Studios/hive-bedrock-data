import { APIVersion, Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Leaderboards } from "../api.types";

export interface Endpoint_AllTimeLeaderboard<G extends Game> {
    [APIVersion.None]: Leaderboards<G, Timeframe.AllTime>[];
    [APIVersion.V_2024_03_29]: Endpoint_AllTimeLeaderboard<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_AllTimeLeaderboard<G>[APIVersion.V_2024_03_29];
}
