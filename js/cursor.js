$(window).mousemove(function (e) {
    $('.cursor span').css({
      left: e.pageX,
      top: e.pageY
    })
  })
  $('a').on('mouseenter', function () {
    $('.cursor span').addClass('active');
  })
  $('a').on('mouseleave', function () {
    $('.cursor span').removeClass('active');
  })

  $('p').on('mouseenter', function () {
    $('.cursor span').addClass('text_active');
  })
  $('p').on('mouseleave', function () {
    $('.cursor span').removeClass('text_active');
  })

  $('.exc').on('mouseenter', function () {
    $('.cursor span').addClass('text_active');
  })
  $('.exc').on('mouseleave', function () {
    $('.cursor span').removeClass('text_active');
  })

///参考：https://qiita.com/hiroyuki-n/items/42498d7a012aaf124e1f////