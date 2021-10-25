import { StringUtils } from "./string-utils";
import { ComponentFixture, TestBed } from "@angular/core/testing";


describe('StringUtil',() => {

it('Deve retornar apenas números', () => {
  expect(StringUtils.somenteNumero('123.254-899')).toBe('123254899')
  expect(StringUtils.somenteNumero('12/254-899')).toBe('12254899')
});

});
