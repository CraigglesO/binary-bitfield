# binary-bitfield [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/CraigglesO/binary-bitfield.svg)](https://greenkeeper.io/)

[travis-image]: https://travis-ci.org/CraigglesO/binary-bitfield.svg?branch=master
[travis-url]: https://travis-ci.org/CraigglesO/binary-bitfield
[npm-image]: https://img.shields.io/npm/v/binary-bitfield.svg
[npm-url]: https://npmjs.org/package/binary-bitfield
[downloads-image]: https://img.shields.io/npm/dm/binary-bitfield.svg
[downloads-url]: https://npmjs.org/package/binary-bitfield

### Binary bitfield system to easily keep track of torrent pieces

Most bitfield systems are very simplistic. This one allows you to:

- Read the hex code or binary code (binary is more useful IMO)
- Know how much you have downloaded
- Keep track of how many pieces you have access to
  - Know where 'rare' pieces exist easily (ensure you can get all data)
  - Know peers piece you need closes to index 0 (streaming)
  - Get quick access to the total amount of each piece
- Handles Buffers or Hex-strings as input
- Truly Async to not bog down your application.

* NEW : onHave function. Updates a peers hash with piece index


binaryBitfield(pieces [, downloaded])
  - pieces: number of pieces total to download (number or Buffer or Hex String)
  - downloaded: which pieces have already been downloaded. (Buffer or Hex String)

## Install

``` typescript
npm install binary-bitfield
```

## Usage
``` typescript
import binaryBitfield from 'binary-bitfield';

// Create bitfield with just a piece size:
let bitfield1 = new binaryBitfield(9);
// binaryBitfield {
//   pieces: 9,
//   bitfield: '1111111110000000',
//   totalBitfield: '0000000000000000',
//   downloaded: '0000000000000000',
//   percent: 0 }

// Create bitfield with a hex input for both piece size and downloaded
let bitfield2 = new binaryBitfield('c0', '40');
//binaryBitfield {
//  pieces: 2,
//  bitfield: '11000000',
//  totalBitfield: '01000000',
//  downloaded: '01000000',
//  percent: 0.5 }


// Keep track of the total bitfield as peers come in:

let buffer = Buffer.from('40', 'hex');

bitfield2.findNewPieces(buffer, (result, total) => {
  console.log('hex: ', result);
  console.log('total: ', total);
  console.log(bitfield);
});

hex: 00          // buffer or 'peer' had no new pieces
total:  02000000 // a new totalBitfield count
// binaryBitfield {
//  pieces: 2,
//  bitfield: '11000000',
//  totalBitfield: '02000000',
//  downloaded: '01000000',
//  percent: 0.5 }

bitfield.set(0)  // returns downloaded: '11000000'
// binaryBitfield {
//   pieces: 2,
//   bitfield: '11000000',
//   totalBitfield: '02000000',
//   downloaded: '11000000',
//   percent: 1 }

bitfield.get(0) // true

```



## Variables and Functions:

### Variables

pieces:        number
bitfield:      string
totalBitfield: string
downloaded:    string
percent:       number

### Functions:

`isSeeder(string | Buffer): Boolean`
This compares the bitfield to input. This quickly ensures the peer is a seeder.
The return is `true` if peer is seeder

`getBitfield() : string`
Get the bitfield.

`binary2hex(binary: string): string`
Convert a binary string to hex. This system reads the input at half byte (4 bit) interval.

`hex2binary(hex: string): string`
Convert a hex string to binary. This system reads the input at half byte (4 bit) interval.

`getPercentage(): number`
Returns the current percentage downloaded.

**NEW** `onHave(piece: number, bitfield: string | Buffer): string`
Updates a peers hash with piece index and returns the new bitfield.


## ISC License (Open Source Initiative)

ISC License (ISC)
Copyright <2017> <Craig OConnor>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
