import { Game } from "../../games.types";
import { AllTimeStatistics, PlayerMetadata_Nested } from "../api.types";

export type Path_AllTimeStatistics<
    G extends Game | "all" | "main",
    P extends string
> = `/game/all/${G}/${P}`;
export type Route_AllTimeStatistics<G extends Game | "all" | "main"> =
    G extends Game
        ? AllTimeStatistics[G] | []
        : G extends "all"
        ? Route_AllTimeStatistics_All
        : G extends "main"
        ? PlayerMetadata_Nested
        : unknown;

export type Route_AllTimeStatistics_All = {
    [key in Game]: AllTimeStatistics[key] | [];
} & PlayerMetadata_Nested;
