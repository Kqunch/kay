const Discord = require("discord.js");
const client = new Discord.Client();

// Set the prefix
let prefix = "!";
client.on("message", (message) => {
  // Exit and stop if the prefix is not there or if user is a bot
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("yes");
  } else
  if (message.content.startsWith(prefix + "marry")) {
    message.channel.send("yes");
  }
});

client.login(NDM5MjE4MjQ3NTExMDQ4MTk5.DdJfZg.EyEwzXglpuu7qK5KhAHZUsFnrcs);
