
/*function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("main").style.marginLeft = "200px";
    document.body.style.backgroundColor = "rgba(0,0,0)";
    document.getElementById("openbutton").style.display="none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
document.getElementById("openbutton").style.display="initial";
}*/


$(document).ready(function() {
    $('#openbutton').on('click',function(){
    	$('#mySidenav').css({'width':'200px'});
    	$('#main').css({'marginLeft':'200px'});
    	$('#openbutton').css({'display':'none'});
    	$('#myNavbar').css({'marginLeft':'-5px'})
});

  $('#closebutton').on('click',function(){
    	$('#mySidenav').css({'width':'0px'});
    	$('#main').css({'marginLeft':'0px'});
    	$('#openbutton').css({'display':'initial'});
    	$('#myNavbar').css({'marginLeft':'0px'})


});

});