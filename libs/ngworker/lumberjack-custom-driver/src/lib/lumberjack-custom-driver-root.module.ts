import { Inject, NgModule, NgZone, Optional, SkipSelf } from '@angular/core';

import { LogDriverConfig, LogDriverConfigToken, LogDriverToken } from '@ngworker/lumberjack';

import { LumberjackCustomDriverConfig, LumberjackCustomDriverConfigToken } from './lumberjack-custom-driver.config';
import { LumberjackCustomDriver } from './lumberjack-custom.driver';

export function lumberjackCustomDriverFactory(
  logDriverConfig: LogDriverConfig,
  lumberjackCustomDriverConfig: LumberjackCustomDriverConfig
): LumberjackCustomDriver {
  const config: LumberjackCustomDriverConfig = {
    ...logDriverConfig,
    ...lumberjackCustomDriverConfig,
  };

  return new LumberjackCustomDriver(config);
}

@NgModule({
  providers: [
    {
      deps: [LogDriverConfigToken, LumberjackCustomDriverConfigToken],
      multi: true,
      provide: LogDriverToken,
      useFactory: lumberjackCustomDriverFactory,
    },
  ],
})
export class LumberjackCustomDriverRootModule {
  constructor(
    @Optional()
    @SkipSelf()
    @Inject(LumberjackCustomDriverRootModule)
    maybeNgModuleFromParentInjector?: LumberjackCustomDriverRootModule
  ) {
    if (maybeNgModuleFromParentInjector) {
      throw new Error(
        'LumberjackCustomDriverModule.forRoot registered in multiple injectors. Only call it from your root injector such as in AppModule.'
      );
    }
  }
}
