import { Subscription, min } from 'rxjs';

export type PomodoroState = 'focus' | 'break';

export type PomodoroData = {
  state: PomodoroState;
  pomodoroCount: number;
};

export class Duration {
  constructor(public minutes: number, public seconds: number) {}

  toSeconds() {
    return this.minutes * 60 + this.seconds;
  }

  substractSeconds(amount: number) {
    if (this.seconds - amount < 0) {
      this.minutes = this.minutes - 1;
      const rest = Math.abs(this.seconds - amount);
      this.seconds = 60 - rest;
    } else {
      this.seconds = this.seconds - amount;
    }

    return this;
  }

  static fromDuration(duration: Duration) {
    return new Duration(duration.minutes, duration.seconds);
  }
  static fromSeconds(seconds: number) {
    const min = Number.parseInt((seconds / 60).toString());
    const sec = seconds % 60;
    return new Duration(min, sec);
  }
}
