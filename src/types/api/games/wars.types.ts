import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_WARS {
  xp: number;
  played: number;
  victories: number;
  kills: number;
  final_kills: number;
  deaths: number;
  treasure_destroyed: number;
  prestige: number;
}

export type AllTimeStatistics_WARS = AllTimeStatistics & Statistics_WARS;
export type MonthlyStatistics_WARS = MonthlyStatistics & Statistics_WARS;
export type AllTimeLeaderboard_WARS = AllTimeStatistics & Statistics_WARS;
export type MonthlyLeaderboard_WARS = MonthlyStatistics & Statistics_WARS;
