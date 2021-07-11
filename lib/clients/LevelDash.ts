import Eris from "eris";
import { levelDash } from "../config.json";
import { cacheTypes } from "../Context";
import MessageHandler from "../handlers/MessageHandler";
import LevelDashLoader from "../Loaders/LevelDashLoader";
import StatusManager from "../managers/StatusManager";

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
        });
        this.on("ready", () => {
            new StatusManager({
                name: "Watching Levels Piling up",
                type: "idle",
                run: (type) => {
                    console.log(`Started level dash status ${type}`);
                    return type;
                }
            }, this);
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