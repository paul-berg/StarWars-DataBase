const compose = (...funcs) => (component) => {
    return funcs.reduceRight((prevResult, f) => {
        return f(prevResult)
    }, component)
}


export default compose