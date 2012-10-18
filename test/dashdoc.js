var assert = require('assert')
var dashDoc = require('dashdoc')

it('converts json token xml', function() {
	var token = {
		name: '01 Backbone.js',
		type: DashDoc.CATEGORY,
		anchor: 'logo'
	}
	assert.equal(DashDoc.token(token), '<Token><TokenIdentifier>//apple_ref/cpp/cat/01 Backbone.js</TokenIdentifier><Anchor>logo</Anchor></Token>')
})
