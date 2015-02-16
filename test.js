'use strict';
var test = require('ava');
var textExtensions = require('./');

test(function (t) {
	t.assert(Array.isArray(textExtensions));
	t.assert(textExtensions.length > 0);
	t.end();
});
