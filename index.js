
$('.main').transition('scale in', '1s');

$('.field').transition('pulse', '2s');
$('p').transition('pulse', '2s');
$('#progress').transition('scale in', '4s');

$('.item')
  .transition({
    animation : 'pulse',
    duration  : 3000,
    interval  : 400
  })
;

$('#submit').transition('fade up', '1s').transition('fade up', '1s');

$('#progress').progress({
  percent: 50
});

$("#submit").on("mouseenter", function(){
  $("#submit").attr("class", "ui teal basic fluid button");
});

$("#submit").on("mouseleave", function(){
  $("#submit").attr("class", "ui teal fluid button");
});

var rellax = new Rellax('.rellax');
