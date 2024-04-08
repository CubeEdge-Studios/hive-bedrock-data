import { PlayerRank } from "../../enums";
import { Game } from "../../games.types";

export interface PlayerMetadata {
    UUID: string;
    xuid: number;

    username: string;
    username_cc: string;
    rank: PlayerRank;

    first_played: number;
    daily_login_streak?: number;
    longest_daily_login_streak?: number;

    quest_count?: number;
    friend_count?: number;

    hub_title_count: number;
    hub_title_unlocked?: string[];
    equipped_hub_title?: string;

    avatar_count: number;
    avatar_unlocked?: PlayerMetadata_Avatar[];
    equipped_avatar?: PlayerMetadata_Avatar;

    costume_count: number;
    costume_unlocked?: string[];
    equipped_costume?: string;

    backbling_count: number;
    "cosmetics.backbling"?: PlayerMetadata_Backbling[];
    equipped_backbling?: PlayerMetadata_Backbling;

    hat_count: number;
    hat_unlocked?: PlayerMetadata_Hat[];

    pets: string[];
    mounts: string[];
}

export interface PlayerMetadata_Nested {
    main: PlayerMetadata;
}

export interface PlayerMetadata_Avatar {
    url: string;
    name: string;
}

export interface PlayerMetadata_Backbling {
    name: string;
    icon: string;
    rarity: string;
}

export interface PlayerMetadata_Hat {
    name: string;
    icon: string;
    rarity: string;
}

export interface PlayerMetadata_Title_Basic {
    display: string;
}
export interface PlayerMetadata_Title_StatTrack {
    display: string;
    special_type: "stat_track";
    stat_track: [
        {
            game: Game;
            placeholder: string;
            key: string;
        }
    ];
}
export interface PlayerMetadata_Title_StatTrack_Calculation {
    display: string;
    special_type: "stat_track";
    stat_track: [
        {
            game: Game;
            placeholder: string;
            keys: string[];
            operation: "add" | "subtract" | "divide";
        }
    ];
}
export type PlayerMetadata_Title =
    | PlayerMetadata_Title_Basic
    | PlayerMetadata_Title_StatTrack
    | PlayerMetadata_Title_StatTrack_Calculation;
