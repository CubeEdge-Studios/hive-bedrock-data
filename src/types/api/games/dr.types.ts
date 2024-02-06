import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_DR {
  xp: number;
  played: number;
  victories: number;
  kills: number;
  deaths: number;
  checkpoints: number;
  activated: number;
}

export type AllTimeStatistics_DR = AllTimeStatistics & Statistics_DR;
export type MonthlyStatistics_DR = MonthlyStatistics & Statistics_DR;
export type AllTimeLeaderboard_DR = AllTimeStatistics & Statistics_DR;
export type MonthlyLeaderboard_DR = MonthlyStatistics & Statistics_DR;
