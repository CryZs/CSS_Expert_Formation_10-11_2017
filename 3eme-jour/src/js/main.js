/**
 * Created by remyvast on 20/11/2017.
 */

import {Horloge} from './horloge';

const divElt = document.querySelector('.horloge');
const clock = new Horloge(divElt);
clock.start();

