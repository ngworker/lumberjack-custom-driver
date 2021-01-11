import { Inject, Injectable } from '@angular/core';
import { LumberjackLog, LumberjackLogDriver, LumberjackLogDriverLog, LumberjackLogPayload } from '@ngworker/lumberjack';

import { <name-camel>ConfigToken } from './configuration/<name-hyphen>.config.token';
import { <name-capitalize-united>Config } from './configuration/<name-hyphen>.config';

@Injectable()
export class <name-capitalize-united><TPayload extends LumberjackLogPayload | void = void> implements LumberjackLogDriver<TPayload> {
  constructor(@Inject(<name-camel>ConfigToken) public config: <name-capitalize-united>Config) {}

  logCritical({ formattedLog, log }: LumberjackLogDriverLog<TPayload>): void {}

  logDebug({ formattedLog, log }: LumberjackLogDriverLog<TPayload>): void {}

  logError({ formattedLog, log }: LumberjackLogDriverLog<TPayload>): void {}

  logInfo({ formattedLog, log }: LumberjackLogDriverLog<TPayload>): void {}

  logTrace({ formattedLog, log }: LumberjackLogDriverLog<TPayload>): void {}

  logWarning({ formattedLog, log }: LumberjackLogDriverLog<TPayload>): void {}
}
