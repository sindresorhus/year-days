import {expectType} from 'tsd';
import yearDays from './index.js';

expectType<number>(yearDays());
expectType<number>(yearDays(2016));
expectType<number>(yearDays(new Date()));
