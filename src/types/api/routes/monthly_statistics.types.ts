import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Statistics } from "../api.types";
import { MonthlyStatistics as MonthlyStatisticsBase } from "../games/default.types";

export type Response_MonthlyStatistics<G extends Game | "all"> = G extends Game
    ? Statistics<G, Timeframe.Monthly>
    : G extends "all"
    ? Response_MonthlyStatistics_All
    : never;

export type Route_MonthlyStatistics<T extends string> =
    T extends `/game/monthly/${infer G extends Game | "all"}/${string}`
        ? Response_MonthlyStatistics<G>
        : never;

type Response_MonthlyStatistics_All = {
    [key in Game]: Statistics<key, Timeframe.Monthly> | MonthlyStatisticsBase;
};
