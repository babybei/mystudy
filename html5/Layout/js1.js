$(function(){
	var size=$(window).width()/18;
	$("html").css("font-size",size);
	var myscroll=new IScroll("#file-list");  //必须使用绝对定位，overflow设置为hidden
});
$(window).resize(function(){
	var size=$(window).width()/18;
	$("html").css("font-size",size);
});