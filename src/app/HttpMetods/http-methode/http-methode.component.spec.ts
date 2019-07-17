import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpMethodeComponent } from './http-methode.component';

describe('HttpMethodeComponent', () => {
  let component: HttpMethodeComponent;
  let fixture: ComponentFixture<HttpMethodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpMethodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpMethodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
