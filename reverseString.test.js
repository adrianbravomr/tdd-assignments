import { reverseString } from "./reverseString";

test('Reverse a normal string',() => {
    expect(reverseString('adrian')).toEqual('nairda');
});

test('Reverse a numeric string',() => {
    expect(reverseString('12345')).toEqual('54321');
});

test('Reverse a mixed string',() => {
    expect(reverseString('12abc345')).toEqual('543cba21');
});

test('Reverse not a string throws error',() => {
    expect(reverseString(12345)).toEqual('Not a string');
});