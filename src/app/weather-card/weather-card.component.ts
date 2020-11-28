import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { weatherRespnse } from './../common/responseObject';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css'],
  animations:[
    trigger('slide',[
      transition(':enter',[
        animate(2000,
        style({transform:'translateX(10px)'}),
        )
      ])
    ])
  ]
})
export class WeatherCardComponent implements OnInit {
Date=new Date();
  constructor() { }

    @Input()weatherDetail:weatherRespnse;
  ngOnInit(): void {
  }

  toCelsius(value){
    const x= (value-273.15);
    return(x);
  }

}
