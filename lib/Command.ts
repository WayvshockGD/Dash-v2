import Eris from "eris";
import { commandContext, commandFunction } from "./Context";

type commandFn = ({}: commandFunction) => void;

export = class Command {
    name: string;
    description: string;
    run: commandFn;
    constructor(fn: commandFn, options: commandContext) {
        this.name = options.name;
        this.description = options.description;
        this.run = fn;
    }

    public execute({ message, args, guild, clients }: commandFunction) {
        this.run({
            message,
            args,
            guild,
            clients
        })
    }
}