import binaryBitfield from './binary-bitfield';
import { Buffer } from 'buffer';

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

let bitfield = new binaryBitfield(3, '80');
// let x = bitfield.setDownloaded(1);
// console.log(bitfield);
// console.log(x);
// x = bitfield.setDownloaded(2);
// console.log(bitfield);
// console.log(x);

let x = bitfield.onHave(1,Buffer.from('00', 'hex'));
console.log(x);
 x = bitfield.onHave(1,'0000');
 x = bitfield.onHave(1,'0000');

 x = bitfield.onHave(1,'0000');
 x = bitfield.onHave(1,'0000');


// let y = Buffer.from('06', 'hex');
// let x = Buffer.from('c0', 'hex');
// let z = Buffer.from('fe', 'hex');
// let z2 = Buffer.from('e4', 'hex');
// let z3 = Buffer.from('a8', 'hex');
// let z4 = Buffer.from('5e', 'hex');
// console.log('y: ', y);
// console.log('x: ', x);

// bitfield.findNewPieces(z2, false, (result, downloaded, which) => {
//   console.log('b0: ' ,bitfield);
//   console.log('r0: ' ,result);
//   console.log('which0: ' ,which);
//   console.log('d0: ' ,downloaded);
// });
// bitfield.findNewPieces(z3, (result, downloaded, which) => {
//   console.log('b5: ' ,bitfield);
//   console.log('r5: ' ,result);
//   console.log('which5: ' ,which);
//   console.log('d5: ' ,downloaded);
// });
// bitfield.findNewPieces(z4, (result, downloaded, which) => {
//   console.log('b4: ' ,bitfield);
//   console.log('r4: ' ,result);
//   console.log('which4: ' ,which);
//   console.log('d4: ' ,downloaded);
// });


// bitfield.findNewPieces(x, (result, downloaded, which) => {
//   console.log('b3: ' ,bitfield);
//   console.log('r3: ' ,result);
//   console.log('which3: ' ,which);
//   console.log('d3: ' ,downloaded);
// });
//
// bitfield.findNewPieces(y, (result, downloaded, which) => {
//   console.log('b1: ' ,bitfield);
//   console.log('r1: ' ,result);
//   console.log('which1: ' ,which);
//   console.log('d1: ' ,downloaded);
// });
//
//
// //SET EARLIEST
// bitfield.findNewPieces(x, (result, downloaded, which) => {
//   console.log('b2: ' ,bitfield);
//   console.log('r2: ' ,result);
//   console.log('which2: ' ,which);
//   console.log('d2: ' ,downloaded);
// });
