'use strict'

const Raptor = require('./raptor')

/**
 * OOP Builder for Raptor
 *
 * @class RaptorBuilder
 */
class RaptorBuilderOOP {
   constructor(specimenId) {
      this.specimenId = specimenId
   }
   withSpeed(speed) {
      this.speed = speed
      return this
   }
   withPlumage(plumage) {
      this.plumage = plumage
      return this
   }
   build() {
      return new Raptor(this)
   }
}

module.exports = RaptorBuilderOOP
