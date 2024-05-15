import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Duration } from '../models/timer.model';
import { inject } from '@angular/core';
import { TimerStore } from './timer.store';

export type SettingsState = {
  focusDuration: Duration;
  shortBreakDuration: Duration;
  longBreakDuration: Duration;
  longBreakInterval: number;
  isSettingsDialogOpen: boolean;
};

export const SettingsInitialState: SettingsState = {
  focusDuration: new Duration(25, 0),
  longBreakDuration: new Duration(15, 0),
  shortBreakDuration: new Duration(5, 0),
  longBreakInterval: 4,
  isSettingsDialogOpen: false,
};

export const SettingsStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(SettingsInitialState),
  withMethods((store) => {
    return {
      changeSettingsDialog: (visible: boolean) => {
        patchState(store, { isSettingsDialogOpen: visible });
      },
      saveSettings: (settings: SettingsState) => {
        patchState(store, settings);
      },
    };
  })
);
