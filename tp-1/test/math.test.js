import {expect, test} from 'vitest'
import {add} from '../src/math'

test('add', t => {
   const result=add(1,2)
   expect(result).toBe(3)
})