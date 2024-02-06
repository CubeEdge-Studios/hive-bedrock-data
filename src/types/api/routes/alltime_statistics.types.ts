import { GAME } from "../../games.types";
import { AllTimeStatistics, PlayerMetadata_Nested } from "../api.types";

export type Path_AllTimeStatistics<
    G extends GAME | "all" | "main",
    P extends string
> = `/game/all/${G}/${P}`;
export type Route_AllTimeStatistics<G extends GAME | "all" | "main"> =
    G extends GAME
        ? AllTimeStatistics[G]
        : G extends "all"
        ? Route_AllTimeStatistics_All
        : PlayerMetadata_Nested;

export type Route_AllTimeStatistics_All = {
    [key in GAME]: AllTimeStatistics[key];
} & PlayerMetadata_Nested;
