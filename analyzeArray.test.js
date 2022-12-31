import { analyzeArray } from "./analyzeArray";

test('Analyze array',() => {
    expect(analyzeArray([1,2,3,4,5])).toEqual({average:3,min:1,max:5,length:5})
});

test('Analyze array, Error when no an array',() => {
    expect(analyzeArray('1,2,3,4,5')).toEqual('Not an array')
});

test('Analyze array, Error when no a valid array',() => {
    expect(analyzeArray([1,2,'a',4,5])).toEqual('Invalid array')
});