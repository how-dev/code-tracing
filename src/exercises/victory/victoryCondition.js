export const victoryCondition = () => {
    const inputs = document.getElementsByClassName("incorrectInput")
    return inputs.length === 0
}

export const showVictory = () => {
    if (victoryCondition()) {
        const inputs = document.getElementsByClassName("correctInput")
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].classList.add("victoryInput")
        }
        return true
    }
    return false
}
