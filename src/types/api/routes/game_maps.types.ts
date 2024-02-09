import { Game } from "../../games.types";
import { MapMetadata } from "../api.types";

export type Response_GameMaps = MapMetadata[];

export type Route_GameMaps<T extends string> = T extends `/game/map/${Game}`
    ? Response_GameMaps
    : never;
