  let d=new Date()
  console.log(d)
  console.log(d.toLocaleString())
    console.log(d.toDateString())
      console.log(d.toString())
        console.log(d.toTimeString())
        console.log(typeof d)
/**
 * 2026-06-09T01:51:30.671Z
* 11:34:23 AM
Thu Jun 04 2026
Thu Jun 04 2026 11:34:23 GMT+0000 (Coordinated Universal Time)
11:34:23 GMT+0000 (Coordinated Universal Time)
object */

let mycreatedDate=new Date(2023,0,23,12,30)//Mon Jan 23 2023 12:30:00 GMT+0530 (India Standard Time)
console.log(mycreatedDate.toLocaleDateString())
let mytimestamp=Date.now()//value in millisec IN POLLS FASTEST RESPONSE
console.log(mytimestamp)
console.log(mycreatedDate.getTime())
console.log(Date.now())//millisecond
console.log(Math.floor(Date.now()/1000))//seconds

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth()+1)
console.log(newdate.getDay())


newdate.toLocaleString('default',{
  //jo chahiye define kr skte
  weekday:"long",
  
})