import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Landing({ audioRef }) {
  const navigate = useNavigate();
  const [kisses, setKisses] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  // floating kisses
  useEffect(() => {
    const interval = setInterval(() => {
      setKisses(prev => [
        ...prev.slice(-20),
        {
          id: Math.random(),
          left: Math.random() * 100,
          emoji: ["💋", "💗", "✨", "🌸"][Math.floor(Math.random() * 4)],
          duration: 4 + Math.random() * 3
        }
      ]);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  // play music
  const playMusic = () => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // go to menu
  const openSurprise = () => {
    if (!isPlaying) playMusic();
    navigate("/menu");
  };

  return (
    <div style={styles.container}>
      
      {/* FLOATING KISSES */}
      {kisses.map(k => (
        <div
          key={k.id}
          style={{
            position: "absolute",
            left: `${k.left}%`,
            bottom: "-40px",
            fontSize: "2rem",
            animation: `floatUp ${k.duration}s linear`,
            pointerEvents: "none"
          }}
        >
          {k.emoji}
        </div>
      ))}

      {/* MUSIC BUTTON - TEXT VERSION */}
      {!isPlaying && (
        <button 
          onClick={playMusic} 
          style={styles.musicBtn}
          onMouseOver={e => e.target.style.transform = "scale(1.05)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >
          🎵 Click me to play music
        </button>
      )}

      {/* CONTENT */}
      <div style={styles.card}>
        <h1 style={styles.title}>Happiee Buddayyy</h1>
        <h2 style={styles.subtitle}>Mera pyara babie 😚 😋 💗</h2>
        <p style={styles.text}>
          yeh maine bnaya 😈🔥kyuki aapko gift nhi chahiye tha koi 💋<br/>
          i love youu so muchh 💕 ✨
        </p>
        <button 
          style={styles.btn} 
          onClick={openSurprise}
          onMouseOver={e => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 12px 30px rgba(196,30,58,0.5)";
          }}
          onMouseOut={e => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 8px 25px rgba(196,30,58,0.4)";
          }}
        >
          Open Your Surprise 💝
        </button>
      </div>

      {/* CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&display=swap');
        @keyframes floatUp {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-110vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFE6EB, #FFD1DC)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
    fontFamily: "'Quicksand', sans-serif",
    padding: "20px"
  },
  musicBtn: {
    position: "absolute",
    top: "20px",
    right: "20px",
    padding: "12px 25px",
    borderRadius: "30px",
    border: "none",
    background: "#FF6B9D",
    color: "#fff",
    fontSize: "1rem",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 6px 20px rgba(255,107,157,.4)",
    transition: "all 0.3s",
    fontFamily: "'Quicksand', sans-serif"
  },
  card: {
    background: "rgba(255,255,255,0.85)",
    padding: "50px",
    borderRadius: "30px",
    textAlign: "center",
    boxShadow: "0 10px 40px rgba(0,0,0,.1)",
    maxWidth: "600px",
    backdropFilter: "blur(10px)"
  },
  title: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "3.5rem",
    color: "#C41E3A",
    margin: "0 0 10px 0",
    textShadow: "2px 2px 8px rgba(196,30,58,0.2)"
  },
  subtitle: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "2.5rem",
    color: "#FF6B9D",
    margin: "0 0 20px 0",
    textShadow: "2px 2px 6px rgba(255,107,157,0.2)"
  },
  text: {
    fontSize: "1.2rem",
    color: "#8B4D71",
    marginBottom: "35px",
    lineHeight: "1.8",
    fontWeight: "500"
  },
  btn: {
    padding: "18px 45px",
    borderRadius: "40px",
    border: "none",
    background: "linear-gradient(135deg, #FF6B9D, #C41E3A)",
    color: "#fff",
    fontSize: "1.3rem",
    cursor: "pointer",
    fontWeight: "700",
    boxShadow: "0 8px 25px rgba(196,30,58,0.4)",
    transition: "all 0.3s",
    fontFamily: "'Quicksand', sans-serif"
  }
};