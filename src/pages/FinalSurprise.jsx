import { useState, useEffect, useRef } from "react";

export default function FinalSurprise() {
  const [step, setStep] = useState(0);
  const [kisses, setKisses] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    // ⛔ STOP ALL OTHER AUDIOS (EXCEPT FINAL ONE)
    const audios = document.querySelectorAll("audio");
    audios.forEach(a => {
      if (a !== audioRef.current) {
        a.pause();
        a.currentTime = 0;
      }
    });

    // ▶️ PLAY FINAL SONG (SAFE WAY)
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.6;
      audio.play().catch(() => {
        // browser interaction required – ignore error
      });
    }
  }, []);

  const lines = [
    "Hi baby 🤍(just click to move forward)",
    "Before you read this, pause for a moment.",
    "This is not a very huge surprise, kyuki aapne mana kar diya tha kuch bhi dene se.",
    "So I thought a lot, bhottttt zydaa socha, and then I thought of giving you this.",
    "I know this is not much, but still, maine apni poori koshish ki 🫶",
    "see this is the song that you told me this reminds me of you😽",
    "I actually made this five months ago hehe, because I was so excited to make this for you.",
    "Now I just want to tell you that I love you bhot saara ❤️💋",
    "These two years with you have been the happiest and sabse ache years of my life.",
    "With you, mujhe lagta hai main complete hoon, loved hoon, and safe hoon.",
    "I know long distance bhot zyada hard hota hai.",
    "I don't know yet how your hug feels, how your skin feels, or how you smell.",
    "But main rona nahi chahti.",
    "I just want to say ki yeh long distance bhi jaldi khatam ho jaaye.",
    "I hope aapka future bhot acha ho and aapko sab kuch mile jo aap chahte ho ✨",
    "Main aapko kabhi nahi chhodungi, no matter what happens.",
    "Especially difficult situations mein, mujhe pata hai main hamesha aapke saath rahungi.",
    "I know main har choti baat par gussa kar leti hoon and poochti hoon aapne yeh kyun kiya.",
    "But it's only because main nahi chahti ki aap kisi aur ko dekho ya kisi aur ke liye feel karo.",
    "I just want you and me, bas hum dono 🤍",
    "No matter what happens, chahe kuch bhi ho jaaye, I am always there for you.",
    "It's a truth.",
    "You don't always see yourself the way I see you.",
    "But I do.",
    "I chose you.",
    "On ordinary days.",
    "On difficult ones.",
    "And I still do.",
    "Happy Birthday 🎂❤️",
    "If life ever feels heavy, remember this page.",
    "You are loved.",
    "Always.",
    "Loveeeee youuu sooo muchhhhh shonaaa babyyyy💕"
  ];

  const createKiss = (e) => {
    if (step === lines.length - 1) {
      const newKiss = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY
      };
      setKisses(prev => [...prev, newKiss]);
      setTimeout(() => {
        setKisses(prev => prev.filter(k => k.id !== newKiss.id));
      }, 2000);
    }
  };

  return (
    <div 
      style={styles.container} 
      onClick={(e) => {
        if (step < lines.length - 1) {
          setStep(step + 1);
        } else {
          createKiss(e);
        }
      }}
    >
      
      {/* 🎵 FINAL PAGE SONG ONLY */}
      <audio ref={audioRef} loop>
        <source src="/final-music.mp3" type="audio/mpeg" />
      </audio>

      <p key={step} style={styles.text} className="fade">
        {lines[step]}
      </p>

      {/* 💋 KISS SHOWER */}
      {kisses.map(kiss => (
        <div
          key={kiss.id}
          className="kiss"
          style={{
            position: 'fixed',
            left: kiss.x,
            top: kiss.y,
            fontSize: '3rem',
            pointerEvents: 'none',
            zIndex: 1000
          }}
        >
          💋
        </div>
      ))}

      <style>{`
        .fade {
          animation: fadeIn 1.8s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .kiss {
          animation: kissFloat 2s ease-out forwards;
        }
        @keyframes kissFloat {
          0% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -100px) scale(1.5) rotate(180deg);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -200px) scale(0.5) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "radial-gradient(circle at top, #0f0f1a, #000)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#eee",
    fontFamily: "'Playfair Display', serif",
    textAlign: "center",
    cursor: "pointer",
    padding: "40px"
  },
  text: {
    maxWidth: "800px",
    fontSize: "2.2rem",
    lineHeight: "1.7"
  }
};