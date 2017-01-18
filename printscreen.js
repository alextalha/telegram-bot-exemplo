module.exports = function(bot,chatId,link){

  var fs = require('fs');
  const printscreen = require('printscreen');
  //const path = require('path');
  
  var domain = function(link){
  var novo = link.match(/^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
  var domain_= (novo[novo.length-1]).substr(0, (novo[novo.length-1]).indexOf('.'));  
  
  return domain_;
 
 };
 
  bot.sendMessage(chatId, "carregando....\n");


  printscreen('http://'+ link, {
     
      viewport: {
        width: 1280,
        height: 720
      },
      timeout: 1000,
      format: 'png',
      quality: 70,
     capture: function () {
     
        var divs = document.querySelectorAll('div').length;
     
        return {
          divs: divs
        };
      }
    }, (err, data) => {
        

      fs.stat(data.file, function(err, stats) {

        if(err) throw err;
  
          if (stats.isFile()) {
            
            fs.readFile(data.file, 'utf8', function(err, contents) {
            
            fs.rename(data.file, __dirname+'/images/'+domain(link)+'.png', function (err) {
              
              if (err) throw err;
             
                bot.sendPhoto(chatId, __dirname+'/images/'+domain(link)+'.png', {
                  caption: 'Imagem Gerada'
              });
              
            });
           
          });
            
          }
          
      });
          
    }
    
    );

}