import Command from "../Command";

export = new Command(({ message, clients, guild }) => {
    return message.channel.createMessage({
        embed: {
            title: "Dash",
            fields: [
                {
                    name: "Users",
                    value: `${clients.dash?.users.size}`
                },
                {
                    name: "Channels",
                    value: guild.channels.size.toString()
                }
            ]
        }
    })
}, { 
    name: "stats", 
    description: "yes" 
})