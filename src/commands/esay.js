const Discord = require("discord.js")

module.exports.run = async(bot , message , args , client) =>
{
  const embed = new Discord.MessageEmbed()

  if(args.length === 0)
  {
    return
  }
  else
  {
    embed.setDescription(`*${args.join(" ")}*`)
    .setColor("RANDOM")

    return message.channel.send(embed).then(() =>
    {
      message.delete()
    })
  }
}

module.exports.help =
{
  name: ["esay" , "Esay" , "embedsay" , "Embedsay"],
  description : `With this command you can say everything and ocult your identity`
}