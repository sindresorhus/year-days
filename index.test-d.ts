import {expectType} from 'tsd';
import yearDays = require('.');

expectType<number>(yearDays());
expectType<number>(yearDays(2016));
expectType<number>(yearDays(new Date()));
