import Command from "../Command";

export = new Command(({ message, clients, guild }) => {
    return message.channel.createMessage({
        embed: {
            title: "Level Dash",
            fields: [
                {
                    name: "Users",
                    value: `${clients.levelDash?.users.size}`
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