import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser'
import { WeatherCardComponent } from './weather-card.component';

describe('WeatherCardComponent', () => {
  let component: WeatherCardComponent;
  let fixture: ComponentFixture<WeatherCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it('should render feels like degree',()=>{
    component.weatherDetail.main['feels_like']=278.15;
    fixture.detectChanges();
    let de=fixture.debugElement.query(By.css('.feelslike'));
    let el:HTMLElement=de.nativeElement;
    expect(el.innerText).toContain('5');
  })

  it('should return celsuis degree',()=>{
    expect(component.toCelsius(273.15)).toBe(0);
  })
});
