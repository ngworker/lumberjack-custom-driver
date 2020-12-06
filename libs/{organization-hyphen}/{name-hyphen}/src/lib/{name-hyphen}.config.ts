import { InjectionToken } from '@angular/core';
import { LumberjackLogDriverConfig } from '@ngworker/lumberjack';


export const <name-camel>ConfigToken: InjectionToken<<name-capitalize-united>Config> = new InjectionToken(
  '__<name-uppercase-underscore>_CONFIG__'
);

// tslint:disable-next-line: no-empty-interface
export interface <name-capitalize-united>Config extends LumberjackLogDriverConfig {
  someNeededOption: string
}
