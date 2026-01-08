import { useState, useRef, useEffect } from "react";

export default function Kisses({ audioRef }) {
  const [kisses, setKisses] = useState([]);
  const [messageIndex, setMessageIndex] = useState(0);
  const kissSoundRef = useRef(null);

  // Static kitty pictures
  const kittyImages = [
    { src: "/pictures/pic1.png", top: "4%", left: "3%", size: "180px", rotation: -12 },
    { src: "/pictures/pic2.png", top: "6%", left: "38%", size: "180px", rotation: 10 },
    { src: "/pictures/pic3.png", top: "5%", right: "20%", size: "180px", rotation: -8 },

    { src: "/pictures/pic4.png", top: "38%", left: "2%", size: "170px", rotation: -10 },
    { src: "/pictures/pic5.png", top: "30%", right: "2%", size: "175px", rotation: 14 },

    { src: "/pictures/pic6.png", bottom: "5%", left: "5%", size: "180px", rotation: -6 },
    { src: "/pictures/pic7.png", bottom: "4%", left: "40%", size: "180px", rotation: 12 },
    { src: "/pictures/pic8.png", bottom: "6%", right: "5%", size: "170px", rotation: -10 },

    { src: "/pictures/pic9.png", top: "65%", right: "22%", size: "175px", rotation: 8 }
  ];

  // background music LOW
  useEffect(() => {
    if (audioRef?.current) {
      audioRef.current.volume = 0.1;
    }
  }, [audioRef]);

  const messages = [
    "puchi... 😘",
    "aur chahiye baby.. 💋",
    "thikee… one more 😏",
    "I can do this all day 💖",
    "i love you so much baby😚💘",
    "mwahhh 🫦👅"
  ];

  const addKiss = () => {
    // kiss sound
    if (kissSoundRef.current) {
      kissSoundRef.current.pause();
      kissSoundRef.current.currentTime = 0;
      kissSoundRef.current.volume = 0.4;
      kissSoundRef.current.play();
    }

    const newKiss = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 80),
      y: Math.random() * (window.innerHeight - 80),
      size: Math.random() * 18 + 32,
      emoji: ["💋", "😽", "😙", "😚", "😘", "🫦", "👅"][
        Math.floor(Math.random() * 7)
      ]
    };

    setKisses(prev => [...prev, newKiss]);

    // 🔒 MESSAGE sirf aage badhega
    setMessageIndex(prev =>
      prev < messages.length - 1 ? prev + 1 : prev
    );

    setTimeout(() => {
      setKisses(prev => prev.slice(1));
    }, 1400);
  };

  return (
    <div style={styles.container}>
      
      {/* Kitty stickers */}
      {kittyImages.map((kitty, index) => (
        <img
          key={index}
          src={kitty.src}
          alt="cute kitty"
          style={{
            position: "absolute",
            top: kitty.top,
            left: kitty.left,
            right: kitty.right,
            bottom: kitty.bottom,
            width: kitty.size,
            height: kitty.size,
            objectFit: "cover",
            borderRadius: "50%",
            transform: `rotate(${kitty.rotation}deg)`,
            opacity: 0.6,
            pointerEvents: "none",
            border: "3px solid rgba(255,182,193,0.4)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
          }}
        />
      ))}

      <audio ref={kissSoundRef} src="/kiss.mp3" />

      {/* MESSAGE */}
      <h2 style={styles.text}>
        {messages[messageIndex]}
      </h2>

      <button onClick={addKiss} style={styles.button}>
        Kiss me 💋
      </button>

      {/* KISS POPS */}
      {kisses.map(kiss => (
        <span
          key={kiss.id}
          style={{
            position: "absolute",
            left: kiss.x,
            top: kiss.y,
            fontSize: kiss.size,
            animation: "kissPop 1.4s ease-out forwards",
            pointerEvents: "none",
            zIndex: 10
          }}
        >
          {kiss.emoji}
        </span>
      ))}

      <style>{`
        @keyframes kissPop {
          0% { transform: scale(0.5); opacity: 0; }
          40% { transform: scale(1.25); opacity: 1; }
          100% { transform: scale(1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg,#FFE6EB,#FFD1DC)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Quicksand', sans-serif"
  },
  text: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "2.2rem",
    color: "#C41E3A",
    marginBottom: "30px",
    textAlign: "center",
    zIndex: 5
  },
  button: {
    padding: "16px 42px",
    borderRadius: "40px",
    border: "none",
    background: "linear-gradient(135deg,#FF6B9D,#C41E3A)",
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: "700",
    cursor: "pointer",
    boxShadow: "0 8px 25px rgba(196,30,58,.35)",
    zIndex: 5
  }
};
