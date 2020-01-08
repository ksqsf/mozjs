// |reftest| skip -- regexp-unicode-property-escapes is not supported
// Copyright 2019 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Syriac`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v12.1.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x00060C,
    0x00061F,
    0x000640,
    0x000670
  ],
  ranges: [
    [0x00061B, 0x00061C],
    [0x00064B, 0x000655],
    [0x000700, 0x00070D],
    [0x00070F, 0x00074A],
    [0x00074D, 0x00074F],
    [0x000860, 0x00086A]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Syriac}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Syriac}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Syrc}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Syrc}"
);
testPropertyEscapes(
  /^\p{scx=Syriac}+$/u,
  matchSymbols,
  "\\p{scx=Syriac}"
);
testPropertyEscapes(
  /^\p{scx=Syrc}+$/u,
  matchSymbols,
  "\\p{scx=Syrc}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00070E
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00060B],
    [0x00060D, 0x00061A],
    [0x00061D, 0x00061E],
    [0x000620, 0x00063F],
    [0x000641, 0x00064A],
    [0x000656, 0x00066F],
    [0x000671, 0x0006FF],
    [0x00074B, 0x00074C],
    [0x000750, 0x00085F],
    [0x00086B, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Syriac}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Syriac}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Syrc}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Syrc}"
);
testPropertyEscapes(
  /^\P{scx=Syriac}+$/u,
  nonMatchSymbols,
  "\\P{scx=Syriac}"
);
testPropertyEscapes(
  /^\P{scx=Syrc}+$/u,
  nonMatchSymbols,
  "\\P{scx=Syrc}"
);

reportCompare(0, 0);
