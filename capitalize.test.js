import { capitalize } from "./capitalize";

test('Capitalize lowercase string',() => {
    expect(capitalize('adrian')).toEqual('Adrian');
});

test('Capitalize UPPERCASE string',() => {
    expect(capitalize('ADRIAN')).toEqual('Adrian');
});

test('Capitalize capitalized string',() => {
    expect(capitalize('Adrian')).toEqual('Adrian');
});

test('Capitalize not affecting number in strings',() => {
    expect(capitalize('1234')).toEqual('1234');
});
