export const analyzeArray = (arr) => {
    if(!Array.isArray(arr)) return 'Not an array'
    if(!arr.every(item => typeof(item)==='number')) return 'Invalid array'
    return {
        average: 
            Math.floor(arr.reduce((avg, current, index) => 
                avg+current/arr.length )),
        min: 
            arr.reduce((min,current)=> 
                Math.min(current,min)),
        max: 
            arr.reduce((max,current)=> 
                 Math.max(current,max)),
        length:
            arr.length,
    }
}