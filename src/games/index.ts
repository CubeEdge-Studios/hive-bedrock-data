import { Game } from "../types/games.types";

export const IMAGE_CDN = "https://cdn.playhive.com";

import bridge from "./bridge";
import build from "./build";
import ctf from "./ctf";
import dr from "./dr";
import drop from "./drop";
import grav from "./grav";
import ground from "./ground";
import hide from "./hide";
import murder from "./murder";
import party from "./party";
import sg from "./sg";
import sky from "./sky";
import wars from "./wars";

export const Games = {
    [Game.BlockDrop]: drop,
    [Game.BlockParty]: party,
    [Game.CaptureTheFlag]: ctf,
    [Game.DeathRun]: dr,
    [Game.Gravity]: grav,
    [Game.GroundWars]: ground,
    [Game.HideAndSeek]: hide,
    [Game.JustBuild]: build,
    [Game.MurderMystery]: murder,
    [Game.Skywars]: sky,
    [Game.SurvivalGames]: sg,
    [Game.TheBridge]: bridge,
    [Game.TreasureWars]: wars,
};
