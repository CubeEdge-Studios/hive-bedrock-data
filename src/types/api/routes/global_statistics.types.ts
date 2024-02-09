import { GlobalStatisticsMetadata } from "../api.types";

export type Response_GlobalStatistics = GlobalStatisticsMetadata;

export type Route_GlobalStatistics<T extends string> =
    T extends `/global/statistics` ? Response_GlobalStatistics : never;
