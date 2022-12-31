import { caesarCipher } from "./caesarCipher";

test('Caesar Cipher -> aaabbbccc equals to bbbcccddd',()=>{
  expect(caesarCipher('aaabbbccc')).toEqual('bbbcccddd')
});

test('Caesar Cipher -> AbCdEfG equals to BcDeFg',()=>{
  expect(caesarCipher('AbCdEfG')).toEqual('BcDeFgH')
});

test('Caesar Cipher -> Mi edad es 24... -> Nj febe ft 24...',()=>{
  expect(caesarCipher('Mi edad es 24...')).toEqual('Nj febe ft 24...')
});

test('Caesar Cipher -> Invalid input',()=>{
  expect(caesarCipher(1234)).toEqual('Invalid input')
});

test('Caesar Cipher -> Invalid input',()=>{
  expect(caesarCipher([1,2,3,4])).toEqual('Invalid input')
});