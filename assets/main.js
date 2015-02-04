console.log('ready');
$('.download').click(function (event) {
  event.preventDefault();

  $.ajax({url: $(this).attr('href')})
  .fail(function () {
    $('body').prepend('Oops, failed');
  })
  .done(function (message) {
    $('#downloader').attr('src', message.link);
  });

});
