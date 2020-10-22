import { Inject, Injectable } from '@angular/core';

import { LogDriver } from '@ngworker/lumberjack';

import { LumberjackCustomDriverConfig, LumberjackCustomDriverConfigToken } from './lumberjack-custom-driver.config';

@Injectable()
export class LumberjackCustomDriver implements LogDriver {
  constructor(@Inject(LumberjackCustomDriverConfigToken) public config: LumberjackCustomDriverConfig) {}

  logInfo(logEntry: string): void {}

  logDebug(logEntry: string): void {}

  logError(logEntry: string): void {}

  logWarning(logEntry: string): void {}
}
