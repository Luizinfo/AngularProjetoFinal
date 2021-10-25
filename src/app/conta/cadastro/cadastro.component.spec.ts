import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { CustomFormsModule } from 'ngx-custom-validators';
import { ContaRoutingModule } from '../conta.route';
import { ContaGuard } from '../services/conta.guard';
import { ContaService } from '../services/conta.service';

import { CadastroComponent } from './cadastro.component';

describe('CadastroComponent', () => {
  let component: CadastroComponent;
  let fixture: ComponentFixture<CadastroComponent>;
  let contaService: ContaService;

  let contaServiceStub: Partial<ContaService>;

  beforeEach(() => {

    // stub UserService for test purposes
    contaServiceStub = {

  };

    TestBed.configureTestingModule({
      declarations: [ CadastroComponent ],
      providers: [ { provide: ContaService, useValue: contaServiceStub },
        FormBuilder,
      Router ],
   });

    fixture = TestBed.createComponent(CadastroComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();

    contaService = TestBed.inject(ContaService);

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
