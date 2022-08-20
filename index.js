import { players, test } from './test.js'
import * as all from './test.js'

const players2 = all.players
const test2 = all.test


console.log(players, test)
console.log('2',players2, test2)
console.log('3',all.players, all.test)



setTimeout(() => {
    console.log(players, test)
    console.log('2', players2, test2)
    console.log('3',all.players, all.test)
}, 3000)