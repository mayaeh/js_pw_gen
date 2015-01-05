function pw_create () {

	// special thanks :
	// http://qiita.com/suin/items/23ba4a487425bbad90c8
	// https://www.softel.co.jp/blogs/tech/archives/3787
	// http://www.hanano-ya.jp/javascript/1347


	var length = '' ;

	if ($("#createLength").val().length > 0) {
		if ($("#createLength").val().match(/^[0-9]+$/i) ) {
			length = $("#createLength").val() ;
		}
	}
	else {
		length = 8 ;
	}


	var baseStrings = 'abcdefghijkmnopqrstuvwxyz' ;

	baseStrings += 'ABCDEFGHJKLMNPQRSTUVWXYZ' ;
	baseStrings += '1234567890' ;

	var rStrings = '' ;


	var baseLength = baseStrings.length ;

	for (var i=0; i < length; i++) {
		rStrings += baseStrings.charAt 
			(Math.floor (Math.random () * baseLength) ) ;
	}


	$("#gotText").val(rStrings) ;

	$("#gotText").select();


}

function optionClick() {
	$("#optionForm").toggle('fast');
	if ($("#optionLabel").html() == "オプション▽" ) {
		$("#optionLabel").html("オプション△") ;
	}
	else {
		$("#optionLabel").html("オプション▽") ;
	}
}