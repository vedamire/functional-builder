'use strict'

/**
 * Class that we are going to build
 *
 * @class Raptor
 */
class Raptor {
   constructor(builder) {
      this.specimenId = builder.specimenId
      this.speed = builder.speed
      this.plumage = builder.plumage
   }
}

module.exports = Raptor
