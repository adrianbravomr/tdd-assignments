export const reverseString = (text) => {
    if(typeof(text)!=='string') return 'Not a string'
    return text.split("").reverse().join("")
}