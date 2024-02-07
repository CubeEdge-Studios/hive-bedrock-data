import { Game } from "../../games.types";
import { GameMetadata } from "../api.types";

export type Path_GameMetadata<G extends Game> = `/game/meta/${G}`;
export type Route_GameMetadata<G extends Game> = GameMetadata<G>;
