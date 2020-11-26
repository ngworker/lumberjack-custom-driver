import { InjectionToken } from '@angular/core';

import { LogDriverConfig } from '@ngworker/lumberjack';

export const <name-cammel>ConfigToken: InjectionToken<<name-capitalize-united>Config> = new InjectionToken(
  '__<name-uppercase-underscore>_CONFIG__'
);

// tslint:disable-next-line: no-empty-interface
export interface <name-capitalize-united>Config extends LogDriverConfig {
  someNeededOption: string
}
