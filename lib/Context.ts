import Eris from "eris";
import Dash from "./clients/Dash";
import LevelDash from "./clients/LevelDash";

export interface commandContext {
    [x: string]: any;
    name: string;
    description: string;
}

export interface cacheTypes<T> {
    commands: Map<T, commandContext>;
}

export interface loaderOptions {
    cache: cacheTypes<string>;
}

export interface commandFunction {
    clients: {
        dash?: Dash;
        levelDash?: LevelDash;
    }
    message: Eris.Message;
    guild: Eris.Guild;
    args: string[];
}