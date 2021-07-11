import Command from "../Command";

export = new Command(({ message, clients }) => {
    return message.channel.createMessage({
        embed: {
            title: "Dash",
            fields: [
                {
                    name: "users",
                    value: `${clients.dash?.users.size}`
                },
            ]
        }
    })
}, { 
    name: "stats", 
    description: "yes" 
})