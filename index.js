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
  constructor(beginningLocation, endingLocation ){
  this.beginningLocation=beginningLocation
  this.endingLocation=endingLocation
  }
  Driver.prototype.blocksTravelled(){}
  Driver.prototype.estimatedTime(){}
}
let driver = new Driver("Alfie", "Aug 9, 1995")
let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']