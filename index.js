class Driver{
  constructor(name, startDate ){
  this.name=name
  this.startDate=new Date(startDate)
  }
  yearsExperienceFromBeginningOf(year){
    return year-this.startDate.getFullYear();
  }
}
let driver = new Driver("Alfie", "Aug 9, 1995")
driver.yearsExperienceFromBeginningOf(2018);

class Route{
  constructor(beginningLocation, endingLocation ){
  this.beginningLocation=beginningLocation
  this.endingLocation=endingLocation
  }
  blocksTravelled(){
    return 
  }
  
  estimatedTime(){
    
    
  }
}