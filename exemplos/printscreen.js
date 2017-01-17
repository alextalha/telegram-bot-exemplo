module.exports = function(bot,chatId,link){

  var fs = require('fs');
  
  
    const tmpDir = '/home/ubuntu/workspace';
    const printscreen = require('printscreen');
    
    const path = require('path');
     
     var url = 'http://' + link;
     
      printscreen(url, {
     
      /*
       * Optional: Define a suitable viewport size
       */
      viewport: {
        width: 1650,
        height: 1060
      },
     
      /*
       * Optional: Define the time between the page being initiated and the printscreen taken
       */
      timeout: 1000,
     
      /*
       * Optional: Define the format of the printscreen taken (pdf|png|jpeg)
       */
      format: 'png',
     
      /*
       * Optional: Define the quality of the printscreen taken (0-100)
       */
      quality: 70,
     
      /*
       * Optional: Define a capture function which is injected into the webview before the printscreen is made
       * The returned output is available in the callback (see below)
       */
      capture: function () {
     
        var divs = document.querySelectorAll('div').length;
     
        return {
          divs: divs
        };
      }
    }, (err, data) => {
        
        
      /*
       * Optional: Callback definition
       * data is the result returned from the capture method
       */
    
    //console.log(data.file);
      
      arquivo = fs.stat(data.file, function(err, stats) {

          if(err) 
            throw err;  
  
          //if a file
          if (stats.isFile()) {
          //console.log("It\'s a file & stats.size= " + JSON.stringify(stats));    
          console.log('chat id ' + chatId);
          //console.log('read stream' + fs.createReadStream(data.file));
         // bot.sendPhoto(chatId,'http://payload6.cargocollective.com/1/5/175617/2435166/DomoDrinkingSlurpee_640.jpg', 'Print do Site').then(console.log)
            //console.log('arquivo' + data.file);
          bot.sendPhoto(
              { chat_id: chatId,caption: 'Telegram Logo',files: {photo: './1484651197679.png' }
              }, function (err, msg){ console.log(err); console.log(msg); });
          
          };
    
      });
      
      // arquivo =  require('fs').stat(data.file, (err, stats) =>
          
          
    //  console.log(`
    //    - There are ${data.output.divs} divs in this page.
  //      - Your screenshot is available at ${data.file} and is ${stats.size} bytes.
  //  `)
      //console.log('asdasd')
      //  return `${data.file}`    
      //);
      
      //console.log(arquivo);
      
      //console.log('arquivo passado' + arquivo);
    //  );
          
    }
    
    );
    
}