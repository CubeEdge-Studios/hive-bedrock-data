import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_DROP {
  xp: number;
  played: number;
  victories: number;
  deaths: number;
  blocks_destroyed: number;
  powerups_collected: number;
  vaults_used: number;
}

export type AllTimeStatistics_DROP = AllTimeStatistics & Statistics_DROP;
export type MonthlyStatistics_DROP = MonthlyStatistics & Statistics_DROP;
export type AllTimeLeaderboard_DROP = AllTimeStatistics & Statistics_DROP;
export type MonthlyLeaderboard_DROP = MonthlyStatistics & Statistics_DROP;
