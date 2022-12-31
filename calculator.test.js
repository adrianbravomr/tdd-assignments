import { calculator } from "./calculator";

test('Adding 1+2 equals to 3',() => {
    expect(calculator.add(1,2)).toEqual(3);
})

test('Adding 1+b throws error',() => {
    expect(calculator.add(1,'b')).toEqual('Invalid input');
})

test('Subtract 300-2 equals to 298',() => {
    expect(calculator.subtract(300,2)).toEqual(298);
})

test('Subtract 5-a throws error',() => {
    expect(calculator.subtract(5,'a')).toEqual('Invalid input');
})

test('Divide 100/20 equals to 5',() => {
    expect(calculator.divide(100,20)).toEqual(5);
})

test('Divide 100/a throws error',() => {
    expect(calculator.divide(100,'a')).toEqual('Invalid input');
})

test('Multiply 100/20 equals to 2000',() => {
    expect(calculator.multiply(100,20)).toEqual(2000);
})

test('Multiply 100/a throws error',() => {
    expect(calculator.multiply(100,'a')).toEqual('Invalid input');
})