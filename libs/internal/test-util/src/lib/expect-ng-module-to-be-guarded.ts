import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';

/**
 * Assert that an NgModule is guarded against direct import.
 */
export const expectNgModuleToBeGuarded = <TModule>(ngModuleType: Type<TModule>) => {
  let ngModule: TModule | undefined;

  TestBed.configureTestingModule({
    imports: [ngModuleType],
  });

  // tslint:disable-next-line: no-floating-promises
  expect(() => {
    ngModule = TestBed.inject(ngModuleType);
  })
    .withContext(`${ngModuleType.name} must guard against being imported directly`)
    .toThrow();
};
