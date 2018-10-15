import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculadoraService = TestBed.get(CalculadoraService);
    expect(service).toBeTruthy();
  });

  it('deve garantir que 1 + 4 = 5'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(resultado).toEqual(5);
  })

  it('deve garantir que 1 - 4 = 3'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(1, 4, CalculadoraService.SUBTRACAO);
    expect(resultado).toEqual(3);
  })

  it('deve garantir que 1 * 4 = 4'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(1, 4, CalculadoraService.MULTIPLICACAO);
    expect(resultado).toEqual(4);
  })

  it('deve garantir que 4 / 2 = 2'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(4, 2, CalculadoraService.DIVISAO);
    expect(resultado).toEqual(2);
  })

  it('deve retornar 0 para operação inválida'),
  inject([CalculadoraService], (service: CalculadoraService) => {
    let resultado = service.calcular(1, 4, CalculadoraService.DIVISAO);
    expect(resultado).toEqual(0);
  })

});
