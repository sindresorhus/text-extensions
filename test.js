import test from 'ava';
import textExtensions from '.';

test('main', t => {
	t.true(Array.isArray(textExtensions));
	t.true(textExtensions.length > 0);
});
