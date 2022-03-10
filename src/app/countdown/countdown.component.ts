import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() seconds: any;
  constructor() { }
  showTime : string;
  ngOnInit() {
    this.convertTime();
    console.log(this.seconds)
    //setInterval(this.convertTime, 10000,this.seconds);
  }
  convertTime(){
    var interval = setInterval(() => {
      var seconds = this.seconds;
      let dayTime = (60*60*24)
      var day = Math.floor(seconds/dayTime)
      let rmainingTime = (seconds-(dayTime*day));
      let hoursTime = (60*60);
      var hour = Math.floor(rmainingTime/(hoursTime))
      rmainingTime = (rmainingTime-(hoursTime*hour));
      let minTime = 60;
      var minute = Math.floor(rmainingTime/minTime)
      rmainingTime = (rmainingTime-(minTime*minute));
      var second = Math.floor(rmainingTime)
      this.seconds--;
      if(day >= 0){
        
        if(day >= 2 && hour >= 0 && minute >= 0 && second >= 0){
          this.showTime = day+' Days';
        }else if(day > 0 && hour >= 0 && minute >= 0 && second >= 0){
          this.showTime = day+' Days '+hour+' Hours';
        }else if(day <= 0 && hour >= 0 && minute >= 0 && second >= 0){
          this.showTime = hour+' Hours '+minute+' Minutes';
        }else if(day <= 0 && hour <= 0 && minute >= 0 && second >= 0){
          this.showTime = minute+' Minutes '+second+' Seconds';
        }else if(day <= 0 && hour <= 0 && minute <= 0 && second >= 0){
          this.showTime = second+' Seconds left';
        }else{
          this.showTime = 'Match Started';
        }
      }
    }, 1000);
  }
}