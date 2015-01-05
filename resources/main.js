function pw_create () {

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
