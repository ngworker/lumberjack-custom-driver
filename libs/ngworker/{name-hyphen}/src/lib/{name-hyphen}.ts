import { Inject, Injectable } from '@angular/core';

import { LogDriver } from '@ngworker/lumberjack';

import { <name-capitalize-united>Config, <name-capitalize-united>ConfigToken } from './<name-hyphen>.config';

@Injectable()
export class <name-capitalize-united> implements LogDriver {
  constructor(@Inject(<name-capitalize-united>ConfigToken) public config: <name-capitalize-united>Config) {}

  logInfo(logEntry: string): void {}

  logDebug(logEntry: string): void {}

  logError(logEntry: string): void {}

  logWarning(logEntry: string): void {}
}
