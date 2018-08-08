class Driver{
  constructor(name, startDate ){
  this.name=name
  this.startDate=new Date(startDate)
  }
  Driver.prototype.yearsExperienceFromBeginningOf(year){
    return year-${this.startDate}.getFullYear();
  }
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