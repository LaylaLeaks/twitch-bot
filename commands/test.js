module.exports = {
    name: '!test',
    aliases: ['!tst', '!t'],
    requiredPrefix: true,
    execute(client, channel, user, args) {
        client.say(channel, `${user.username} this is a test command`);
    }
};
