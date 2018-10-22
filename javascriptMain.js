var Form = {};
var Form = function() {
  this.mail;
  this.message;
}
var form = new Form();
$(document).ready(function(){
    
    $("#bt").click(function(){//traitement dde la message du server 
        $("#reponse").fadeIn({
            height: 'toggle'
        });
    });   
  });

function validate(){  
    mail=$('#champsMail').val();
    message=$('#champsMessage').val();
    $.ajax( {   
      url: 'http://localhost/cv/server.php',	
      type: 'POST',
      data: 'mail='+mail+'&message='+message,
      dataType: 'html',
      success: function(code_html, statut) {
              //code-html reponse du echo - voir statut
      },
      error: function(resultat, statut, erreur) {
      
      },
      complete: function(resultat, statut) {
    
      }
    });
  }