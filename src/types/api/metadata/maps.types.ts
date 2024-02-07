import { Game } from "../../games.types";

export interface MapMetadata {
    name: string;
    season: MapMetadata_Season;
    variant: MapMetadata_Variant;
    image: string;
}

export enum MapMetadata_Season {
    None = "NO_SEASON",
    Winter = "WINTERFEST",
    Spring = "SPRING",
    Summer = "SUMMER",
    Halloween = "HALLOWEEN",
    Autumn = "AUTUMN",
}

// currently the same as Game_Variant_Type
export enum MapMetadata_Variant {
    Regular = "REGULAR",
    Duos = "DUOS",
    Trios = "TRIOS",
    Squads = "SQUADS",
    Mega = "MEGA",
    Royale = "ROYALE",
}
