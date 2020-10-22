import { ModuleWithProviders, NgModule } from '@angular/core';

import { <name-capitalize-united>RootModule } from './<name-hyphen>-root.module';
import { <name-capitalize-united>Config, <name-capitalize-united>ConfigToken } from './<name-hyphen>.config';

@NgModule()
export class <name-capitalize-united>Module {
  static forRoot(config: <name-capitalize-united>Config): ModuleWithProviders<<name-capitalize-united>RootModule> {
    return {
      ngModule: <name-capitalize-united>RootModule,
      providers: [
        {
          provide: <name-capitalize-united>ConfigToken,
          useValue: config,
        },
      ],
    };
  }

  constructor() {
    throw new Error('Do not import <name-capitalize-united>Module directly. Use <name-capitalize-united>Module.forRoot.');
  }
}
