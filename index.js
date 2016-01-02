var recursiveMax = function(obj, max) {
	max = typeof max !== 'undefined' ? max : false;

	for( key in obj ) {
		if ( typeof obj[key] === 'number' ) {
			max = max === false ? obj[key] : Math.max( obj[key], max );
		} else if ( ( typeof obj[key] === 'array' || typeof obj[key] === 'object' ) && obj[key] ) {
			max = recursiveMax( obj[key], max );
		}
	}

	return max;
}

module.exports = recursiveMax;