"use strict";

module.exports = function(){



var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');


// replace the value below with the Telegram token you receive from @BotFather
var token = "317693926:AAHxQZlQC0TAYcaNV3nHv4Mu-8RerA3yCqc";

// Create a bot that uses 'polling' to fetch new updates
var bot = new TelegramBot(token, { polling: true });


/*OPCOES */
// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, function (msg, match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  var chatId = msg.chat.id;
  var resp = match[1]; // the captured "whatever"


  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


bot.onText(/\/help/, function(msg, match) {
  var fromId = msg.from.id;
  bot.sendMessage(fromId, "Veremos que ajuda você precisa.\n/.");
});



// Matches "/echo [whatever]"
bot.onText(/\/padaria (.+)/, function (msg,match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

let team = ['Wagner','BTT','Cansado','Thiaguinho','Allan','Pequeno','Tio Chico','Indiano','Igor'];

  var chatId = msg.chat.id;
  var resp = "Quem deve ir na padaria hoje : " + team[Math.floor((Math.random() * 7) + 1)]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});


// Matches "/echo [whatever]"
bot.onText(/\/agua (.+)/, function (msg,match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

let team = ['Wagner','Cansado','Thiaguinho','Allan','Iza','Glorinha','Pequeno','Tio Chico','Indiano','PC','BTT','Igor'];

var chatId = msg.chat.id;


if(match[1] == 'manha'){
  
  var resp = "Quem deve ir pegar água pela manhã hoje : " + team[Math.floor((Math.random() * 7) + 1)]; // the captured "whatever"
  
}else if(match[1] == 'tarde'){
  
  var resp = "Quem deve ir pegar água pela tarde hoje : " + team[Math.floor((Math.random() * 7) + 1)]; // the captured "whatever"
  
  
}else if(match[1] == 'noite'){
  
  var resp = "Quem deve ir pegar água pela noite hoje : " + team[Math.floor((Math.random() * 7) + 1)]; // the captured "whatever"

}else{
  
  resp = 'Geral Preguiçoso';
}

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});



/*PRINTAR UMA PAGINA E DEVOLVER NO BOT */

bot.onText(/\/profilephoto (.+)/, function (msg,match) {
  
   var chatId = msg.chat.id;
   
  bot.getUserProfilePhotos(chatId);

  
});



bot.onText(/\/testuserphoto$/, function onMessage(msg) {
    var chatId = msg.chat.id;
    var userId = msg.from.id;

    bot.getUserProfilePhotos(userId, 0, 1).then(function(data){
      bot.sendPhoto(chatId,data.photos[0][0].file_id,{caption: "It's your photo!"});
    });

});



bot.onText(/\/print (.+)/, function (msg,match) {
  

    var resp = 'Esse ai foi o site printado';
    var chatId = msg.chat.id;
   // var  printscreen = require('./printscreen')(bot,chatId,match[1]);
    
    
  bot.sendPhoto(msg.chat.id, '1484321789782.png', {caption: "Printando o Site Selecionado"});
  
  //bot.sendPhoto(chatId, fs.createReadStream('./uol.png'), 'Chronoscape by Alexiuss').then(console.log)
  
  /**
  console.log( __dirname+'/uol') ;
  
  bot.sendPhoto({
  chat_id: chatId,
  caption: 'Telegram Logo',
  files: {
    photo: {
      filename: __dirname + '/uol.png',
      stream: fs.createReadStream(__dirname +'/uol.png')
    }
  }
}, function (err, msg) {
  console.log(err);
  console.log(msg);
});

  */
  
  
     //bot.sendMessage(chatId, resp);
      
 

    ///console.log(printscreen);
    
   // bot.sendPhoto(chatId, fs.createReadStream(printscreen.file), 'Site').then(console.log)
});


// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', function (msg) {

  var chatId = msg.chat.id;
  
  // send a message to the chat acknowledging receipt of their message
//  bot.sendMessage(chatId,"Mensagem..........");
});
    


};