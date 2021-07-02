const Discord = require("discord.js")
const client = new Discord.Client()
const { prefix , TOKEN } = require("./JSON/server.json")
const fs = require("fs")

const bot = 
{
  commands : new Discord.Collection()
}

fs.readdir("./src/commands" , (err , file) =>
{
  if (err)
  {
    console.log(err);
  }

  const jsFiles = file.filter(f => f.split(".").pop() === "js");
  
  if ( jsFiles.length === 0 )
  {
    console.log(`I can't found command into this folder`);
  }
  else 
  {
    jsFiles.forEach(f =>
    {
      const command = require(`./commands/${f}`)

      for (const i in command.help.name) {
        if (Object.hasOwnProperty.call(command.help.name, i)) {
          const element = command.help.name[i];
          
          //console.log(element);
          
          bot.commands.set(element , command);
        }
      }
    })
  }
})


client.on("ready" , () =>
{
  console.log(`¡${client.user.tag}, are return more powerful!`);

  client.user.setActivity(`Seening as we improve everytime ! 👀` , 
  {
    type: "WATCHING"
  });
});

client.on("message" , async(message)  =>
{
  const msg = message.content.split(" ")
  const cmd = msg[0].toLowerCase()
  const args = msg.slice(1)
  const commandFile = bot.commands.get(cmd.slice(prefix.length))
  const embed = new Discord.MessageEmbed()

  if(commandFile)
  {
    commandFile.run(bot , message , args , client)
  }

  if (cmd === "bt!avatar")
  {

    
  }

});


client.login(TOKEN)