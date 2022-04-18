$(document).ready(function () {
  var links = [

    {
      name: 'Discord Account',
      link: 'https://discord.com/users/784533884179972107',
    },

    {
      name: 'Discord Server',
      link: 'https://discord.gg/25xNhKxTay',
    },

    {
      name: 'Github',
      link: 'https://github.com/RTX3090-TI',
    },


  ];

  for (var i in links) {
    var link = links[i];

    $('#marquee').append('<a href="' + link.link + '" target="_BLANK">' + link.name + '</a>');

    link = $('#marquee').children('a').last();

    if (i != links.length - 1) $('#marquee').append(' | ');
  }
});

$(function () {
  var $diaplay = $('#display');
  $('.marquee')
    .bind('beforeStarting', function () {
      $diaplay.show().html('started').delay(2000).fadeOut('fast');
    })
    .marquee({
      duration: 6000,
    });
});
