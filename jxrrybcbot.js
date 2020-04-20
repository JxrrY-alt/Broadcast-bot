const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "~";
client.on("message", message => {

            if (message.content.startsWith(prefix + "fs")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : People Who Got This Message`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`BroadCast Bot- Script By : KhalidAlmalki`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : KhalidAlmalki ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`~fs | FourShieldsvRP`,"-------------")
client.user.setStatus("dnd")
});



client.login("Njk0NDI3MTIwODY4NTI0MDQ0.XoLdzQ.vT320DvTi26QPdbLBOu_LgRMrSw");