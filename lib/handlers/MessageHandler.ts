import Eris from "eris";
import Dash from "../clients/Dash";
import LevelDash from "../clients/LevelDash";
import config from "../config.json";

interface clients {
    levelDash?: LevelDash;
    dash?: Dash;
}

export = class MessageHandler {
    constructor(client: clients, message: Eris.Message) {
        let args;

        if (client.dash) {
            args = message.content.slice(config.dash.prefix.length)
                                  .trim()
                                  .split(" ");
            let command = client.dash.caches.commands.get(args[0]);
            if (!command) return;
            command.execute({
                clients: client,
                args: args,
                guild: (<Eris.GuildChannel>message.channel).guild,
                message: message
            })
        } else if (client.levelDash) {
            args = message.content.slice(config.levelDash.prefix.length)
                                  .trim()
                                  .split(" ");
            let command = client.levelDash.caches.commands.get(args[0]);
            if (!command) return;
            command.execute({
                clients: client,
                args: args,
                guild: (<Eris.GuildChannel>message.channel).guild,
                message: message
            })
        }
    }
}