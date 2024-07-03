import { Timeframe } from "../../enums";
import { Game } from "../../games.types";
import { Leaderboards } from "../api.types";

export type Response_AllTimeLeaderboard<G extends Game> = Leaderboards<G, Timeframe.AllTime>[];

export type Route_AllTimeLeaderboard<T extends string> = T extends `/game/all/${infer G}`
    ? G extends Game
        ? Response_AllTimeLeaderboard<G>
        : never
    : never;
