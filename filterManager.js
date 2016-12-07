var fs = require('fs');
var discord = require('discord.js');

class filterManager {
    constructor(client){
        this.client = client;
        var guilds = client.guilds.array();
        for(var i = 0;i < guilds.length; i++){
            guilds[i].filters = [{str: "dirb (isn'?t|is not) the word", regEx: /dirb (isn'?t|is not) the word/gi}];
        }
        var data = fs.readFileSync('./data/filters.pgff','utf8');
        var lines = data.match(/(.*)/g);
        var guild;
        if (lines[0]){
            for(var i = 0; i < lines.length; i++){
                guild = client.guilds.find('id', lines[i].match(/^\S*/g)[0]);
                if(guild){
                    var filters = lines[i].match(/\/\\{\/\\.+?\/\\}\/\\/g);
                    if(filters[0]){
                        for(var j = 0; j < filters.length; j++){
                            guild.filters[j] = {};
                            guild.filters[j].str = /\/\\{\/\\(.*)\/\\}\/\\/g.exec(filters[j])[1];
                            guild.filters[j].regEx = new RegExp(guild.filters[j].str);
                        }
                    }
                }
            }
        }
    }
    checkMessage(message){
        var guild = message.guild;
        if(!guild.filters){
            guild.filters = [{str: "dirb (isn'?t|is not) the word", regEx: /dirb (isn'?t|is not) the word/gi}];
        }
        var filters = guild.filters;
        for(var i = 0;i<filters.length;i++){
            if(filters[i].regEx.test(message.content)){
                console.log('User '+message.author.username+' said a bad thing!');
                if (message.channel.nomsg){
                    message.channel.nomsg.delete();
                }
                message.channel.sendMessage(message.author.toString()+", you musn't say bad things!").then( msg => {
                    msg.channel.nomsg = msg;
                })
                message.delete();
                return false;
            }
        }
        return true;
    }
    addFilter(guild, str) {
        if(!guild.filters){
            guild.filters = [{str: "dirb (isn'?t|is not) the word", regEx: /dirb (isn'?t|is not) the word/gi}];
        }
        guild.filters[guild.filters.length] = {};
        guild.filters[guild.filters.length-1].str = str;
        guild.filters[guild.filters.length-1].regEx = new RegExp(str,'gi');
    }
    removeFilter(guild, str) {
        if(!guild.filters){
            guild.filters = [{str: "dirb (isn'?t|is not) the word", regEx: /dirb (isn'?t|is not) the word/gi}];
        }
        try {guild.filters.splice(guild.filters.findIndex(function(filter){return filter.str == str;}),1);}
        catch (err){console.log('There was no filter: /'+str+'/gi on server '+guild.name)}
    }
    clearFilters(guild){
        guild.filters = [{str: "dirb (isn'?t|is not) the word", regEx: /dirb (isn'?t|is not) the word/gi}];
    }
    saveFilters(){
        var data = '';
        var guilds = this.client.guilds.array();
        for(var i = 0; i < guilds.length; i ++){
            if(!guilds[i].filters){
                guild.filters = [{str: "dirb (isn'?t|is not) the word", regEx: /dirb (isn't|is not) the word/gi}];
            }
            data += guilds[i].id+' ';
            for(var j = 0; j < guilds[i].filters.length; j++){
                data += '/\\{/\\'+guilds[i].filters[j].str+'/\\}/\\';
            }
            data += '\n';
        }
        fs.writeFileSync('data/filters.pgff', data);
    }
}

module.exports = filterManager;