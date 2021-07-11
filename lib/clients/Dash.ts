import Eris, { Client } from "eris";
import { dash } from "../config.json";
import { cacheTypes, commandContext } from "../Context";
import MessageHandler from "../handlers/MessageHandler";
import loadDashCommands from "../Loaders/DashLoader";

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