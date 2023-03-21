//slider

$(document).ready(function(){
    $('.slides>li:gt(0)').hide();
      setInterval(function() {
        $('.slides > li:first')
          .fadeOut(4000)
          .next()
          .fadeIn(6000)
          .end()
          .appendTo('.slides');
    }, 2000);
  });


// select product

$(document).ready(function() {
  $('input[type="checkbox"]').change(function() {
    var totalPrice = 0.00;
    $('input[type="checkbox"]:checked').each(function() {
      totalPrice += parseFloat($(this).data('price'));
    });
    $('#totalPrice').text(totalPrice.toFixed(2));
  });
});