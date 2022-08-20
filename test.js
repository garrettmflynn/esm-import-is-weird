export let increment = 'this is a string (an immutable object)'

const original = JSON.parse(JSON.stringify(increment))

const func = () => {
    increment += ' whose reference has been modified'
    return increment
}

setTimeout(() => {
    console.log(`------------- modified (${original}): ${func()} -------------`)
}, 100)

export default func