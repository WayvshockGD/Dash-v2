import Command from "../Command";

export = new Command(({ message }) => {
    return message.channel.createMessage({
        embed: {
            title: "h"
        }
    })
}, { 
    name: "stats", 
    description: "yes" 
})