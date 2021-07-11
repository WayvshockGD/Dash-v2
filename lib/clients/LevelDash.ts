import Eris from "eris";
import { levelDash } from "../config.json";
import { cacheTypes } from "../Context";
import MessageHandler from "../handlers/MessageHandler";
import LevelDashLoader from "../Loaders/LevelDashLoader";

export = class LevelDash extends Eris.Client {

    caches: cacheTypes<string>;

    constructor(opts?: Eris.ClientOptions) {
        super(levelDash.token, opts);

        this.caches = {
            commands: new Map()
        }

        this.startGateway();
        LevelDashLoader({
            cache: this.caches
        })
        this.on("messageCreate", this.onMessage);
    }

    public onMessage(m: Eris.Message) {
        new MessageHandler({ levelDash: this }, m);
    }

    private startGateway() {
        this.connect().catch(e => {
            console.log(e);
        })
    }
}