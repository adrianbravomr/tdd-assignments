export const capitalize = (text) => {
    if(typeof(text)!=='string') return 'Not a string'
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}