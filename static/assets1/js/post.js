function validate1(val) {
v1 = document.getElementById("title");
v2 = document.getElementById("description");
var v1_value = document.getElementById("title").value;
var v2_value = document.getElementById("description").value;

document.getElementById("title1").value = v1_value;
document.getElementById("description1").value = v2_value;
flag1 = true;
flag2 = true;

if(val>=1 || val==0) {
if(v1.value == "") {
v1.style.borderColor = "red";
flag1 = false;
}
else {
v1.style.borderColor = "white";
flag1 = true;
}
}

if(val>=2 || val==0) {
if(v2.value == "") {
v2.style.borderColor = "red";
flag2 = false;
}
else {
v2.style.borderColor = "white";
flag2 = true;
}
}

flag = flag1 && flag2;

return flag;
}

function validate2(val) {
    var v1_value = document.getElementById("region").value;
var v2_value = document.getElementById("problem").value;
document.getElementById("region1").value = v1_value;
document.getElementById("problem1").value = v2_value;
    return true;
v1 = document.getElementById("web-title");
v2 = document.getElementById("desc");

flag1 = true;
flag2 = true;

if(val>=1 || val==0) {
if(v1.value == "") {
v1.style.borderColor = "red";
flag1 = false;
}
else {
v1.style.borderColor = "white";
flag1 = true;
}
}

if(val>=2 || val==0) {
if(v2.value == "") {
v2.style.borderColor = "red";
flag2 = false;
}
else {
v2.style.borderColor = "white";
flag2 = true;
}
}

flag = flag1 && flag2;

return true;
}

$(document).ready(function(){

var current_fs, next_fs, previous_fs;

$(".next").click(function(){

str1 = "next1";
str2 = "next2";

if(!str1.localeCompare($(this).attr('id')) && validate1(0) == true) {
val1 = true;
}
else {
val1 = false;
}

if(!str2.localeCompare($(this).attr('id')) && validate2(0) == true) {
val2 = true;
}
else {
val2 = false;
}

if((!str1.localeCompare($(this).attr('id')) && val1 == true) || (!str2.localeCompare($(this).attr('id')) && val2 == true)) {
current_fs = $(this).parent().parent().parent();
next_fs = $(this).parent().parent().parent().next();

$(current_fs).removeClass("show");
$(next_fs).addClass("show");

$("#progressbar li").eq($(".card").index(next_fs)).addClass("active");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

next_fs.css({
'display': 'block'
});
}
});
}
});

$(".prev").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();

$(current_fs).removeClass("show");
$(previous_fs).addClass("show");

$("#progressbar li").eq($(".card").index(next_fs)).removeClass("active");

current_fs.animate({}, {
step: function() {

current_fs.css({
'display': 'none',
'position': 'relative'
});

previous_fs.css({
'display': 'block'
});
}
});
});

});





/*  ==========================================
    SHOW UPLOADED IMAGE
* ========================================== */
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

/*  ==========================================
    SHOW UPLOADED IMAGE NAME
* ========================================== */
var input = document.getElementById( 'upload' );
var infoArea = document.getElementById( 'upload-label' );

input.addEventListener( 'change', showFileName );
function showFileName( event ) {
  var input = event.srcElement;
  var fileName = input.files[0].name;
  infoArea.textContent = 'File name: ' + fileName;
}
