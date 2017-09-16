$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
     
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });

  var movie = {
    syagi:'IOjZ7-rmBlU',
    kontyan:'NZXS_fmyJbk',
    zousan: 'Qy6PEsNoNJo'
  }

  var head = 'https://www.googleapis.com/youtube/v3/videos?id=';
  var FOOT = '&part=snippet,contentDetails,statistics,status';
  var KEY_HEAD = '&key=';
  var KEY = 'AIzaSyCvdt5oNHELxcK-3H7x49fH2kF27r7emUQ';

  for (m in movie){
    
    var $m = $('.'+m );

    console.log($m);
    $.get(head+movie[m]+KEY_HEAD+KEY+FOOT,function(data){
      var view = data.items[0].statistics.viewCount;
      var like = data.items[0].statistics.likeCount;
      var comment = data.items[0].snippet.description;
      
      console.log(comment);

    });
  }
  


});

