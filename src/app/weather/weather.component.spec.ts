import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';
import { By } from '@angular/platform-browser';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable button if invalid input',()=>{
    component.cityset="";
    fixture.detectChanges();
    let de=fixture.debugElement.query(By.css('.btn1'));
    expect(de.properties['disabled']).toBeTruthy();
  })
});
