module.exports = {
    run: function(client, channel, user, message, _self) {

        var msg     = message.split(' '),
            command = msg[0].toLowerCase();
        msg.shift();
        var args = msg,
            isMod   = user.mod,
            isSub   = user.subscriber,
            isTurbo = user.turbo,
            username = user.username;

            switch(command) {

                // here commands

                case '!test' :
                    client.say(channel, `${username} this is a test command`);
                break;

                case '!test2' :
                    client.say(channel, `Test command 2`);
                break;
            }
    }
}