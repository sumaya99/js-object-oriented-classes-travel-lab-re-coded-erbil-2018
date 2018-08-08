class Driver{
  constructor(name, thedayjoined ){
  this.name=name
  this.thedayjoined=thedayjoined
  }
  Driver.prototype.startDate(){}
  Driver.prototype.yearsExperienceFromBeginningOf(){}
}
let driver = new Driver("Alfie", "Aug 9, 1995")

class Route extends Driver{
  constructor(beginningLocation, thedayjoined ){
  this.beginningLocation=beginningLocation
  this.thedayjoined=thedayjoined
  }
  Driver.prototype.startDate(){}
  Driver.prototype.yearsExperienceFromBeginningOf(){}
}
let driver = new Driver("Alfie", "Aug 9, 1995")