import { Game } from "../../games.types";
import { MapMetadata } from "../api.types";

export type Path_GameMaps<G extends Game> = `/game/map/${G}`;
export type Route_GameMaps = MapMetadata[];
