// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.indexof
description: >
    Array.prototype.indexOf returns -1 when 'fromIndex' is length of
    array - 1
---*/

assert.sameValue([1, 2, 3].indexOf(1, 2), -1, '[1, 2, 3].indexOf(1, 2)');

reportCompare(0, 0);
