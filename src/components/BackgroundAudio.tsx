import { useEffect } from "react";
import bgAudio from "@/assets/bg-audio.mp3";
import { audioBus } from "@/lib/audioBus";

let audioStarted = false;

const BackgroundAudio = () => {
  useEffect(() => {
    let audio = audioBus.audio;
    if (!audio) {
      audio = new Audio(bgAudio);
      audio.loop = true;
      audio.volume = 0.5;
      audio.preload = "auto";
      audioBus.audio = audio;
    }
    audio.muted = false;

    const events: Array<keyof WindowEventMap> = [
      "scroll",
      "wheel",
      "touchstart",
      "touchmove",
      "mousemove",
      "pointerdown",
      "click",
      "keydown",
    ];

    const removeInteractionListeners = () => {
      events.forEach((e) => window.removeEventListener(e, onInteraction));
    };

    const tryPlay = async () => {
      if (!audioBus.audio || audioStarted) return audioStarted;
      try {
        audioBus.audio.muted = false;
        audioBus.audio.volume = 0.5;
        await audioBus.audio.play();
        audioStarted = true;
        audioBus.setMuted(false);
        removeInteractionListeners();
        // eslint-disable-next-line no-console
        console.log("Audio started");
        return true;
      } catch {
        return false;
      }
    };

    const onInteraction = () => {
      if (!audioStarted) tryPlay();
    };

    const addInteractionListeners = () => {
      events.forEach((e) =>
        window.addEventListener(e, onInteraction, {
          passive: true,
        } as AddEventListenerOptions)
      );
    };

    // Try immediate unmuted autoplay
    (async () => {
      const ok = await tryPlay();
      if (!ok) {
        audioBus.setMuted(true);
        addInteractionListeners();
      }
    })();

    // Sync UI state with actual playback
    const handlePlay = () => {
      if (audioBus.audio)
        audioBus.setMuted(audioBus.audio.muted || audioBus.audio.paused);
    };
    const handlePause = () => audioBus.setMuted(true);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("volumechange", handlePlay);

    return () => {
      audio?.removeEventListener("play", handlePlay);
      audio?.removeEventListener("pause", handlePause);
      audio?.removeEventListener("volumechange", handlePlay);
    };
  }, []);

  return null;
};

export default BackgroundAudio;
