import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { PlayerMetadata_Nested, Statistics } from "../api.types";

export type Response_AllTimeStatistics<G extends Game | "all" | "main"> = G extends Game
    ? Statistics<G, Timeframe.AllTime>
    : G extends "all"
    ? Response_AllTimeStatistics_All
    : G extends "main"
    ? PlayerMetadata_Nested
    : never;

export type Route_AllTimeStatistics<T extends string> = T extends `/game/all/${infer G}/${string}`
    ? G extends Game | "all" | "main"
        ? Response_AllTimeStatistics<G>
        : never
    : never;

type Response_AllTimeStatistics_All = {
    [key in Game]: Statistics<key, Timeframe.AllTime> | [];
} & PlayerMetadata_Nested;
