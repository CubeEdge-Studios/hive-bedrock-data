import { GAME } from "../types/GAMES";

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

export const GAMES = {
    [GAME.BlockDrop]: drop,
    [GAME.BlockParty]: party,
    [GAME.CaptureTheFlag]: ctf,
    [GAME.DeathRun]: dr,
    [GAME.Gravity]: grav,
    [GAME.GroundWars]: ground,
    [GAME.HideAndSeek]: hide,
    [GAME.JustBuild]: build,
    [GAME.MurderMystery]: murder,
    [GAME.Skywars]: sky,
    [GAME.SurvivalGames]: sg,
    [GAME.TheBridge]: bridge,
    [GAME.TreasureWars]: wars,
};
