export const calculator = {
    add : (a,b) => {
        if(typeof(a)!=='number'||typeof(b)!=='number') return 'Invalid input'
        return a+b;
    },
    subtract : (a,b) => {
        if(typeof(a)!=='number'||typeof(b)!=='number') return 'Invalid input'
        return a-b;
    },
    divide : (a,b) => {
        if(typeof(a)!=='number'||typeof(b)!=='number') return 'Invalid input'
        return a/b;
    },
    multiply : (a,b) => {
        if(typeof(a)!=='number'||typeof(b)!=='number') return 'Invalid input'
        return a*b;
    }
}

