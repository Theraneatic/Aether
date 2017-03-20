require('events').EventEmitter.prototype._maxListeners = 100;

var Discord = require("discord.js");

var bot = new Discord.Client();

let filter = false

let spam = false

const now = require('performance-now')

var information = require('./information.json');

bot.on('ready', (g,m) => {
    console.log('Bot online and ready to recieve commands. V0.0.9');
});

bot.on ('disconnect', () => {
    console.log(`Bot has been disconnected from Discord on ` + new Date +'!');
});

bot.on('ready', () => {
    bot.user.setGame('*help');
    bot.user.setStatus('online');
});

bot.on ('reconnecting', () => {
    console.log(`Bot reconnected on ` + new Date + '!');
});

bot.on("message", function (message) {
    if (message.content === "*help") {
        bot.users.get(message.author.id).sendMessage("Hi! My name is Aether. My prefix is *, and to learn all of my commands, please read this: https://github.com/Theraneatic/Aether/blob/master/Help . My GitHub is linked here: https://github.com/Theraneatic/Aether. Have a nice day!");
    }
});

bot.on("message", function (message) {
  if (!message.guild) return;
    if (message.content === "*createrole") {
        if (message.member.hasPermission(`MANAGE_ROLES_OR_PERMISSIONS`)) {
            message.guild.createRole().then(role => {
            message.channel.sendMessage(`Role Created!`);
        }).catch(console.log);
      }
    }
});

bot.on("message", function (message) {
  if (!message.guild) return;
	if (message.content === "*perms") {
      message.channel.sendMessage("This is what you can do:\n" +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
    }
});

bot.on("message", function (message) {
    if (message.content ==="*ping") {
      var startTime = now();
      message.channel.sendMessage("Checking ping...")
        .then(message => {
            var endTime = now();
            return message.edit(`Pong! ${(endTime - startTime).toFixed(3)} milliseconds have passed.`);
        }).catch(console.error);
}});

bot.on("message", function (message) {
	if (filter === true && message.content.includes("hell")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("damn")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("ass")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("shit")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("bitch")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("whore")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("fuck")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("slut")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("cunt")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("faggot")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("nigger")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("nigga")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("fgt")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("cracker")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("chink")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("gook")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("dyke")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Hell")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Damn")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Ass")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Shit")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Bitch")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Whore")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Fuck")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Slut")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Cunt")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Faggot")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Nigger")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Nigga")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Fgt")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Cracker")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Chink")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Gook")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Dyke")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("porn")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Porn")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Dick")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("dick")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Pussy")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("pussy")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("anal")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Anal")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Blowjob")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("blowjob")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("anus")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Anus")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("BDSM")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("bdsm")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Vag")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("vag")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Vagina")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("vagina")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("Sex")) {
			message.delete(message)
		}
	if (filter === true && message.content.includes("sex")) {
			message.delete(message)
		}
  if (filter === true && message.content.includes("cock")) {
  		message.delete(message)
  	}
  if (filter === true && message.content.includes("Cock")) {
    	message.delete(message)
  	}
  if (filter === true && message.content.includes("bj")) {
  		message.delete(message)
  	}
  if (filter === true && message.content.includes("BJ")) {
  		message.delete(message)
    }
  if (filter === true && message.content.includes("sex")) {
  		message.delete(message)
    }
  if (filter === true && message.content.includes("cuck")) {
      message.delete(message)
  }
  if (filter === true && message.content.includes("Cuck")) {
  		message.delete(message)
  }
  if (filter === true && message.content.includes("rape")) {
  		message.delete(message)
  }
  if (filter === true && message.content.includes("Rape")) {
  		message.delete(message)
  	}
});

//thanks to Ovy for helping me with fixing the enable and disable commands.

bot.on("message", function (message) {
  if (!message.guild) return;
    if (message.content === "*filterenable" && !filter) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
          filter = true;
          message.channel.sendMessage("Filter enabled.");
        }
    }
    if (message.content === "*filterdisable" && filter) {
        if (message.member.hasPermission(`MANAGE_MESSAGES`)) {
          filter = false;
          message.channel.sendMessage("Filter disabled.");
    }
}});

bot.on("message", function (message) {
    if (message.author.id == "154421106684461056")
        if (message.content === "*restart") {
            message.channel.sendMessage("Restarting...");
            bot.destroy();
            bot.login(information.token);
		}
});

bot.on("message", function (message) {
    if (message.author.id == "154421106684461056")
        if (message.content === "*shutdown") {
            message.channel.sendMessage("Shutting down...");
            bot.destroy();
		}
});

bot.on("message", function (message) {
    if (message.content === "*git") {
		message.channel.sendMessage("My GitHub is linked here! https://github.com/Theraneatic/Aether")
	}
});

bot.on("message", message => {
  if (!message.guild) return;
    if (message.content === "*deletechannel") {
      if (message.member.hasPermission(`MANAGE_CHANNELS`)) {
            message.channel.delete()
              .then()
              .catch(console.error);
        } else message.channel.sendMessage("You lack the permissions to complete this action.")
    }
});

bot.on("message", message => {
    if (message.content === "*invite") {
        bot.generateInvite(['SEND_MESSAGES', 'MANAGE_GUILD', "CREATE_INSTANT_INVITE", 'KICK_MEMBERS', 'BAN_MEMBERS', 'ADMINISTRATOR', 'MANAGE_CHANNELS', 'READ_MESSAGES', 'SEND_TTS_MESSAGES', 'MANAGE_MESSAGES', 'EMBED_LINKS', 'ATTACH_FILES', 'READ_MESSAGE_HISTORY', 'MENTION_EVERYONE', 'EXTERNAL_EMOJIS', 'CONNECT', 'SPEAK', 'MUTE_MEMBERS', 'DEAFEN_MEMBERS'/ +
        'USE_VAD', 'CHANGE_NICKNAME', 'MANAGE_NICKNAMES', 'MANAGE_ROLES_OR_PERMISSIONS'])
        .then(link => {
            message.channel.sendMessage(`Bot invite link with permissions was created. Invite me here: ${link}`);
        })
    }
});

bot.on("message", message => {
  if (!message.guild) return;
    if (message.content === "*channelinfo") {
        message.channel.sendMessage(`Here is the channel info:
        Channel ID: ${message.channel.id}
        Channel Created at: ${message.channel.createdAt}
        Channel Creation Timestamp: ${message.channel.createdTimestamp}
        Channel Type: ${message.channel.type}
        Guild: ${message.channel.guild}
        Typed Into: ${message.channel.typingCount} times.

        Commands you can use that will affect this channel are:
        *deletechannel`)
          .then()
          .catch(console.error);
    }
});

bot.on("message", message => {
  let member = (message.member);
  let guild = message.guild;
  if (!guild) return;
    if (message.content === "*guildinfo") {
        message.channel.sendMessage(`Here is the guild info:
        Guild Name: ${guild.name}
        Default Channel: ${message.guild.defaultChannel}
        Guild Created at: ${message.guild.createdAt}
        Guild Creation Timestamp: ${message.guild.createdTimestamp}
        Total Guild Members: ${message.guild.members.size}
        Total Channels: ${message.guild.channels.size}
        Guild Icon: ${message.guild.iconURL}
        Guild ID: ${message.guild.id}
        Guild Owner: ${message.guild.owner}
        Guild Owner ID: ${message.guild.ownerID}
        Guild Region: ${message.guild.region}
        Guild Verification Level: ${message.guild.verificationLevel}
        Commands you can use that will affect this guild are:
        *deletechannel
        *filterenable
        *filterdisable`)
          .then()
          .catch(console.error);
    }
});

bot.on("message", message => {
  if (!message.guild) return;
    if (message.content === "*myinfo") {
        message.channel.sendMessage(`Here is your info:
        My ID: ${message.author.id}
        Joined: ${message.member.joinedAt}
        Join Timestamp: ${message.member.joinedTimestamp}
        Avatar: ${message.author.avatarURL}
        Account Creation Time: ${message.author.createdAt}
        Display Name: ${message.member.displayName}
        Highest Role: ${message.member.highestRole}`)
    }
});

bot.on("message", message => {
    if (message.content === "*botinfo") {
        message.channel.sendMessage(`My information is here:
        ID: ${bot.user.id}
        Avatar: ${bot.user.avatarURL}
        Total Number of Servers : ${bot.guilds.size}
        Total Users: ${bot.users.size} people.
        Ping: ${bot.ping}
        Ready At: ${bot.readyAt}
        Invite Me: https://discordapp.com/oauth2/authorize?client_id=265289941448130560&permissions=477625407&scope=bot
        `)
    }
});

bot.on ('message', message => {
  if (!message.guild) return;
    if (message.content.startsWith('*prune ')) {
      if (message.memeber.hasPermission(['KICK_MEMBERS'])) {
        var args = message.content.split(' ').slice(1);
          var days = parseInt(args[0]);
              message.guild.pruneMembers(days)
                 .then(pruned => message.channel.sendMessage('This will prune ' + pruned + ' people!')).catch(console.error);
        } else message.channel.sendMessage('You lack the permissions to do this.');
    }
});

bot.on ('message', message => {
  if (!message.guild) return;
    if (message.content.startsWith('*prunedry')) {
        var args = message.content.split(' ').slice(1);
          var days = parseInt(args[0]);
              message.guild.pruneMembers(days, true)
                 .then(pruned => message.channel.sendMessage('This will prune ' + pruned + ' people!')).catch(console.error);
    }
});

//message.guild.pruneMembers(1 , true).then(pruned => message.reply( "This will prune " + pruned + " people!")).catch( console.error)

//ran number generator: console.log(Math.floor(Math.random()*100)) 1-100 (planned for lotteries)

bot.on ('message', message => {
    if (message.content === '*coinflip') {
      let randnum = ((Boolean(Math.floor(Math.random()*10) > 5)));
        if (randnum === true) {
          message.channel.sendMessage('Heads!');
        }
        if (randnum === false) {
          message.channel.sendMessage('Tails!');
        }
      }
});

bot.on ('message', message => {
    if (message.content.startsWith('*8ball '))
        var eightrand = ((Math.floor(Math.random()*10)));
            if (eightrand === 1) {
                message.channel.sendMessage('My sources indicate yes.')
            }
            if (eightrand === 2) {
                message.channel.sendMessage('My sources indicate no.')
            }
            if (eightrand === 3) {
                message.channel.sendMessage('Unclear. Please ask again.')
            }
            if (eightrand === 4) {
                message.channel.sendMessage('It is a possibilty.')
            }
            if (eightrand === 5) {
                message.channel.sendMessage('Without a doubt.')
            }
            if (eightrand === 6) {
                message.channel.sendMessage('Concentrate and ask again.')
            }
            if (eightrand === 7) {
                message.channel.sendMessage("Don't count on it.")
            }
            if (eightrand === 8) {
                message.channel.sendMessage('Reply hazy, try later.')
            }
            if (eightrand === 9) {
                message.channel.sendMessage('It is decidedly so.')
            }
            if (eightrand === 10) {
                message.channel.sendMessage('Very doubtful.')
            }
});

bot.on ('message', message => {
      if (message.content === '*gennum') {
          if (message.author.id === '154421106684461056') {
              let numgen = ((Math.floor(Math.random()*10000)));
                  message.channel.sendMessage('The number you generated was ' + numgen + '!');
          }
      }
});

bot.on('message', message => {
    if (message.author.id === "154421106684461056") {
        if (message.content.startsWith('*setstatus ')) {
            var args = message.content.split(' ').slice(1);
                let status = args[0]
                    bot.user.setStatus(status)
                    if (status === 'dnd') {
                        message.channel.sendMessage('Bot set to Do Not Disturb.');
                    }
                    if (status === 'online') {
                        message.channel.sendMessage('Bot has been set to Online.');
                    }
                    if (status === 'idle') {
                        message.channel.sendMessage('Bot has been set to Idle.');
                    }
                    if (status === 'invisible') {
                        bot.users.get(message.author.id).sendMessage('Bot has been set to Invisible.');
                    }
        }
    }
});

//Only accepts 'online', 'dnd', 'invisible', and 'idle'.

bot.on ('message', message => {
    if (spam === true && message.mentions.users.size > 5) {
        message.guild.ban(`${message.author.id}`).then(banned => message.author.sendMessage(`You are being banned for mass message spam. If you would like to appeal this ban, please contact the guild owner, ${message.guild.owner}.`));
    }
});

bot.on("message", function (message) {
  if (!message.guild) return;
    if (message.content === "*spamenable" && !spam) {
        if (message.member.hasPermission(`BAN_MEMBERS`)) {
          spam = true;
          message.channel.sendMessage("Spam protection enabled. This will ban a user that mentions more than 5 members in a single message.");
        }
    }
    if (message.content === "*spamdisable" && spam) {
        if (message.member.hasPermission(`BAN_MEMBERS`)) {
          spam = false;
          message.channel.sendMessage("Spam protection disabled.");
    }
}});

bot.on ('message', message => {
  if (message.content.startsWith('*roll ')) {
      var args = message.content.split(' ').slice(1);
          let dicenumber = parseInt(args[0]);
              var dice = ((Math.floor(Math.random()*6)));
                  if (dicenumber === dice) {
                      message.channel.sendMessage('You win with a roll of ' + dice + '!');
                  } else message.channel.sendMessage('You lost. You picked ' + dicenumber + ' but rolled a ' + dice + '.');
  }
});

bot.on ('message', message => {
    if (message.content.startsWith('*deletemsgs ')) {
        if (message.member.hasPermission('MANAGE_MESSAGES')) {
            var args = message.content.split(' ').slice(1);
                let messages = parseInt(args[0]);
                    message.channel.bulkDelete(messages);
        } else message.channel.sendMessage('You lack the permissions to use this command.');
    }
});

process.on ('unhandledRejection', err => {
    console.log('Uncaught promise error: \n' + err.stack);
});

bot.on ('message', message => {
    if (message.author.id === "154421106684461056") {
        if (message.content === '*guilds') {
            bot.users.get(message.author.id).sendMessage(Array.from(bot.guilds));
        }
    }
});

bot.on ('message', message => {
  if (!message.guild) return;
    if (message.author.id === "154421106684461056") {
      if (message.content.startsWith('*forceinvite')) {
        var args = message.content.split(' ').slice(1);
            let guildid = args[0];
              bot.guilds.get(guildid).channels.find('name', message.guild.defaultChannel.name).createInvite()
                .then(invite => bot.users.get(message.author.id).sendMessage('http://discord.gg/' + invite.code + " Invite for " + invite.guild + "."))
                    .catch(m => {
                        console.log(m);
                        bot.users.get(message.author.id).sendMessage('Error.')});
                }
      }
});

bot.login(information.token);
