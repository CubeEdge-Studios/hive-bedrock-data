import { AllTimeStatistics, MonthlyStatistics } from "./default.types";

interface Statistics_GROUND {
  xp: number;
  played: number;
  victories: number;
  kills: number;
  deaths: number;
  blocks_destroyed: number;
  blocks_placed: number;
  projectiles_fired: number;
}

export type AllTimeStatistics_GROUND = AllTimeStatistics & Statistics_GROUND;
export type MonthlyStatistics_GROUND = MonthlyStatistics & Statistics_GROUND;
export type AllTimeLeaderboard_GROUND = AllTimeStatistics & Statistics_GROUND;
export type MonthlyLeaderboard_GROUND = MonthlyStatistics & Statistics_GROUND;
