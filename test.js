import test from 'ava';
import textExtensions from './index.js';

test('main', t => {
	t.true(Array.isArray(textExtensions));
	t.true(textExtensions.length > 0);
});
