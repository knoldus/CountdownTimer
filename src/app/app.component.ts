import {
  AfterViewInit,
  Component
} from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements AfterViewInit {
  accomplished:number = 20
  currentDate: any;
  targetDate: any;
  cDateMillisecs: any;
  tDateMillisecs: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  year:number = 2021;
  month:number = 9;
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  day:number = 18;

  ngAfterViewInit() {
    this.myTimer()
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2022,12,31);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.days = Math.floor(this.hours / 24);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? "0" + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;

    document.getElementById("days").innerText = this.days;
    document.getElementById("hours").innerText = (Number(this.hours) + 6).toString();
    document.getElementById("mins").innerText = this.minutes;
    document.getElementById("seconds").innerText = this.seconds;

    setInterval(this.myTimer, 1000);
  }
    
}
