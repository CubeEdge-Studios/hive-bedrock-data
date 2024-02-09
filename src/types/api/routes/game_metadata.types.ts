import { Game } from "../../games.types";
import { GameMetadata } from "../api.types";

export type Response_GameMetdata = GameMetadata;

export type Route_GameMetdata<T extends string> = T extends `/game/meta/${Game}`
    ? Response_GameMetdata
    : never;
