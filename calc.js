/*jslint browser: true*/
/*global $, jQuery, alert*/
// Counts to determine if number displayed needs to be cleared and when the acctual
// calculation needs to reset.//

$(document).ready(function() {

var i = 0
var str = "";

// Functions for all buttons
$("#delete").click(del)
$(".keys .num").click(numbers)
$(".keys #equals").click(equal)
$(".keys .operator").click(opp)

// Function for numbers
function numbers() {
  if (i == 0) {
    $("#top").empty()
  } else if (i == 2 || ($("#top").html() == "0" && $(this).html() !==".")) {
    $("#top").empty()
    str = ""
  }

  var content = $(this).html()
  str += content;
  i = 1
  $("#top").append(content)
}

// Function for equals button
function equal() {
  var answer = evil(str)
  $("#top").empty()
  $("#top").append(answer);
  i = 2
  str = answer;
}

// Function for delete button
function del() {
  $("#top").empty()
  str = ""
}

// Function for operators
function opp() {
  str += $(this).html()
  i = 0
}

//Function that takes the current string, converts to a calculation and gives the answer
function evil(fn) {
  return new Function('return ' + fn)();
}


});
