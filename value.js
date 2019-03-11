$(function() {
$("#form").submit(function() {
var good = $("#dimond").val();
if(good !== "1996"){
alert("wrong PIN");
return false;
}
else{alert("nice")
}
});
});