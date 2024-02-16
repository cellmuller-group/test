$(function(){
  var $dropdown = $('.js-dropdown');
  var DURATION = 200; //アニメーションの速さ

  function fadeOutMenu(){
    $dropdown.removeClass('is-active')
      .next('.js-dropdown-menu')
      .stop()
      .slideUp(DURATION);
  }

  //表示を切り替える
  function toggleMenu(){
    var $self = $(this); //thisにはクリックした時の要素が入る
    //要素が.is-activeを持っていない場合
    if(!$self.hasClass('is-active')){
      fadeOutMenu();
    }
    //クリックした要素を表示させる
    $self.toggleClass('is-active')
      .next('.js-dropdown-menu')
      .stop().slideToggle(DURATION);
  }

  $dropdown.on('click', toggleMenu);
 
//別の場所をクリックすると閉じる処理
  $(document).on('click touchend', function(event) {
  if (!$(event.target).closest('body').length) {
    // ここに処理;
    fadeOutMenu();//関数呼びだし
  }
});
  });

