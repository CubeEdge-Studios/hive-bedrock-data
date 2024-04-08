import { APIVersion } from "../../enums";
import { Game } from "../../games.types";
import { MapMetadata } from "../api.types";

export interface Endpoint_GameMaps<G extends Game> {
    [APIVersion.None]: MapMetadata[];
    [APIVersion.V_2024_03_29]: Endpoint_GameMaps<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_GameMaps<G>[APIVersion.V_2024_03_29];
}
