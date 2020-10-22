import { ModuleWithProviders, NgModule } from '@angular/core';

import { LumberjackCustomDriverRootModule } from './lumberjack-custom-driver-root.module';
import { LumberjackCustomDriverConfig, LumberjackCustomDriverConfigToken } from './lumberjack-custom-driver.config';

@NgModule()
export class LumberjackCustomDriverModule {
  static forRoot(config: LumberjackCustomDriverConfig): ModuleWithProviders<LumberjackCustomDriverRootModule> {
    return {
      ngModule: LumberjackCustomDriverRootModule,
      providers: [
        {
          provide: LumberjackCustomDriverConfigToken,
          useValue: config,
        },
      ],
    };
  }

  constructor() {
    throw new Error('Do not import LumberjackCustomDriverModule directly. Use LumberjackCustomDriverModule.forRoot.');
  }
}
