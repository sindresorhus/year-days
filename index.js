'use strict';
const leapYear = require('leap-year');

module.exports = year => leapYear(year) ? 366 : 365;
