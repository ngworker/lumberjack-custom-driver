import { Inject, Injectable } from '@angular/core';
import { LumberjackLogDriver } from '@ngworker/lumberjack';

import { <name-capitalize-united>Config, <name-camel>ConfigToken } from './<name-hyphen>.config';

@Injectable()
export class <name-capitalize-united> implements LumberjackLogDriver {
  constructor(@Inject(<name-camel>ConfigToken) public config: <name-capitalize-united>Config) {}

  logCritical(formattedLog: string): void {}

  logDebug(formattedLog: string): void {}

  logError(formattedLog: string): void {}

  logInfo(formattedLog: string): void {}

  logTrace(formattedLog: string): void {}

  logWarning(formattedLog: string): void {}
}
