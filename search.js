$(function() {
$("#new").click(function() {
$(this).animate({
opacity: .5,
fontSize: "+=69",
height: "+=69"
},11000,function() {
$("#me").animate({
opacity: .6,
right: "+=50px",
},1000,function() {
alert("Animation Done")
})
})
})
});
