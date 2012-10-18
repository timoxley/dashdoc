module.exports = function() {
	return new DashDoc()
}

module.exports.DashDoc = DashDoc

function DashDoc {
	
}

DashDoc.prototype.token = function(token) {
	if (!token.name) throw new Error('token name required')
	token.type = token.type || DashDoc.CATEGORY

	// optional anchor tag
	var anchor = token.anchor
		? '<Anchor>'+token.anchor+'</Anchor>'
		: ''
	var identifier = '//apple_ref/cpp/'+token.type+'/'+token.name
	return '<Token><TokenIdentifier>'+identifier+'</TokenIdentifier>'+anchor+'</Token>'
}

function header() {
	return '<?xml version="1.0" encoding="UTF-8"?>'
}

var types = {
	CLASS: 'cl'
	CATEGORY: 'cat'
	PROTOCOl: 'intf'
	BINDING: 'binding'
	METHOD: 'clm'
	PROPERTY: 'instp'
	TYPE: 'tdef'
	FUNCTION: 'func'
	MACRO: 'macro'
	CONSTANT: 'clconst'
	ATTRIBUTE: 'Attribute'
	EVENT: 'Event'
}
