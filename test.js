import test from 'ava';
import x from './';

test(t => {
	t.true(Array.isArray(x));
	t.true(x.length > 0);
});
