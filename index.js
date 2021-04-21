import leapYear from 'leap-year';

export default function yearDays(yearOrDate) {
	return leapYear(yearOrDate) ? 366 : 365;
}
