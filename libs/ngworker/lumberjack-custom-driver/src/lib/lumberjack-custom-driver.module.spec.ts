import { TestBed } from '@angular/core/testing';

import { expectNgModuleToBeGuarded, resolveDependency } from '@internal/test-util';
import {
  defaultLogDriverConfig,
  LogDriver,
  LogDriverToken,
  LumberjackLogLevel,
  LumberjackModule,
} from '@ngworker/lumberjack';

import { LumberjackCustomDriverConfig } from './lumberjack-custom-driver.config';
import { LumberjackCustomDriverModule } from './lumberjack-custom-driver.module';
import { LumberjackCustomDriver } from './lumberjack-custom.driver';

const createLumberjackCustomDriver = (
  {
    config,
    isLumberjackModuleImportedFirst = true,
  }: {
    config: LumberjackCustomDriverConfig;
    isLumberjackModuleImportedFirst?: boolean;
  } = { config: {} }
) => {
  TestBed.configureTestingModule({
    imports: [
      isLumberjackModuleImportedFirst ? LumberjackModule.forRoot() : [],
      LumberjackCustomDriverModule.forRoot(config),
      isLumberjackModuleImportedFirst ? [] : LumberjackModule.forRoot(),
    ],
  });

  const [lumberjackCustomDriver] = (resolveDependency(LogDriverToken) as unknown) as LogDriver[];

  return lumberjackCustomDriver;
};

describe(LumberjackCustomDriverModule.name, () => {
  it(`cannot be imported without using the ${LumberjackCustomDriverModule.forRoot.name} method`, () => {
    expectNgModuleToBeGuarded(LumberjackCustomDriverModule);
  });

  describe(LumberjackCustomDriverModule.forRoot.name, () => {
    it('provides the http driver', () => {
      const lumberjackCustomDriver = createLumberjackCustomDriver();

      expect(lumberjackCustomDriver).toBeInstanceOf(LumberjackCustomDriver);
    });

    it('registers the specified log driver configuration', () => {
      const expectedConfig: LumberjackCustomDriverConfig = {
        levels: [LumberjackLogLevel.Error],
      };

      const lumberjackCustomDriver = createLumberjackCustomDriver({ config: expectedConfig });

      const actualConfig = lumberjackCustomDriver.config;
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('registers a default level configuration if none is specified', () => {
      const customHttpConfig: LumberjackCustomDriverConfig = {};
      const expectedConfig: LumberjackCustomDriverConfig = { ...defaultLogDriverConfig, ...customHttpConfig };

      const lumberjackCustomDriver = createLumberjackCustomDriver({ config: customHttpConfig });

      const actualConfig = lumberjackCustomDriver.config;
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('does register the specified log driver configuration when the lumberjack module is imported after the http driver module', () => {
      const expectedConfig: LumberjackCustomDriverConfig = {
        levels: [LumberjackLogLevel.Debug],
      };

      const lumberjackCustomDriver = createLumberjackCustomDriver({
        config: expectedConfig,
        isLumberjackModuleImportedFirst: false,
      });

      const actualConfig = lumberjackCustomDriver.config;
      expect(actualConfig).toEqual(expectedConfig);
    });
  });
});
