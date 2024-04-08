import { APIVersion, Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { AllStatistics, Statistics } from "../api.types";

export interface Endpoint_SpecificMonthlyStatistics<G extends Game | "all"> {
    [APIVersion.None]: Endpoint_SpecificMonthlyStatistics_None<G>;
    [APIVersion.V_2024_03_29]: Endpoint_SpecificMonthlyStatistics<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_SpecificMonthlyStatistics<G>[APIVersion.V_2024_03_29];
}

type Endpoint_SpecificMonthlyStatistics_None<G extends Game | "all"> =
    G extends Game
        ? Statistics<G, Timeframe.Monthly>
        : G extends "all"
        ? AllStatistics<Timeframe.Monthly>
        : unknown;
