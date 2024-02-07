export enum Game {
    HideAndSeek = "hide",
    DeathRun = "dr",
    TreasureWars = "wars",
    MurderMystery = "murder",
    SurvivalGames = "sg",
    Skywars = "sky",
    CaptureTheFlag = "ctf",
    BlockDrop = "drop",
    GroundWars = "ground",
    JustBuild = "build",
    BlockParty = "party",
    TheBridge = "bridge",
    Gravity = "grav",
}

export interface Game_Alt {
    [Game.HideAndSeek]: "HIDE";
    [Game.DeathRun]: "DR";
    [Game.TreasureWars]: "WARS";
    [Game.MurderMystery]: "MURDER";
    [Game.SurvivalGames]: "SG";
    [Game.Skywars]: "SKY";
    [Game.CaptureTheFlag]: "CTF";
    [Game.BlockDrop]: "DROP";
    [Game.GroundWars]: "GROUND";
    [Game.JustBuild]: "BUILD";
    [Game.BlockParty]: "PARTY";
    [Game.TheBridge]: "BRIDGE";
    [Game.Gravity]: "GRAV";
}

export interface Game_Name {
    [Game.HideAndSeek]: "Hide And Seek";
    [Game.DeathRun]: "Deathrun";
    [Game.TreasureWars]: "Treasure Wars";
    [Game.MurderMystery]: "Murder Mystery";
    [Game.SurvivalGames]: "Survival Games";
    [Game.Skywars]: "SkyWars";
    [Game.CaptureTheFlag]: "Capture The Flag";
    [Game.BlockDrop]: "Block Drop";
    [Game.GroundWars]: "Ground Wars";
    [Game.JustBuild]: "Just Build";
    [Game.BlockParty]: "Block Party";
    [Game.TheBridge]: "The Bridge";
    [Game.Gravity]: "Gravity";
}

export interface Game_Name_Alt {
    [Game.HideAndSeek]: "HideAndSeek";
    [Game.DeathRun]: "Deathrun";
    [Game.TreasureWars]: "TreasureWars";
    [Game.MurderMystery]: "MurderMystery";
    [Game.SurvivalGames]: "SurvivalGames";
    [Game.Skywars]: "SkyWars";
    [Game.CaptureTheFlag]: "CaptureTheFlag";
    [Game.BlockDrop]: "BlockDrop";
    [Game.GroundWars]: "GroundWars";
    [Game.JustBuild]: "JustBuild";
    [Game.BlockParty]: "BlockParty";
    [Game.TheBridge]: "TheBridge";
    [Game.Gravity]: "Gravity";
}

export enum Game_Variant_Type {
    Regular = "REGULAR",
    Duos = "DUOS",
    Trios = "TRIOS",
    Squads = "SQUADS",
    Mega = "MEGA",
    Royale = "ROYALE",
}

export enum Game_Variant_Queue_Type {
    Default = "DEFAULT",
    SkillBased = "SKILL",
}

export interface Game_Variant {
    id: string;
    type: Game_Variant_Type;
    name: string;
    team_size: number;
    team_amount: number;
    limited: boolean;
    queue_type: Game_Variant_Queue_Type;
}

export interface Game_Data<G extends Game> {
    id: G;
    short_name: Game_Alt[Game];
    name: Game_Name[Game];

    description: string;
    icon_url: string;

    max_level: number;
    canPrestige: boolean;
    max_prestige: number | null;
    level_increment: number;
    level_cap: number | null;
    level_multiplier?: number;

    colours: string[];

    modes: Game_Variant[];
}
