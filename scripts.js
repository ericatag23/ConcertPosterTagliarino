$(document).ready(function(){

$("body").append("<h2 class='answername'></h2>");
$("body").append("<h2 class='answerwhere'></h2>")
$("body").append("<h2 class='answerwhen'></h2>");
$("body").append("<h2 class='answercost'></h2>");
$("body").append("<h2 class='answerurl'></h2>");
var bandinfo = function (){
  var bandnameanswer = prompt("Whats the name of the band?");
  var bandwhereanswer = prompt("Where is the concert?");
  var bandwhenanswer = prompt("When is the concert?");
  var bandcostanswer = prompt("How much do tickets cost?");
  var bandurl = prompt("Url for more info?");

  $('h2.answername').text(bandnameanswer);
  $('h2.answerwhere').text(bandwhereanswer);
  $('h2.answerwhen').text(bandwhenanswer);
  $('h2.answercost').text(bandcostanswer);
  $('h2.answerurl').text(bandurl);
  $("button").remove();
}


$(".buttonname").click(function(){bandinfo()
});

// alert("Here is your finished concert poster");
// $("body").css("microphone.png")



});
