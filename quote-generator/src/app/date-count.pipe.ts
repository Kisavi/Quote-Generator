import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): string {
    let dateCounter: string = "";
    let today: any = new Date(); //get current date and time
    var difference = Math.abs(value - today) / 1000; //this returns (date of quote creation - current date) in milliseconds  which we then convert to seconds

    //number of days
    var days = Math.floor(difference / 86400); //this converts seconds to days
    if (days > 0) {
      dateCounter += days + "days ";
    }
    //number of hours
    var hours = Math.floor(difference / 3600) % 24; //convert seconds to hours and return number of hours left to make a day
    if (hours > 0) {
      dateCounter += hours + "hrs ";
    }
    //number of minutes
    var minutes = Math.floor(difference / 60) % 60; //convert seconds to minutes and return number of minutes left to make an hour
    if (minutes > 0) {
      dateCounter += minutes + "mins ";
    }
    //number of seconds
    var seconds = Math.floor(difference % 60); //return number of seconds left to make a minute
    if (seconds > 0) {
      dateCounter += seconds + "secs";
    }

    return dateCounter
  }

}
