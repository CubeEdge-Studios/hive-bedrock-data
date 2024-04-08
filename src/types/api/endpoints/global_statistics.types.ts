import { APIVersion } from "../../enums";
import { Game } from "../../games.types";
import { GlobalStatisticsMetadata } from "../api.types";

export interface Endpoint_GlobalStatistics<G extends Game> {
    [APIVersion.None]: GlobalStatisticsMetadata;
    [APIVersion.V_2024_03_29]: Endpoint_GlobalStatistics<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_GlobalStatistics<G>[APIVersion.V_2024_03_29];
}
