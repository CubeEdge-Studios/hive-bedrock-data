import { MapSeason, MapVariant } from "../../enums";

export interface MapMetadata {
    name: string;
    season: MapSeason;
    variant: MapVariant;
    image: string;
}
