import { increment } from './test.js'
import * as all from './test.js'

const increment2 = all.increment


console.log('esm', increment);
console.log('const', increment2);
console.log('all', all.increment);


const delay = 1000
setTimeout(() => {
    console.log('esm', increment)
    console.log('const', increment2)
    console.log('all',all.increment)
}, delay);

(() => {
    let { increment } = all
    console.log('let', increment)
    setTimeout(() => {
        console.log('let', increment)
    }, delay)
})();