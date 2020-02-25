/** 
 * Entry point
*/

'use strict'

const {
   pipe,
} = require('ramda')

const Raptor = require('./raptor')
const RaptorBuilderOOP = require('./raptor-builder-oop')
const {
   withPlumage,
   withSpecimenId,
   withSpeed,
} = require('./raptor-builder-fp')

const {
   _with,
   _build,
} = require('./raptor-builder-fp-2')

// Tests

// FP
const proto = Object.freeze({})
const raptorRaw = pipe( // compose() will produce the same result because ordering doesn't matter
   withSpeed('speed'),
   withSpecimenId('some id'),
   withPlumage('plumage'),
)(proto)

console.log('raptorRaw:', raptorRaw)

const fpRaptor = new Raptor(raptorRaw)
console.log('fpRaptor:', fpRaptor)

// OOP
const raptorBuilder = new RaptorBuilderOOP('oop someId')
const oopRaptor = raptorBuilder
   .withSpeed('oop speed')
   .withPlumage('oop plumages')
   .build()

console.log('oopRaptor:', oopRaptor)

// FP 2, generic
const raptorRaw_2 = pipe(
   _with({ speed: 'speed' }),
   _with({ specimenId: 'specimenId' }),
   _with({ plumage: 'plumage' }),
   _build,
)(proto)

console.log('raptorRaw_2', raptorRaw_2)
