module.exports.run = async(bot, message , args , Client) =>
{
  if(args.length === 0)
  {
    return;
  }
  else
  {
    message.channel.send(args.join(" ")).then(() =>
      {
        message.delete()
      })
  }
}

module.exports.help =
{
  name: ["say" , "Say" , "Decir" , "decir"],
  description : `With this command you can tell a secrect and ocult your identity`
}