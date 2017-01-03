require('events').EventEmitter.prototype._maxListeners = 100;

var Discord = require("discord.js");
 
var bot = new Discord.Client();

let filter = false

const now = require('performance-now')

bot.on('ready', (g,m) => {
    console.log('Bot online and ready to recieve commands.');
});

bot.on("message", function (message) {
    if (message.content === "help") {
		message.channel.sendMessage("Hi! My name is Aether. My prefix is *, and to learn all of my commands, please read this: (link here). My GitHub is linked here: (link). Have a nice day!");
}});
  
bot.on("guildMemberAdd", (g, m) => {
    console.log(`${m.user.username} joined ${g.name}`);
    g.defaultChannel.sendMessage(`Everybody say hi to ${m.user.username}! Type help to learn about me!`);
});

bot.on("message", function (message) {
    if (message.content === "*createrole") {
      message.guild.createRole().then(role => {
        message.channel.sendMessage(`Role Created! ${role.name}`);
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
});

//thanks to Ovy for helping me with fixing the enable and disable commands.

bot.on("message", function (message) {
    if (message.content === "*filter" && !filter) {
        filter = true;
        message.channel.sendMessage("Filter enabled.");
    }

    if (message.content === "*filterdisable" && filter) {
        filter = false;
        message.channel.sendMessage("Filter disabled.");
    }
});

bot.on("message", function (message) {
    if (message.author.id == "154421106684461056");
        if (message.content === "*shutdown") {
            message.channel.sendMessage("Shutting down...");
            bot.destroy()
		}
});

function calcUptime() {
    var time = 0;
	var days = 0;
	var hours =0;
	var minutes =0;
	var seconds =0;
	var temp = Math.floor(bot.uptime / 1000);
	seconds = temp % 60;
	temp = Math.floor(temp / 60);
	minutes = temp % 60;
	temp = Math.floor(temp / 60);
	hours = temp % 24;
	temp = Math.floor(temp / 24);
	days = temp;
	var totalDays = " days ";
	if (days = 1) {
		totalDays = " day "
	}
	
	var Text = "I have been online for `" + days + totalDays + hours + ":" + minutes + ":" + seconds + "`";"
	
	return Text;
};

bot.login("MjY1Mjg5OTQxNDQ4MTMwNTYw.C0s-Fg.hBmoa2WLWB0xyyySl23hV6ys08k");