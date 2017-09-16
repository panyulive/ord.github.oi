$(function(){
  
  var timestamp  = parseInt( new Date() /1000 );

  var PUBLISH_TIME = 1505530800;

  if (timestamp > PUBLISH_TIME){
    return false;
  }

  $('body').html('<div class="maintenance">めんてなんすなう</div>');

});
