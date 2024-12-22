import {describe, it} from 'node:test';
import {deepEqual} from 'node:assert/strict';

import occurrencesOfElement from '3159.find-occurrences-of-an-element-in-an-array';
import data from 'src/mocks/3159.mock'

describe('3159.', () => {

it('case 1', ()=>{
  deepEqual(occurrencesOfElement(...data[0]), [0,-1,2,-1])
});

it('case 2', ()=>{
  deepEqual(occurrencesOfElement(...data[1]), [-1])
});

});