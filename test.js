import test from 'ava';
import m from './';

test(t => {
	t.is(typeof m(), 'number');
	t.is(m(2014), 365);
	t.is(m(2016), 366);
	t.is(m(new Date(2016, 0)), 366);
});
