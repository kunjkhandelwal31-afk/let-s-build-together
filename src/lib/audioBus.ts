// Singleton background audio bus shared between BackgroundAudio (player)
// and the header mute/unmute button.

type Listener = (muted: boolean) => void;

class AudioBus {
  audio: HTMLAudioElement | null = null;
  private listeners = new Set<Listener>();
  private _muted = true;

  get muted() {
    return this._muted;
  }

  setMuted(value: boolean) {
    this._muted = value;
    this.listeners.forEach((l) => l(value));
  }

  subscribe(l: Listener) {
    this.listeners.add(l);
    return () => this.listeners.delete(l);
  }

  toggle() {
    if (!this.audio) return;
    const shouldPlay = this.audio.paused || this.audio.muted;
    if (shouldPlay) {
      this.audio.muted = false;
      this.audio.play().then(() => this.setMuted(false)).catch(() => {});
    } else {
      this.audio.pause();
      this.setMuted(true);
    }
  }
}

export const audioBus = new AudioBus();
