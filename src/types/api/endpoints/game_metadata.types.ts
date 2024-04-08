import { APIVersion } from "../../enums";
import { Game } from "../../games.types";
import { GameMetadata } from "../api.types";

export interface Endpoint_GameMetadata<G extends Game> {
    [APIVersion.None]: GameMetadata;
    [APIVersion.V_2024_03_29]: Endpoint_GameMetadata<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_GameMetadata<G>[APIVersion.V_2024_03_29];
}
