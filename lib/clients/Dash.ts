import Eris, { Client } from "eris";
import { dash } from "../config.json";
import { cacheTypes, commandContext } from "../Context";
import MessageHandler from "../handlers/MessageHandler";
import loadDashCommands from "../Loaders/DashLoader";
import StatusManager from "../managers/StatusManager";

export = class Dash extends Client {
    
    caches: cacheTypes<string>;

    constructor(opts?: Eris.ClientOptions) {
        super(dash.token, opts);

        this.caches = {
            commands: new Map()
        }

        this.startGateway();
        loadDashCommands({ 
            cache: this.caches 
        });
        this.on("ready", () => {
            new StatusManager({
                name: `Watching ${this.users.size} users`,
                type: "dnd",
                run: (type) => {
                    console.log(`Started dash status ${type}`);
                    return type;
                }
            }, this);
        })
        this.on("messageCreate", this.onMessage);
    }

    public onMessage(m: Eris.Message) {
        new MessageHandler({ dash: this }, m);
    }

    private startGateway() {
        this.connect().catch(e => {
            console.log(e);
        })
    }
} 