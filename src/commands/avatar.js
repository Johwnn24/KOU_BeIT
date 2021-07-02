module.exports.run = async(bot , message , args , client) =>
{
  const person = message.mentions.users.first()

  if(!person)
  {
    embed.setAuthor("AVATAR COMMAND" , client.user.avatarURL())
    .setDescription(`**${message.author}, este es tu avatar. ^^**`)
    .setImage(message.author.displayAvatarURL({dynamic: true , size: 1024}))
    .setColor("RANDOM")
    .setFooter("Re fachero" , "https://cdn.discordapp.com/emojis/852705600587694150.png?v=1")

    return message.channel.send(embed)
  }
  else
  {
    embed.setAuthor("AVATAR COMMAND" , client.user.avatarURL())
      .setDescription(`**Este es el avatar de ${person}**.`)
      .setImage(person.displayAvatarURL({dynamic: true , size : 1024}))
      .setColor("RANDOM")
      .setFooter("Re fachero" , "https://cdn.discordapp.com/emojis/852705600587694150.png?v=1")

    return message.channel.send(embed)
  }
}

module.exports.help =
{
  name: ["avatar" , "Avatar"],
  description: `With this command you can `
}