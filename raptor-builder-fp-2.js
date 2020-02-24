/**
 * Functional style builder #2 for Raptor
 * 
 * @module RaptorBuilderFP_2
 */

'use strict'

const {
    identity,
} = require('ramda')

// NOTE can use `partial` here
// NOTE new value last for forcing idempotence
const _with = params => x => ({ ...x, ...params, })

module.exports = {
    _with,
    _build: identity,
}
