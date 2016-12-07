
//https://discordapp.com/api/oauth2/authorize?client_id=255773424037789696&scope=bot&permissions=8

var Discord = require('discord.js');
var fs = require('fs');
var fm = require('./filterManager.js');
var gm = require('./chess.js');

var bot = new Discord.Client();

var login = fs.readFileSync('./login.qqq', 'utf8');

login = login.match(/.*/g);

var token = login[0];
var password = login[1];
var token = login[2];

bot.login(token).then(function(token, password){
  console.log('Logged in as: '+bot.user.username);
}).catch(function(){
  console.log('Login Failed');
});

bot.on('ready', () => {
  var guilds = bot.guilds.array();
  console.log('Found '+guilds.length+' guilds.');
  for(var i = 0; i < guilds.length; i ++){
    guilds[i].channels.find('name','general').sendMessage('BOT Dirb is back!');
  }
  fm = new fm(bot);
  gm = new gm(bot);
});

bot.on('message', function(msg){
  var isOk = true;
  if (msg.author.id != bot.user.id && msg.channel.name.toLowerCase() != 'console') {
    isOk = fm.checkMessage(msg);
  }
  if (msg.content.startsWith('!') && isOk){
    if(msg.channel.name.toLowerCase() == 'console'){
      adminMessageHandler(msg);
    } else {
      messageHandler(msg);
    }
  }
});

function adminMessageHandler(msg){
  try {
    var cmd = /^!(\S+)/gi.exec(msg.content.toLowerCase())[1];
  } catch (err) {
    return;
  }
  if (cmd){
    switch(cmd.toLowerCase()){
      case "shutdown":
        console.log('Goodnight!');
        fm.saveFilters();
        bot.destroy();
        break;
      //case "setmusicchannel":
      //case "cooldown":
      //case "clean":
      //case "enable":
      //case "disable":
      //case "list":
      case "addfilter":
        newFilterStr = /\/(.*)\//g.exec(msg.content)[1];
        console.log('Creating new filter /'+newFilterStr+'/ on guild '+msg.guild.name);
        fm.addFilter(msg.guild, newFilterStr);
        break;
      case "removefilter":
        rmFilterStr = /\/(.*)\//g.exec(msg.content)[1];
        console.log('Removing filter /'+rmFilterStr+'/ on guild '+msg.guild.name);
        fm.removeFilter(msg.guild, rmFilterStr);
        break;
      default:
      messageHandler(msg);
    }
  }
}
function messageHandler(msg){
  try {
    var cmd = /^!(\S+)/gi.exec(msg.content.toLowerCase())[1];
  } catch (err) {
    return;
  }
  if (cmd){
    switch(cmd.toLowerCase()){
      //case "queuesong":
      //case "hookmeup":
      //case "frontpage":
      //case "subreddit":
      //case "voteskip":
      //case "votekick":
      case "ping":
        msg.channel.sendMessage('Pong!');
      case "listfilters":
        var output = '';
        for(var i = 0; i < msg.guild.filters.length; i ++){
          output += '/'+msg.guild.filters[i].str+'/gi\n';
        }
        msg.channel.sendCode('javascript',output);
        break;
      default:
        messageHandler(msg);
    }
  }
}