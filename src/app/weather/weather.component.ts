import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WeatherService } from './../Services/weather/weather.service';
import { weatherRespnse } from './../common/responseObject';
import { AppError } from './../common/app-error';
import { NotFoundError } from './../common/not-found-error';
import { UnAuthorizedError } from './../common/UnAuthorized-error';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { LogsService } from './../Services/logs/logs.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  animations:[
    trigger('fade',[
      state('void',style({opacity:0})),
      transition(':enter, :leave',animate(2000))
    ])
  ]
})
export class WeatherComponent implements OnInit {
  success:boolean=false;
  loading:boolean;
  weatherDetail:weatherRespnse;
  mode:string='Indeterminate';
 
  constructor(private toast: ToastrService,private weather:WeatherService,private logservice:LogsService)
   { 
   
  }
  form=new FormGroup({
    citySearch : new FormControl('', [
      Validators.required,
    ])

  })
  set cityset(value){
    this.form.get('citySearch').setValue=value;
  }
  get city(){
    return this.form.get('citySearch');
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.loading=true;
    this.weather.getCurrentWeather(this.city.value).subscribe((response:weatherRespnse)=>{
        this.weatherDetail=response;
        this.logservice.AddRead(this.weatherDetail).subscribe(response=>{
          console.log("seved to database");
          
        },(error:AppError)=>{
          if(error instanceof NotFoundError)
          this.toast.error("Enter a valid City","NOT FOUND")
    
          else if(error instanceof UnAuthorizedError){
            this.toast.error("you are not authorized","register first");
    
          }});
        this.success=true;
        
    },(error:AppError)=>{
      if(error instanceof NotFoundError)
      this.toast.error("Enter a valid City","NOT FOUND")

      else if(error instanceof UnAuthorizedError){
        this.toast.error("you are not authorized","register first");

      }
    })
    this.loading=false;
  }

}
