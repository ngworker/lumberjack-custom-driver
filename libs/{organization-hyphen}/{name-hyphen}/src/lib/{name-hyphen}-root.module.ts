import { Inject, NgModule, Optional, SkipSelf } from '@angular/core';
import { LumberjackLogDriverConfig, lumberjackLogDriverConfigToken, lumberjackLogDriverToken } from '@ngworker/lumberjack';

import { <name-capitalize-united>Config, <name-camel>ConfigToken } from './<name-hyphen>.config';
import { <name-capitalize-united> } from './<name-hyphen>';

export function <name-camel>Factory(
  logDriverConfig: LumberjackLogDriverConfig,
  <name-camel>Config: <name-capitalize-united>Config
): <name-capitalize-united> {
  const config: <name-capitalize-united>Config = {
    ...logDriverConfig,
    ...<name-camel>Config,
  };

  return new <name-capitalize-united>(config);
}

@NgModule({
  providers: [
    {
      deps: [lumberjackLogDriverConfigToken, <name-camel>ConfigToken],
      multi: true,
      provide: lumberjackLogDriverToken,
      useFactory: <name-camel>Factory,
    },
  ],
})
export class <name-capitalize-united>RootModule {
  constructor(
    // tslint:disable: no-any no-null-keyword
    @Optional()
    @SkipSelf()
    @Inject(<name-capitalize-united>RootModule)
    maybeNgModuleFromParentInjector: <name-capitalize-united>RootModule = null as any
    // tslint:enable: no-any no-null-keyword
  ) {
    if (maybeNgModuleFromParentInjector) {
      throw new Error(
        '<name-capitalize-united>Module.forRoot registered in multiple injectors. Only call it from your root injector such as in AppModule.'
      );
    }
  }
}
