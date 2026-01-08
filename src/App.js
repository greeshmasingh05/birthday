import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRef, useEffect } from "react";


import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import Kisses from "./pages/Kisses";
import Reasons from "./pages/Reasons";
import Letters from "./pages/Letters";
import FinalSurprise from "./pages/FinalSurprise";

export default function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const shouldPlay = localStorage.getItem("musicPlaying");

    if (shouldPlay === "true" && audioRef.current) {
      audioRef.current.volume = 0.1;
      audioRef.current.play().catch(() => {});
    }
  }, []);
  return (
    <BrowserRouter>

      {/* 🌸 GLOBAL MUSIC (PURE WEBSITE ME SAME RAHEGA) */}
      <audio ref={audioRef} src="/music.mp3" loop />

      <Routes>
        <Route path="/" element={<Landing audioRef={audioRef} />} />
        <Route path="/menu" element={<Menu audioRef={audioRef} />} />
        <Route path="/kisses" element={<Kisses audioRef={audioRef} />} />
        <Route path="/reasons" element={<Reasons audioRef={audioRef} />} />
        <Route path="/letters" element={<Letters audioRef={audioRef} />} />
        <Route path="/final" element={<FinalSurprise audioRef={audioRef} />} />
      </Routes>

    </BrowserRouter>
  );
}

