export const sequenceNumberResponse = (start, end, inc=1, isDecreasing=false) => {
    let output = []
    if (!isDecreasing) {
        for (let i = start; i <= end; i += inc) {
            output.push({ response: i })
        }
        return output
    }
    for (let i = start; i >= end; i -= inc) {
        output.push({ response: i })
    }
    return output
}

export const sequenceBooleanResponse = n => {
    let output = [{ response: false }]
    for (let i = 0; i < n - 1; i++) {
        output.unshift({ response: true })
    }
    return output
}