/**
 * Functional style builder for Raptor
 * 
 * @module RaptorBuilderFP_2
 */

'use strict'

// NOTE can use `partial` here
// NOTE new value last for forcing idempotence
const withSpecimenId = specimenId => x => ({ ...x, specimenId, })
const withSpeed = speed => x => ({ ...x, speed, })
const withPlumage = plumage => x => ({ ...x, plumage, })

module.exports = {
    withPlumage,
    withSpecimenId,
    withSpeed,
}
