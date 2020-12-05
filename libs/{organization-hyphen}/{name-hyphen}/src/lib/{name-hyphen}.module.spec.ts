import { TestBed } from '@angular/core/testing';
import {
  LumberjackConfigLevels,
  lumberjackConfigToken,
  LumberjackLevel,
  LumberjackLogDriver,
  LumberjackLogDriverConfig,
  lumberjackLogDriverToken,
  LumberjackModule,
} from '@ngworker/lumberjack';

import { expectNgModuleToBeGuardedAgainstDirectImport } from '@internal/test-util';

import { <name-capitalize-united>Config } from './<name-hyphen>.config';
import { <name-capitalize-united>Options } from './<name-hyphen>.options';
import { <name-capitalize-united>Module } from './<name-hyphen>.module';
import { <name-capitalize-united> } from './<name-hyphen>';

function create<name-capitalize-united>Options(): <name-capitalize-united>Options {
  return {
    someNeededOption: 'some-options',
  };
}

function create<name-capitalize-united>Config(
  levels: LumberjackConfigLevels
): <name-capitalize-united>Config {
  return {
    levels,
    someNeededOption: 'some-options',
  };
}

const create<name-capitalize-united> = (
  {
    config,
    isLumberjackModuleImportedFirst = true,
  }: {
    config: <name-capitalize-united>Config;
    isLumberjackModuleImportedFirst?: boolean;
  } = { config: create<name-capitalize-united>Config([LumberjackLevel.Verbose]) }
) => {
  TestBed.configureTestingModule({
    imports: [
      isLumberjackModuleImportedFirst ? LumberjackModule.forRoot() : [],
      <name-capitalize-united>Module.forRoot(config),
      isLumberjackModuleImportedFirst ? [] : LumberjackModule.forRoot(),
    ],
  });

  const [<name-camel>] = (TestBed.inject(lumberjackLogDriverToken) as unknown) as LumberjackLogDriver[];

  return <name-camel>;
};

const create<name-capitalize-united>WithOptions = (
  {
    isLumberjackModuleImportedFirst = true,
    options,
  }: {
    isLumberjackModuleImportedFirst?: boolean;
    options: <name-capitalize-united>Options;
  } = { options: create<name-capitalize-united>Options() }
) => {
  TestBed.configureTestingModule({
    imports: [
      isLumberjackModuleImportedFirst ? LumberjackModule.forRoot() : [],
      <name-capitalize-united>Module.withOptions(options),
      isLumberjackModuleImportedFirst ? [] : LumberjackModule.forRoot(),
    ],
  });

  const [<name-camel>] = (TestBed.inject(lumberjackLogDriverToken) as unknown) as LumberjackLogDriver[];

  return <name-camel>;
};

describe(<name-capitalize-united>Module.name, () => {
  it(`cannot be imported without using the ${<name-capitalize-united>Module.forRoot.name} method`, () => {
    expectNgModuleToBeGuardedAgainstDirectImport(<name-capitalize-united>Module);
  });

  describe(<name-capitalize-united>Module.forRoot.name, () => {
    it('provides the <name-capitalize-united>', () => {
      const <name-camel> = create<name-capitalize-united>();

      expect(<name-camel>).toBeInstanceOf(<name-capitalize-united>);
    });

    it('registers the specified log driver configuration', () => {
      const expectedConfig = create<name-capitalize-united>Config([LumberjackLevel.Error]);

      const <name-camel> = create<name-capitalize-united>({ config: expectedConfig });

      const actualConfig = <name-camel>.config;
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('registers a default level configuration if none is specified', () => {
      const custom<name-capitalize-united>Config = create<name-capitalize-united>Config([LumberjackLevel.Verbose]);

      const <name-camel> = create<name-capitalize-united>({ config: custom<name-capitalize-united>Config });

      const actualConfig = <name-camel>.config;
      const lumberjackConfig = TestBed.inject(lumberjackConfigToken);
      const defaultLogDriverConfig: LumberjackLogDriverConfig = {
        levels: lumberjackConfig.levels,
      };
      const expectedConfig: <name-capitalize-united>Config = { ...defaultLogDriverConfig, ...custom<name-capitalize-united>Config };
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('does register the specified log driver configuration when the lumberjack module is imported after the <name-capitalize-united> module', () => {
      const expectedConfig = create<name-capitalize-united>Config([LumberjackLevel.Debug]);

      const <name-camel> = create<name-capitalize-united>({
        config: expectedConfig,
        isLumberjackModuleImportedFirst: false,
      });

      const actualConfig = <name-camel>.config;
      expect(actualConfig).toEqual(expectedConfig);
    });
  });

  describe(<name-capitalize-united>Module.withOptions.name, () => {
    it('provides the <name-capitalize-united>', () => {
      const <name-camel> = create<name-capitalize-united>WithOptions();

      expect(<name-camel>).toBeInstanceOf(<name-capitalize-united>);
    });

    it('registers the specified options', () => {
      const options = create<name-capitalize-united>Options();

      const <name-camel> = create<name-capitalize-united>WithOptions({ options });

      const actualConfig = <name-camel>.config;
      const expectedConfig: <name-capitalize-united>Config = {
        ...options,
        // tslint:disable-next-line: no-any
        levels: jasmine.any(Array) as any,
      };
      expect(actualConfig).toEqual(expectedConfig);
    });

    it('gets common options from the log driver config', () => {
      const options = create<name-capitalize-united>Options();

      const <name-camel> = create<name-capitalize-united>WithOptions({ options });

      const { levels } = <name-camel>.config;
      expect(levels).toEqual([LumberjackLevel.Verbose]);
    });

    it('does register the specified log driver configuration when the lumberjack module is imported after the <name-capitalize-united> module', () => {
      const options = create<name-capitalize-united>Options();

      const <name-camel> = create<name-capitalize-united>WithOptions({
        options,
        isLumberjackModuleImportedFirst: false,
      });

      const actualConfig = <name-camel>.config;
      const expectedConfig: <name-capitalize-united>Config = {
        ...options,
        // tslint:disable-next-line: no-any
        levels: jasmine.any(Array) as any,
      };
      expect(actualConfig).toEqual(expectedConfig);
    });
  });
});
