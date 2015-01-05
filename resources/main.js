function pw_create () {

	// special thanks :
	// http://qiita.com/suin/items/23ba4a487425bbad90c8
	// https://www.softel.co.jp/blogs/tech/archives/3787
	// http://www.hanano-ya.jp/javascript/1347

	var length = 8

	var baseStrings = 'abcdefghijkmnopqrstuvwxyz' ;

	baseStrings += 'ABCDEFGHIJKLMNPQRSTUVWXYZ' ;
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
