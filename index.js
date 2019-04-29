'use strict';
const leapYear = require('leap-year');

module.exports = yearOrDate => leapYear(yearOrDate) ? 366 : 365;
