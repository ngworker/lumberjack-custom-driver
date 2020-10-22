import { InjectionToken } from '@angular/core';

import { LogDriverConfig } from '@ngworker/lumberjack';

export const LumberjackCustomDriverConfigToken: InjectionToken<LumberjackCustomDriverConfig> = new InjectionToken(
  '__LUMBERJACK_CUSTOM_DRIVER_CONFIG__'
);

// tslint:disable-next-line: no-empty-interface
export interface LumberjackCustomDriverConfig extends LogDriverConfig {}
