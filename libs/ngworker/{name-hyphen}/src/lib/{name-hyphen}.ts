import { Inject, Injectable } from '@angular/core';

import { LogDriver } from '@ngworker/lumberjack';

import { <name-capitalize-united>Config, <name-cammel>ConfigToken } from './<name-hyphen>.config';

@Injectable()
export class <name-capitalize-united> implements LogDriver {
  constructor(@Inject(<name-cammel>ConfigToken) public config: <name-capitalize-united>Config) {}

  logCritical(logEntry: string): void {}

  logDebug(logEntry: string): void {}

  logError(logEntry: string): void {}

  logInfo(logEntry: string): void {}

  logTrace(logEntry: string): void {}

  logWarning(logEntry: string): void {}
}
