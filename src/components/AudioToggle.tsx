import { useEffect, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { audioBus } from "@/lib/audioBus";

const AudioToggle = () => {
  const [muted, setMuted] = useState(audioBus.muted);

  useEffect(() => {
    const unsub = audioBus.subscribe(setMuted);
    return () => { unsub(); };
  }, []);

  return (
    <button
      type="button"
      onClick={() => audioBus.toggle()}
      aria-label={muted ? "Unmute background audio" : "Mute background audio"}
      className="p-2 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center"
      style={{ color: '#FFD700' }}
    >
      {muted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
    </button>
  );
};

export default AudioToggle;
