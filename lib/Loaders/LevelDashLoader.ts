import { readdirSync } from "fs";
import { commandContext, loaderOptions } from "../Context";

export default function({ cache }: loaderOptions) {
    let dir = readdirSync("./dist/lib/level_dash_commands/");

    for (let file of dir) {
        let command: commandContext = require(`../level_dash_commands/${file}`);
        cache.commands.set(command.name, command);
    }
}