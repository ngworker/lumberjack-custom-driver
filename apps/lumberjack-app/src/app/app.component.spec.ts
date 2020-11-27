import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { LumberjackLogLevel, LumberjackModule } from '@<organization-hyphen>/lumberjack';
import { <name-capitalize-united>Module } from '@<organization-hyphen>/<name-hyphen>';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory({
    component: AppComponent,
    imports: [LumberjackModule.forRoot(), <name-capitalize-united>Module.forRoot({ levels: [LumberjackLogLevel.Verbose], someNeededOption: 'option-value' })],
  });

  beforeEach(() => {
    spectator = createComponent();
  });

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'lumberjack'`, () => {
    expect(spectator.component.title).toEqual('lumberjack');
  });

  it('should render title', () => {
    const query = spectator.query('.content span');
    expect(query && query.textContent).toContain('lumberjack app is running!');
  });
});
