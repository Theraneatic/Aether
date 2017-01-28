require('events').EventEmitter.prototype._maxListeners = 100;

var Discord = require("discord.js");

var bot = new Discord.Client();

let filter = false

let welcome = false

const now = require('performance-now')

bot.on('ready', (g,m) => {
    console.log('Bot online and ready to recieve commands.');
});

bot.on("message", function (message) {
    if (message.content === "help") {
		message.channel.sendMessage("Hi! My name is Aether. My prefix is *, and to learn all of my commands, please read this: https://github.com/Theraneatic/Aether/blob/master/Help . My GitHub is linked here: https://github.com/Theraneatic/Aether. Have a nice day!");
}});

bot.on("guildMemberAdd", (g, m) => {
    console.log(`${m.user.username} joined ${g.name}`);
    g.defaultChannel.sendMessage(`Everybody say hi to ${m.user.username}! Type help to learn about me!`);
});

bot.on("message", function (message) {
    if (message.content === "*createrole") {
      message.guild.createRole().then(role => {
        message.channel.sendMessage(`Role Created!`);
      }).catch(console.log);
    }
});

bot.on("message", function (message) {
	if (message.content === "*permissions") {
      message.channel.sendMessage("This is what you can do:\n" +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
    }
});

bot.on ("message", function (message) {
    if (message.content === "*stats") {
      let m = '';
      m += `There are ${message.guild.channels.size} channels in this server\n`;
      m += `There are ${message.guild.members.size} members of this server\n`;
      m += `I am in ${bot.guilds.size} servers\n`;
      m += `I am in servers with a total amount of ${bot.users.size} people.\n`;
      message.channel.sendMessage(m);
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
    if (message.content === "*filterenable" && !filter) {
        filter = true;
        message.channel.sendMessage("Filter enabled.");
    }

    if (message.content === "*filterdisable" && filter) {
        filter = false;
        message.channel.sendMessage("Filter disabled.");
    }
});

bot.on("message", function (message) {
    if (message.author.id == "");
        if (message.content === "*restart") {
            message.channel.sendMessage("Restarting...");
            bot.destroy()
            bot.login("MjY1Mjg5OTQxNDQ4MTMwNTYw.C0ySSQ.kT38kvPUL3frKnNEAeT65x5Zu3o")
		}
});

bot.on("message", function (message) {
    if (message.author.id == "");
        if (message.content === "*shutdown") {
            message.channel.sendMessage("Shutting down...");
            bot.destroy()
		}
});

bot.on("message", function (message) {
    if (message.content === "*git") {
		message.channel.sendMessage("My GitHub is linked here! https://github.com/Theraneatic/Aether")
	}
});

bot.on("message", function (message) {
    if (message.content === "*deletechannel");
          message.channel.delete()
            .then()
            .catch(console.error);
        }
});

bot.on("message", function (message) {
    if (message.content === "*channelid") {
        message.channel.sendMessage(`${message.channel.id}`)
          .then()
          .catch(console.error);
    }
});

bot.on("message", function (message) {
    if (message.content === "*botping") {
        message.channel.sendMessage(`${bot.ping}`)
    }
});

bot.login("");
