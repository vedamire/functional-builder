const {
    pipe
} = require("rambda");

// Class that we are going to build
class Raptor {
    constructor(build) {
       this.specimenId = build.specimenId;
       this.speed = build.speed;
       this.plumage = build.plumage;
    }
 }
 
 // Functional builder
 const withSpecimenId = specimenId => inp => ({specimenId, ...inp});
 const withSpeed = speed => inp => ({speed, ...inp});
 const withPlumage = plumage => inp => ({plumage, ...inp});

 const build = pipe( // compose() will produce the same result because ordering doesn't matter
     withSpeed("speed"),
     withSpecimenId("some id"),
     withPlumage("plumage"),
 )
 const def = {}
 const raptor = new Raptor(build(def));
 console.log(raptor);


//  OOP builder
 class Builder {
    constructor(specimenId) {
       this.specimenId = specimenId;
    }
    withSpeed(speed) {
       this.speed = speed;
       return this;
    }
    withPlumage(plumage) {
       this.plumage = plumage;
       return this;
    }
    build() {
       return new Raptor(this);
    }
 }

 let oopbuilder = new Builder('oop someId');
 let oopraptor = oopbuilder
    .withSpeed("oop speed")
    .withPlumage('oop plumages')
    .build();
console.log(oopraptor)
