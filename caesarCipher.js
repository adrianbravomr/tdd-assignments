export const caesarCipher = (text) => {
    
    if(typeof(text)!=='string') return 'Invalid input'

    let characters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return text.split('')
    .map(letter => {

        let isUppercase = letter == letter.toUpperCase();
        letter = letter.toLowerCase();

        if(letter=='z')
            letter = 'a';

        else if(characters.includes(letter))
            letter = characters[characters.indexOf(letter)+1];

        letter = isUppercase ? letter.toUpperCase() : letter;

        return letter;

    }).join('');
}