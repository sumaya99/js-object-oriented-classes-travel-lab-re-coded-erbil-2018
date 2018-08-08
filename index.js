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
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
  }
  
  estimatedTime(min){
    console.log(this.blocksTravelled())
    if(min === undefined){
    return this.blocksTravelled;}
    else{
      return
    }
  }
}