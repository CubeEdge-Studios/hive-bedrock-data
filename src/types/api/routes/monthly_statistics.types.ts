import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Statistics } from "../api.types";

export type Response_MonthlyStatistics<G extends Game | "all"> = G extends Game
    ? Statistics<G, Timeframe.Monthly>
    : G extends "all"
    ? Response_MonthlyStatistics_All
    : never;

export type Route_MonthlyStatistics<T extends string> = T extends `/game/monthly/${infer G extends
    | Game
    | "all"}/${string}`
    ? Response_MonthlyStatistics<G>
    : never;

interface MonthlyStatisticsBase {
    index: number;
    human_index: number;
    username: string;
}

type Response_MonthlyStatistics_All = {
    [key in Game]: Statistics<key, Timeframe.Monthly> | MonthlyStatisticsBase;
};
