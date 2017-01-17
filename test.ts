import binaryBitfield from './binary-bitfield';

// let x = Buffer.from('c0', 'hex');
// console.log(x);
// let y = Buffer.from('40', 'hex');
// console.log(y);
// let z = Buffer.from('80', 'hex');
// const a = new binaryBitfield('c0', '40');
// console.log(a);
// a.findNewPieces(y, (result, total) => {
//   console.log('hex: ', result);
//   console.log('total: ', total);
// });
// a.findNewPieces(z, (result, total) => {
//   console.log('hex: ', result);
//   console.log('total: ', total);
//   console.log('a: ', a);
//   console.log(a.getPercentage());
// });
//
// console.log(a);


//let bitfield = new binaryBitfield(9);

let bitfield = new binaryBitfield('c0', '40');

let y = Buffer.from('40', 'hex');

bitfield.findNewPieces(y, (result, total) => {
});

console.log(bitfield.set(0));
console.log(bitfield);
console.log(bitfield.get(1));
