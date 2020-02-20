import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaLoginPage } from './tela-login.page';

describe('TelaLoginPage', () => {
  let component: TelaLoginPage;
  let fixture: ComponentFixture<TelaLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaLoginPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
