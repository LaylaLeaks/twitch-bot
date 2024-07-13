module.exports = {
    name: '!test2',
    aliases: ['!tst2', '!t2'],
    requiredPrefix: true,
    execute(client, channel, user, args) {
        client.say(channel, `Test command 2`);
    }
};
