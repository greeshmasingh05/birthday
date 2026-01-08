import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Menu({ audioRef }) {
  const navigate = useNavigate();

  // Static kitty pictures in random positions
  const kittyImages = [
  { src: "/pictures/pic1.png", top: "5%", left: "8%", size: "190px", rotation: -15 },
  { src: "/pictures/pic2.png", top: "15%", right: "10%", size: "190px", rotation: 12 },
  { src: "/pictures/pic3.png", top: "45%", left: "5%", size: "185px", rotation: 8 },
  { src: "/pictures/pic4.png", bottom: "10%", right: "8%", size: "170px", rotation: -10 },
  { src: "/pictures/pic5.png", top: "40%", right: "13%", size: "175px", rotation: 20 },
  { src: "/pictures/pic6.png", top: "75%", left: "12%", size: "185px", rotation: -8 }
];


  return (
    <div style={styles.container}>
      
      {/* Static kitty pictures */}
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

      {/* Main Content */}
      <div style={styles.content}>

        {/* Title with love quote */}
        <div style={styles.header}>
          <div style={styles.loveQuote}>
            <span style={styles.quoteText}>My kuchipuchi</span>
          </div>
          <h1 style={styles.title}>Aapke liye 💌</h1>
          <div style={styles.subQuote}>
            <span style={styles.subText}>— with all my heart</span>
          </div>
        </div>

        <p style={styles.subtitle}>
          Some soft moments, waiting for you 🌸 💗
        </p>

        {/* Menu Cards - 2x2 Grid */}
        <div style={styles.grid}>
          <MenuCard 
            emoji="💋" 
            title="Soft Kisses" 
            quote="saved just for you"
            onClick={() => navigate("/kisses")} 
          />
          <MenuCard 
            emoji="💌" 
            title="Every Little Reasons I Love You" 
            quote="I love you my laduu."
            onClick={() => navigate("/reasons")} 
          />
          <MenuCard 
            emoji="📩" 
            title="Pyar bhari chitti🥰" 
            quote="written with all my heart"
            onClick={() => navigate("/letters")} 
          />
          <MenuCard 
            emoji="🎁" 
            title="One Last Thing" 
            quote="open last plwease🥺"
            onClick={() => navigate("/final")} 
          />
        </div>

        {/* Bottom decoration */}
        <div style={styles.bottomDecor}>
          <span style={styles.kissEmoji}>💋</span>
          <span style={styles.heartEmoji}>💗</span>
          <span style={styles.kissEmoji}>💋</span>
        </div>

      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&display=swap');
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}

function MenuCard({ emoji, title, quote, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(10px)",
        borderRadius: "25px",
        padding: "30px 20px",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,.1)",
        transition: "all 0.3s",
        textAlign: "center",
        border: "2px solid rgba(255,182,193,0.3)",
        position: "relative",
        overflow: "hidden",
        aspectRatio: "1/1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 15px 40px rgba(196,30,58,0.2)";
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";
      }}
    >
      {/* Cute corner decoration */}
      <div style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        fontSize: "1.2rem",
        opacity: 0.6
      }}>✨</div>

      <div style={{ fontSize: "3rem", marginBottom: "15px" }}>{emoji}</div>
      
      <h3 style={{
        margin: "10px 0",
        fontFamily: "'Pacifico', cursive",
        color: "#C41E3A",
        fontSize: "1.5rem"
      }}>
        {title}
      </h3>
      
      {/* Quote under each card */}
      <div style={{
        marginTop: "12px",
        padding: "8px 15px",
        background: "rgba(255,182,193,0.2)",
        borderRadius: "15px",
        fontSize: "0.9rem",
        color: "#8B4D71",
        fontStyle: "italic",
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: "600"
      }}>
        "{quote}"
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFF5F7 0%, #FFE8EC 50%, #FFD6DD 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 20px",
    fontFamily: "'Quicksand', sans-serif",
    position: "relative",
    overflow: "hidden"
  },
  content: {
    textAlign: "center",
    maxWidth: "900px",
    width: "100%",
    position: "relative",
    zIndex: 2
  },
  header: {
    marginBottom: "30px"
  },
  loveQuote: {
    display: "inline-block",
    background: "rgba(255,255,255,0.7)",
    padding: "8px 20px",
    borderRadius: "20px",
    marginBottom: "15px",
    border: "2px solid rgba(255,107,157,0.3)"
  },
  quoteText: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "1.3rem",
    color: "#FF6B9D",
    fontStyle: "italic"
  },
  title: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "3.5rem",
    color: "#C41E3A",
    margin: "15px 0",
    textShadow: "2px 2px 8px rgba(196,30,58,0.2)"
  },
  subQuote: {
    fontSize: "1.1rem",
    color: "#8B4D71",
    fontStyle: "italic",
    marginTop: "10px"
  },
  subText: {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "600"
  },
  subtitle: {
    fontSize: "1.3rem",
    color: "#8B4D71",
    marginBottom: "50px",
    fontWeight: "500"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "30px",
    maxWidth: "650px",
    margin: "0 auto"
  },
  bottomDecor: {
    marginTop: "50px",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    opacity: 0.7
  },
  kissEmoji: {
    display: "inline-block",
    animation: "bounce 2s infinite"
  },
  heartEmoji: {
    display: "inline-block",
    animation: "bounce 2s infinite 0.3s"
  }
};