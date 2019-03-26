export const capitalise = (str) => {
    const words = str.split('-')

    return words.map(word => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase()
    }).join(' ')
}
