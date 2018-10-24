var Form = {};
var Form = function() {
  this.mail;
  this.message;
}
var form = new Form();
$(document).ready(function(){
  
    // $("#bt").click(function(){//traitement dde la message du server 
    //     $("#reponse").fadeIn({
    //         height: 'toggle'
    //     });
    // }); 
    $('.nav-link').click(function(){    
      var divId = $(this).attr('href');
       $('html, body').animate({
        scrollTop: $(divId).offset().top - 150
      }, 100);
    });  
});

function validate(){  
    form.mail=$('#champsMail').val();
    form.message=$('#champsMessage').val();
    alert("Votre email: "+form.mail+" et votre message: "+form.message);
    // $.ajax( {   
    //   url: 'http://localhost/cv/server.php',	
    //   type: 'POST',
    //   data: 'mail='+form.mail+'&message='+form.message,
    //   dataType: 'html',
    //   success: function(code_html, statut) {
    //           //code-html reponse du echo - voir statut
    //   },
    //   error: function(resultat, statut, erreur) {
      
    //   },
    //   complete: function(resultat, statut) {
    
    //   }
    // });
  }