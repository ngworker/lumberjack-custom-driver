import { Inject, NgModule, NgZone, Optional, SkipSelf } from '@angular/core';

import { LogDriverConfig, LogDriverConfigToken, LogDriverToken } from '@ngworker/lumberjack';

import { <name-capitalize-united>Config, <name-capitalize-united>ConfigToken } from './<name-hyphen>.config';
import { <name-capitalize-united> } from './<name-hyphen>';

export function <name-cammel>Factory(
  logDriverConfig: LogDriverConfig,
  <name-cammel>Config: <name-capitalize-united>Config
): <name-capitalize-united> {
  const config: <name-capitalize-united>Config = {
    ...logDriverConfig,
    ...<name-cammel>Config,
  };

  return new <name-capitalize-united>(config);
}

@NgModule({
  providers: [
    {
      deps: [LogDriverConfigToken, <name-capitalize-united>ConfigToken],
      multi: true,
      provide: LogDriverToken,
      useFactory: <name-cammel>Factory,
    },
  ],
})
export class <name-capitalize-united>RootModule {
  constructor(
    @Optional()
    @SkipSelf()
    @Inject(<name-capitalize-united>RootModule)
    maybeNgModuleFromParentInjector?: <name-capitalize-united>RootModule
  ) {
    if (maybeNgModuleFromParentInjector) {
      throw new Error(
        '<name-capitalize-united>Module.forRoot registered in multiple injectors. Only call it from your root injector such as in AppModule.'
      );
    }
  }
}
