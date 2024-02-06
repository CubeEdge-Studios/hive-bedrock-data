import { GAME } from "../games.types";
import * as API from "./games/index.types";

export * from "./metadata/game.types";
export * from "./metadata/global_statistics.types";
export * from "./metadata/maps.types";
export * from "./metadata/player.types";

export interface AllTimeStatistics {
    [GAME.BlockDrop]: API.AllTimeLeaderboard_DROP;
    [GAME.BlockParty]: API.AllTimeStatistics_PARTY;
    [GAME.CaptureTheFlag]: API.AllTimeStatistics_CTF;
    [GAME.DeathRun]: API.AllTimeStatistics_DR;
    [GAME.Gravity]: API.AllTimeStatistics_GRAV;
    [GAME.GroundWars]: API.AllTimeStatistics_GROUND;
    [GAME.HideAndSeek]: API.AllTimeStatistics_HIDE;
    [GAME.JustBuild]: API.AllTimeStatistics_BUILD;
    [GAME.MurderMystery]: API.AllTimeStatistics_MURDER;
    [GAME.Skywars]: API.AllTimeStatistics_SKY;
    [GAME.SurvivalGames]: API.AllTimeStatistics_SG;
    [GAME.TheBridge]: API.AllTimeStatistics_BRIDGE;
    [GAME.TreasureWars]: API.AllTimeStatistics_WARS;
}

export interface MonthlyStatistics {
    [GAME.BlockDrop]: API.MonthlyStatistics_DROP;
    [GAME.BlockParty]: API.MonthlyStatistics_PARTY;
    [GAME.CaptureTheFlag]: API.MonthlyStatistics_CTF;
    [GAME.DeathRun]: API.MonthlyStatistics_DR;
    [GAME.Gravity]: API.MonthlyStatistics_GRAV;
    [GAME.GroundWars]: API.MonthlyStatistics_GROUND;
    [GAME.HideAndSeek]: API.MonthlyStatistics_HIDE;
    [GAME.JustBuild]: API.MonthlyStatistics_BUILD;
    [GAME.MurderMystery]: API.MonthlyStatistics_MURDER;
    [GAME.Skywars]: API.MonthlyStatistics_SKY;
    [GAME.SurvivalGames]: API.MonthlyStatistics_SG;
    [GAME.TheBridge]: API.MonthlyStatistics_BRIDGE;
    [GAME.TreasureWars]: API.MonthlyStatistics_WARS;
}

export interface AllTimeLeaderboard {
    [GAME.BlockDrop]: API.AllTimeLeaderboard_DROP;
    [GAME.BlockParty]: API.AllTimeLeaderboard_PARTY;
    [GAME.CaptureTheFlag]: API.AllTimeLeaderboard_CTF;
    [GAME.DeathRun]: API.AllTimeLeaderboard_DR;
    [GAME.Gravity]: API.AllTimeLeaderboard_GRAV;
    [GAME.GroundWars]: API.AllTimeLeaderboard_GROUND;
    [GAME.HideAndSeek]: API.AllTimeLeaderboard_HIDE;
    [GAME.JustBuild]: API.AllTimeLeaderboard_BUILD;
    [GAME.MurderMystery]: API.AllTimeLeaderboard_MURDER;
    [GAME.Skywars]: API.AllTimeLeaderboard_SKY;
    [GAME.SurvivalGames]: API.AllTimeLeaderboard_SG;
    [GAME.TheBridge]: API.AllTimeLeaderboard_BRIDGE;
    [GAME.TreasureWars]: API.AllTimeLeaderboard_WARS;
}

export interface MonthlyLeaderboard {
    [GAME.BlockDrop]: API.MonthlyLeaderboard_DROP;
    [GAME.BlockParty]: API.MonthlyLeaderboard_PARTY;
    [GAME.CaptureTheFlag]: API.MonthlyLeaderboard_CTF;
    [GAME.DeathRun]: API.MonthlyLeaderboard_DR;
    [GAME.Gravity]: API.MonthlyLeaderboard_GRAV;
    [GAME.GroundWars]: API.MonthlyLeaderboard_GROUND;
    [GAME.HideAndSeek]: API.MonthlyLeaderboard_HIDE;
    [GAME.JustBuild]: API.MonthlyLeaderboard_BUILD;
    [GAME.MurderMystery]: API.MonthlyLeaderboard_MURDER;
    [GAME.Skywars]: API.MonthlyLeaderboard_SKY;
    [GAME.SurvivalGames]: API.MonthlyLeaderboard_SG;
    [GAME.TheBridge]: API.MonthlyLeaderboard_BRIDGE;
    [GAME.TreasureWars]: API.MonthlyLeaderboard_WARS;
}
