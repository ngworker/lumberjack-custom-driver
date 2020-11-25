import { TestBed } from '@angular/core/testing';

import { expectNgModuleToBeGuarded, resolveDependency } from '@internal/test-util';
import {
  LogDriver,
  LogDriverConfig,
  logDriverToken,
  lumberjackLogConfigToken,
  LumberjackLogEntryLevel,
  LumberjackLogLevel,
  LumberjackModule,
} from '@ngworker/lumberjack';

import { <name-capitalize-united>Config } from './<name-hyphen>.config';
import { <name-capitalize-united>Options } from './<name-hyphen>.options';
import { <name-capitalize-united>Module } from './<name-hyphen>.module';
import { <name-capitalize-united> } from './<name-hyphen>';

const create<name-capitalize-united> = (
  {
    config,
    isLumberjackModuleImportedFirst = true,
  }: {
    config: <name-capitalize-united>Config;
    isLumberjackModuleImportedFirst?: boolean;
  } = { config: {} }
) => {
  TestBed.configureTestingModule({
    imports: [
      isLumberjackModuleImportedFirst ? LumberjackModule.forRoot() : [],
      <name-capitalize-united>Module.forRoot(config),
      isLumberjackModuleImportedFirst ? [] : LumberjackModule.forRoot(),
    ],
  });

  const [<name-cammel>] = (resolveDependency(logDriverToken) as unknown) as LogDriver[];

  return <name-cammel>;
};

describe(<name-capitalize-united>Module.name, () => {
  it(`cannot be imported without using the ${<name-capitalize-united>Module.forRoot.name} method`, () => {
    expectNgModuleToBeGuarded(<name-capitalize-united>Module);
  });

  describe(<name-capitalize-united>Module.forRoot.name, () => {
    it('provides the http driver', () => {
      const <name-cammel> = create<name-capitalize-united>();

      expect(<name-cammel>).toBeInstanceOf(<name-capitalize-united>);
    });

    it('registers the specified log driver configuration', () => {
      const expectedConfig: <name-capitalize-united>Config = {
        levels: [LumberjackLogLevel.Error],
      };

      const <name-cammel> = create<name-capitalize-united>({ config: expectedConfig });

      const actualConfig = <name-cammel>.config;
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('registers a default level configuration if none is specified', () => {
      const customHttpConfig: <name-capitalize-united>Config = {};
      const expectedConfig: <name-capitalize-united>Config = { ...defaultLogDriverConfig, ...customHttpConfig };

      const <name-cammel> = create<name-capitalize-united>({ config: customHttpConfig });

      const actualConfig = <name-cammel>.config;
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('does register the specified log driver configuration when the lumberjack module is imported after the http driver module', () => {
      const expectedConfig: <name-capitalize-united>Config = {
        levels: [LumberjackLogLevel.Debug],
      };

      const <name-cammel> = create<name-capitalize-united>({
        config: expectedConfig,
        isLumberjackModuleImportedFirst: false,
      });

      const actualConfig = <name-cammel>.config;
      expect(actualConfig).toEqual(expectedConfig);
    });
  });
});
