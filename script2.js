$(document).ready(function() {
   $(window).scroll(function(event) {
      var pos_body = $('html,body').scrollTop();      
      // console.log(pos_body);
      if(pos_body>20){
         $('.menu1').addClass('co-dinh-menu');   // фиксированное меню если pos_body > 20
      }
      else {
         $('.menu1').removeClass('co-dinh-menu');
      }
      if(pos_body>900){
         $('.back-to-top').addClass('hien-ra');      //Появится кнопка «Вернуться наверх» Если вытащить более 1200 единиц
      }
      else{
         $('.back-to-top').removeClass('hien-ra');    // в противном случае это будет скрыто
      }
   });
   $('.back-to-top').click(function(event) {              
      $('html,body').animate({scrollTop: 0},1400);        
   });
});