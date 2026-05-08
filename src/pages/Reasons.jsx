import { useState, useRef } from "react";

export default function Reasons() {
  const reasons = [
    "You make me feel safe 🤍",
    "You understand me without words 🫶",
    "You make my bad days softer 🌸",
    "You believe in me when I doubt myself 💖",
    "You feel like home 🏡",
    "You are my peace 💗",
    "You choose me every day 💞",
    "You are my favorite person 🥹",
    "You love me like nobody else😽",
    "You listen to me even when I yap 🧸",
  "You accept me exactly as I am 🤍",
  "You make ordinary moments special ✨",
  "You calm my overthinking mind 🌙",
  "You hold my heart so gently 💝",
  "You make me laugh on my worst days 😭💗",
  "You never make me feel like too much 🌷",
  "You support my dreams like they’re your own 🌈",
  "You make love feel easy 💕",
  "You are my comfort person 🫂",
  "You make me feel chosen, always 💓",
  "You turn chaos into calm 🕊️",
  "You make life feel lighter ✨",
  "You feel like my forever 💍"
  ];

  const indexRef = useRef(0);
  const [activeReason, setActiveReason] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

 const kittyImages = [
    { src: "/pictures/p1.png", top: "13%", left: "5%", rotate: -10 },
    { src: "/pictures/p2.png", top: "18%", right: "6%", rotate: 12 },
    { src: "/pictures/p3.png", top: "45%", left: "3%", rotate: 8 },
    { src: "/pictures/p4.png", bottom: "18%", right: "5%", rotate: -12 },
    { src: "/pictures/p5.png", bottom: "8%", left: "12%", rotate: 15 },
    { src: "/pictures/pic8.png", top: "75%", right: "40%", rotate: -6 }
  ];

  const handleClick = (e) => {
    const reason = reasons[indexRef.current];
    indexRef.current = (indexRef.current + 1) % reasons.length;

    setPos({ x: e.clientX, y: e.clientY });
    setActiveReason(reason);
    setShow(true);

    setTimeout(() => setShow(false), 4500);
  };

  return (
    <div style={styles.container} onClick={handleClick}>

      {/* KITTY IMAGES */}
      {kittyImages.map((k, i) => (
        <img
          key={i}
          src={k.src}
          alt="kitty"
          style={{
            position: "absolute",
            top: k.top,
            left: k.left,
            right: k.right,
            bottom: k.bottom,
            width: "170px",
            height: "170px",
            objectFit: "cover",
            borderRadius: "50%",
            transform: `rotate(${k.rotate}deg)`,
            opacity: 0.6,
            pointerEvents: "none",
            border: "3px solid rgba(255,182,193,0.4)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
          }}
        />
      ))}

      {/* TITLE - Center Bottom */}
      <h1 style={styles.title}>Reasons I Love You 💗</h1>

      {/* CLICK REASON - appears where you click */}
      {activeReason && (
        <div
          style={{
            ...styles.reason,
            left: pos.x,
            top: pos.y,
            opacity: show ? 1 : 0,
            transform: show
              ? "translate(-50%, -50%) scale(1)"
              : "translate(-50%, -50%) scale(0.8)"
          }}
        >
          {activeReason}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#FFF0F5,#FFE4EC)",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    fontFamily: "'Quicksand', sans-serif"
  },

  title: {
    position: "fixed",
    bottom: "300px",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "'Pacifico', cursive",
    fontSize: "3rem",
    color: "#C41E3A",
    zIndex: 3,
    pointerEvents: "none",
    textAlign: "center"
  },

 reason: {
    position: "fixed",
    fontSize: "2rem",
    color: "#8B2C5D",
    fontFamily: "'Pacifico', cursive",
    textAlign: "center",
    transition: "all 0.6s ease",
    pointerEvents: "none",
    zIndex: 5,
    textShadow: "2px 2px 8px rgba(255,255,255,0.8)",
    maxWidth: "80%"
  }
};