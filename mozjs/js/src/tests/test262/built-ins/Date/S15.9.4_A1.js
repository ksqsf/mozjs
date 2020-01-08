// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date constructor has the property "prototype"
esid: sec-date-constructor
description: Checking existence of the property "prototype"
---*/

if (!Date.hasOwnProperty("prototype")) {
  $ERROR('#1: The Date constructor has the property "prototype"');
}

reportCompare(0, 0);
