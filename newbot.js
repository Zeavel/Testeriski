const Discord = require('discord.js');
const client = new Discord.Client();
const CC = require('./command_create.js');
const Command = CC.Command;

var Commandss = new CC.Commands();
var fs = require("fs");



function commandIs(str, msg){
    return msg.content.toLowerCase().startsWith("nm!" + str);
}

function pluck(array) {
    return array.map(function(item) { return item["name"]; });
}

function hasRole(mem, role)
{
    if (pluck(mem.roles).includes(role))
    {
        return true;
    }
    else
    {
        return false;
    }
}

client.on('ready', () => {
    client.user.setActivity("Relax", { type: 1});
   

});

client.setInterval(function game()
{
    var hours = new Date(Date.now()).getHours().toString()
   var minutes = new Date(Date.now()).getMinutes().toString()
if(hours == "--" && minutes == "--")//вместо -- ставить время 
{
 
    client.users.forEach(cheli => cheli.send("test"))
  
 
}

}, 60000)


client.on('message', message =>
{ 
    
    if (message.channel.type !== 'text' || message.author.bot) return;
if(message.content.toLowerCase().startsWith("привет"))
{
  
 message.channel.send("Привет!")
}

});
client.on("guildMemberAdd", member =>
{
  let guild = member.guild;
  if (guild.channels.filter(c => c.name.includes("chat")).first() !== undefined)
  guild.channels.filter(c => c.name.includes("chat")).first().send(`Добро пожаловать, ${member}, на сервер **${guild.name}**!`/*Пример дефолтного приветствия*/);

  /*

  ${member} - ник пользователя
  ${guild.name} - название сервера
  <@${member.id}> - упоминание пользователя

  */

  
  // Выдача роли

  if(guild.roles.filter(r=>r.name.toLowerCase().includes(`пидр`)).first() !== undefined) {
    var foundRole = guild.roles.filter(r=>r.name.toLowerCase().includes(`пидр`)).first();

  member.addRole(foundRole.id)  } else {}
})

client.login(process.env.BOT_TOKEN);
