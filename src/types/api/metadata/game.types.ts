export type GlobalCosmeticUnlock =
    | {
          name: string;
          icon: string;
          type: "avatar";
      }
    | {
          display: string;
          type: "hub_title";
      }
    | {
          name: string;
          costume: "costume";
      };

export interface LevelUnlock {
    name: string;
    icon: string | null;
    type: string;
    global: boolean;
    globalCosmetic?: GlobalCosmeticUnlock;
}

export interface LevelUnlockType {
    name: string;
    icon: string | null;
    default: string;
}

export interface GameMetadata {
    name: string;
    shortName: string;
    maxLevel: number;
    allowPrestiging: boolean;
    maxPrestige: number;
    experienceToLevel: {
        [xp: string]: number;
    };
    levelUnlocks: {
        [level: string]: LevelUnlock[];
    };
    levelUnlockTypes: {
        [type: string]: LevelUnlockType;
    };
}
