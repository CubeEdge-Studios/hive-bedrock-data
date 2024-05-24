import { APIVersion, Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { AllStatistics, Statistics } from "../api.types";

export interface Endpoint_MonthlyStatistics<G extends Game | "all"> {
    [APIVersion.None]: Endpoint_MonthlyStatistics_None<G>;
    [APIVersion.V_2024_03_29]: Endpoint_MonthlyStatistics<G>[APIVersion.None];
    [APIVersion.latest]: Endpoint_MonthlyStatistics<G>[APIVersion.V_2024_03_29];
}

type Endpoint_MonthlyStatistics_None<G extends Game | "all"> = G extends Game
    ? Statistics<G, Timeframe.Monthly>
    : G extends "all"
    ? AllStatistics<Timeframe.Monthly>
    : unknown;
