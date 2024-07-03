import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Statistics } from "../api.types";

export type Response_SeasonStatistics<G extends Game> = G extends Game
    ? Statistics<G, Timeframe.AllTime>
    : never;

export type Route_SeasonStatistics<T extends string> =
    T extends `/game/season/player/${infer G extends Game}/${string}/${number}`
        ? Response_SeasonStatistics<G>
        : never;
