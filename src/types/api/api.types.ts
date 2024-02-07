import { Game } from "../games.types";
import * as API from "./games/index.types";

export * from "./metadata/game.types";
export * from "./metadata/global_statistics.types";
export * from "./metadata/maps.types";
export * from "./metadata/player.types";

export interface AllTimeStatistics {
    [Game.BlockDrop]: API.AllTimeStatistics_DROP;
    [Game.BlockParty]: API.AllTimeStatistics_PARTY;
    [Game.CaptureTheFlag]: API.AllTimeStatistics_CTF;
    [Game.DeathRun]: API.AllTimeStatistics_DR;
    [Game.Gravity]: API.AllTimeStatistics_GRAV;
    [Game.GroundWars]: API.AllTimeStatistics_GROUND;
    [Game.HideAndSeek]: API.AllTimeStatistics_HIDE;
    [Game.JustBuild]: API.AllTimeStatistics_BUILD;
    [Game.MurderMystery]: API.AllTimeStatistics_MURDER;
    [Game.Skywars]: API.AllTimeStatistics_SKY;
    [Game.SurvivalGames]: API.AllTimeStatistics_SG;
    [Game.TheBridge]: API.AllTimeStatistics_BRIDGE;
    [Game.TreasureWars]: API.AllTimeStatistics_WARS;
}

export interface MonthlyStatistics {
    [Game.BlockDrop]: API.MonthlyStatistics_DROP;
    [Game.BlockParty]: API.MonthlyStatistics_PARTY;
    [Game.CaptureTheFlag]: API.MonthlyStatistics_CTF;
    [Game.DeathRun]: API.MonthlyStatistics_DR;
    [Game.Gravity]: API.MonthlyStatistics_GRAV;
    [Game.GroundWars]: API.MonthlyStatistics_GROUND;
    [Game.HideAndSeek]: API.MonthlyStatistics_HIDE;
    [Game.JustBuild]: API.MonthlyStatistics_BUILD;
    [Game.MurderMystery]: API.MonthlyStatistics_MURDER;
    [Game.Skywars]: API.MonthlyStatistics_SKY;
    [Game.SurvivalGames]: API.MonthlyStatistics_SG;
    [Game.TheBridge]: API.MonthlyStatistics_BRIDGE;
    [Game.TreasureWars]: API.MonthlyStatistics_WARS;
}

export interface AllTimeLeaderboard {
    [Game.BlockDrop]: API.AllTimeLeaderboard_DROP[];
    [Game.BlockParty]: API.AllTimeLeaderboard_PARTY[];
    [Game.CaptureTheFlag]: API.AllTimeLeaderboard_CTF[];
    [Game.DeathRun]: API.AllTimeLeaderboard_DR[];
    [Game.Gravity]: API.AllTimeLeaderboard_GRAV[];
    [Game.GroundWars]: API.AllTimeLeaderboard_GROUND[];
    [Game.HideAndSeek]: API.AllTimeLeaderboard_HIDE[];
    [Game.JustBuild]: API.AllTimeLeaderboard_BUILD[];
    [Game.MurderMystery]: API.AllTimeLeaderboard_MURDER[];
    [Game.Skywars]: API.AllTimeLeaderboard_SKY[];
    [Game.SurvivalGames]: API.AllTimeLeaderboard_SG[];
    [Game.TheBridge]: API.AllTimeLeaderboard_BRIDGE[];
    [Game.TreasureWars]: API.AllTimeLeaderboard_WARS[];
}

export interface MonthlyLeaderboard {
    [Game.BlockDrop]: API.MonthlyLeaderboard_DROP[];
    [Game.BlockParty]: API.MonthlyLeaderboard_PARTY[];
    [Game.CaptureTheFlag]: API.MonthlyLeaderboard_CTF[];
    [Game.DeathRun]: API.MonthlyLeaderboard_DR[];
    [Game.Gravity]: API.MonthlyLeaderboard_GRAV[];
    [Game.GroundWars]: API.MonthlyLeaderboard_GROUND[];
    [Game.HideAndSeek]: API.MonthlyLeaderboard_HIDE[];
    [Game.JustBuild]: API.MonthlyLeaderboard_BUILD[];
    [Game.MurderMystery]: API.MonthlyLeaderboard_MURDER[];
    [Game.Skywars]: API.MonthlyLeaderboard_SKY[];
    [Game.SurvivalGames]: API.MonthlyLeaderboard_SG[];
    [Game.TheBridge]: API.MonthlyLeaderboard_BRIDGE[];
    [Game.TreasureWars]: API.MonthlyLeaderboard_WARS[];
}
