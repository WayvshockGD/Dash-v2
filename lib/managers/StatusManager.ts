import Eris from "eris";
import Dash from "../clients/Dash";
import LevelDash from "../clients/LevelDash";

interface options {
    type: Eris.Status;
    name: string;
    run: (type: Eris.Status) => Eris.Status;
}

export = class StatusManager {
    constructor(opts: options, client: Dash | LevelDash) {
        client.editStatus(opts.type, {
            name: opts.name
        });
        return opts.run(opts.type);
    }
}