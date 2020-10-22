import { LumberjackCustomDriverRootModule } from './lumberjack-custom-driver-root.module';

describe(LumberjackCustomDriverRootModule.name, () => {
  it('guards against being registered in multiple injectors', () => {
    const rootInjectorInstance = new LumberjackCustomDriverRootModule();

    expect(() => new LumberjackCustomDriverRootModule(rootInjectorInstance)).toThrowError(/multiple injectors/);
  });

  it('does not guard the first injector that registers it', () => {
    // tslint:disable-next-line: no-null-keyword
    const optionalAngularDependency = null;

    // tslint:disable-next-line: no-any
    expect(() => new LumberjackCustomDriverRootModule(optionalAngularDependency as any)).not.toThrow();
  });
});
