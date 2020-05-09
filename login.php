<?php
if(isset($_POST['email']) && isset($_POST['sifre'])) { 
   $email = $_POST['email'];
   $sifre = $_POST['sifre'];
 
   if(empty($email) || empty($sifre)) { 
      echo 'Lütfen boş bırakmayın';
   } else {
      if($email == 'b191210060@sakarya.edu.tr' && $sifre == '123') { 
         $_SESSION['email'] = 'b191210060@sakarya.edu.tr';
         $_SESSION['sifre'] = '123';
         echo 'Giriş yaptınız! Hoşgeldiniz "b191210060"';
      } else {
         echo 'Yanlış kullanıcı adı ya da şifre girdiniz <a href=login.html>Giriş Sayfasına Geri Dönün</a>';
      }
   }
} else {
   echo 'Lütfen formu kullanın';
}
?>