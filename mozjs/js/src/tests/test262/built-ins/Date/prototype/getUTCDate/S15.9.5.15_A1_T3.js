// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getUTCDate" has { DontEnum } attributes
esid: sec-date.prototype.getutcdate
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('getUTCDate')) {
  $ERROR('#1: The Date.prototype.getUTCDate property has the attribute DontEnum');
}

for (var x in Date.prototype) {
  if (x === "getUTCDate") {
    $ERROR('#2: The Date.prototype.getUTCDate has the attribute DontEnum');
  }
}

reportCompare(0, 0);
