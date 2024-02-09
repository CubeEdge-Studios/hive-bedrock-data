export interface GameMetadata {
    name: string;
    shortName: string;
    maxLevel: number;
    allowPrestiging: boolean;
    maxPrestige: number;
    experienceToLevel: {
        [xp: string]: number;
    };
}
