function validateForm(){
    var adsoyad= document.forms["form"]["adsoyad"].value;
    if(adsoyad==""){
    alert("Ad Soyad Alanını  Boş Bırakmayınız.");
    return false;
    }
    var email= document.forms["form"]["email"].value;
    if(email==""){
    alert("E-posta Alanını  Boş Bırakmayınız.");
    return false;
    }
  
    var yas= document.forms["form"]["yas"].value;
    if(yas==""){
    alert("Doğum Tarihinizi Boş Bırakmayınız.");
    return false;
    }
    
    
    var konu= document.forms["form"]["konu"].value;
    if(konu==""){
    alert("Konu Alanını Boş Bırakmayınız.");
    return false;
    }
    
    var mesaj= document.forms["form"]["mesaj"].value;
    if(mesaj==""){
    alert("Mesaj Alanını Boş Bırakmayınız.");
    return false;
    }

            document.writeln(adsoyad);
			document.writeln(email );
			document.writeln(yas);
			document.writeln(konu);
			document.writeln(mesaj);
    
    }
    
   