const fs = require('fs');
const path = require('path');

const commands = new Map();
const aliases = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, 'commands')).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(path.join(__dirname, 'commands', file));
    commands.set(command.name, command);

    if (command.aliases && command.aliases.length) {
        command.aliases.forEach(alias => {
            aliases.set(alias, command.name);
        });
    }
}

module.exports = {
    run: function(client, channel, user, message, _self) {
        var msg = message.split(' ');
        var commandName = msg[0].toLowerCase();
        msg.shift();
        var args = msg;

        if (aliases.has(commandName)) {
            commandName = aliases.get(commandName);
        }

        let command = commands.get(commandName);

        if (!command && commandName.startsWith('!')) {
            commandName = commandName.slice(1);

            if (aliases.has(commandName)) {
                commandName = aliases.get(commandName);
            }

            command = commands.get(commandName);
        }

        if (!command || (command.requiresPrefix && message[0] !== '!')) return;

        try {
            command.execute(client, channel, user, args);
        } catch (error) {
            console.error(`Error executing ${commandName}:`, error);
        }
    }
};
