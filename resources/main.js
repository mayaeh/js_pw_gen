function pw_create () {

	var length = 8
	var rNum = Math.random() * Math.random() ;

	var pw = rNum.toString(36).slice(-length);

	$("#gotText").val(pw) ;

	$("#gotText").select();


}
