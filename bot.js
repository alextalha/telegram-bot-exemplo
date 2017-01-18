"use strict";

module.exports = function(){


var TelegramBot = require('node-telegram-bot-api');
var fs = require('fs');


// replace the value below with the Telegram token you receive from @BotFather
var token = "318036094:AAEGiNMFRtfK3q1GjNx9fagnWF9pK57wv_M";
             
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


bot.onText(/\/ajuda/, function(msg, match) {
  var fromId = msg.from.id;

  var mensagem = " Em que eu posso te ajudar? \n\n  "+
  "/pic - retorna sua foto do telegram \n" +
  "/padaria - diz quem tem que ir na padaria \n "+
  "/agua [manha/tarde] - diz quem tem que ir pegar água \n"+
  "/print [url sem http ] - retorna a imagem printada de um site \n";
  
  bot.sendMessage(fromId, mensagem);
});

/*PADARIA*/
bot.onText(/\/padaria/, function (msg,match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

let team = ['Wagner','BTT','Cansado','Thiaguinho','Allan','Pequeno','Tio Chico','Indiano','Igor'];

  var chatId = msg.chat.id;
  var resp = "Quem deve ir na padaria hoje : " + team[Math.floor((Math.random() * 7) + 1)]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});



bot.onText(/\/updates/, function (msg,match) {
  
  var xpto= '';
  var chatId = msg.chat.id;
  bot.sendMessage(chatId, '..updates');
  bot.getUpdates().then(console.log);
  
  
});



// Matches "/echo [whatever]"
bot.onText(/\/agua (.+)/, function (msg,match) {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

let team = ['Wagner','Cansado','Thiaguinho','Allan','Iza','Glorinha','Pequeno','Tio Chico','Indiano','PC','BTT','Igor','Eloildo'];

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

  bot.sendMessage(chatId, resp);
});

   bot.onText(/\/pic/, function onMessage(msg) {
    var chatId = msg.chat.id;
    var userId = msg.from.id;
    
    bot.getUserProfilePhotos(userId, 0, 1).then(function(data){
      bot.sendPhoto(chatId,data.photos[0][0].file_id,{caption: "It's your photo!"});
    });
});

bot.onText(/\/print (.+)/, function (msg,match) {
  

    var resp = 'Esse ai foi o site printado';
    var chatId = msg.chat.id;
    var  printscreen = require('./printscreen')(bot,chatId,match[1]);

});

// Listen for any kind of message. There are different kinds of
// messages.

bot.on('message', function (msg) {

  var chatId = msg.chat.id;
  
  // send a message to the chat acknowledging receipt of their message
//  bot.sendMessage(chatId,"Mensagem..........");
});
    


};