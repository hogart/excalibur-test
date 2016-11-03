import {sayer} from './sayer';
import * as _ from 'lodash';
console.log(_.escape(sayer.say()));

import {Engine} from 'excalibur';

const e = new Engine({
    width: 800,
    height: 600,
});

e.start();
