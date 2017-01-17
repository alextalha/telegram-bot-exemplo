module.exports = function(bot,chatId,link){

  var fs = require('fs');
  const printscreen = require('printscreen');
  //const path = require('path');
  
  var domain = function(link){
  var novo = link.match(/^(?:https?:)?(?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
  var domain_= (novo[novo.length-1]).substr(0, (novo[novo.length-1]).indexOf('.'));  
  
  return domain_;
 
 };
 
 //console.log(__dirname+"/images/"+domain(link)+".png");
 //console.log('link = ' + link);
 
  printscreen('http://'+ link, {
     
      viewport: {
        width: 1650,
        height: 1060
      },
      timeout: 1000,
      format: 'png',
      quality: 80,
     capture: function () {
     
        var divs = document.querySelectorAll('div').length;
     
        return {
          divs: divs
        };
      }
    }, (err, data) => {
        

      fs.stat(data.file, function(err, stats) {


          //console.log(data.file);
          
          if(err) 
            throw err;  
  
          //if a file
          if (stats.isFile()) {
            
            fs.readFile(data.file, 'utf8', function(err, contents) {
            
            
            fs.rename(data.file, __dirname+'/images/'+domain(link)+'.png', function (err) {
              if (err) throw err;
             console.log('Move complete.');
             
              bot.sendPhoto(
              { chat_id: chatId,caption: link ,files: {photo: __dirname+'/images/'+domain(link)+'.png' }
              }, function (err, msg){ console.log(err); console.log(msg); });
              
            });
           
          });
            
          }
          
      });
          
    }
    
    );

}