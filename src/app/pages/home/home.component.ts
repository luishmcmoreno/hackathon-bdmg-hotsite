import { CalculateService } from './../../providers/calculate/calculate.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public simulatorData = {
    'id-state': 14,
    'id-calc': 85,
    kwp: ''
  };
  public simulating: boolean;
  public resultSimulation: any;
  public resultSimulationAlternative: any;
  public showCondicoes: boolean;
  public formSolicitate: FormGroup;
  public condicoes: any;
  public mediaEntreOsDoisValores: number;
  public parcelaEntrada: number;
  public valorFinanciado: number;
  public pmt: number;

  constructor(private fb: FormBuilder,
    private calculateService: CalculateService) {
      this._initForm();
  }

  private _initForm(): void {
    this.formSolicitate = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      razaoSocial: ['', [Validators.required]],
      cnpj: ['', [Validators.required]],
      faturamentoAnual: ['', [Validators.required]],
      prazo: [60, [Validators.required]],
      simple: [1, [Validators.required]],
      kwp: ['', [Validators.required]]
    });
  }

  public simulate(): void {
    this.simulating = true;
    this.calculateService.getInvesmentValue(this.simulatorData)
      .then(data => {
        this.resultSimulation = data;
      })
      .catch(console.error)
      .then(() => this.simulating = false);
  }

  public simulateAlternative(): void {
    const obj = {
      'id-state': 14,
      'id-calc': 85,
      kwp: this.formSolicitate.get('kwp')
    };

    const prazo = this.formSolicitate.get('prazo').value;


    this.calculateService.getInvesmentValue(obj)
    .then(data => {
      const maxCost = Number.parseFloat(data.maxCost.replace('R$', '').replace('.', '').replace(',', '.'));
      const minCost = Number.parseFloat(data.minCost.replace('R$', '').replace('.', '').replace(',', '.'));
      this.mediaEntreOsDoisValores = (maxCost + minCost) / 2;
      this.parcelaEntrada = ((10 / 100) * this.mediaEntreOsDoisValores);
      this.valorFinanciado = this.mediaEntreOsDoisValores - this.parcelaEntrada;

      const priceI = 1.6;
      this.pmt = this.valorFinanciado * (((priceI / 100) * (Math.pow((1 + priceI / 100), prazo )))
        / (Math.pow((1 + priceI / 100 ), prazo ) - 1 ));

      this.showCondicoes = true;
      this.condicoes = data;
    })
    .catch(console.error);

  }

  submitForm() {
    console.log(this.formSolicitate.value);
  }

  ngOnInit() {}
}
