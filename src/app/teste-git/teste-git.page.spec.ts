import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TesteGitPage } from './teste-git.page';

describe('TesteGitPage', () => {
  let component: TesteGitPage;
  let fixture: ComponentFixture<TesteGitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteGitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TesteGitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
