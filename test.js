import test from 'ava';
import yearDays from '.';

test('main', t => {
	t.is(typeof yearDays(), 'number');
	t.is(yearDays(2014), 365);
	t.is(yearDays(2016), 366);
	t.is(yearDays(new Date(2016, 0)), 366);
});
