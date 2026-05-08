import { useState } from "react";

export default function Letters() {
  const [openLetter, setOpenLetter] = useState(null);

  // Static kitty images
  const kittyImages = [
    { src: "/pictures/pic1.png", top: "3%", left: "2%", size: "100px", rotate: -12 },
    { src: "/pictures/pic2.png", top: "18%", right: "0.1%", size: "100px", rotate: 15 },
    { src: "/pictures/pic3.png", top: "45%", left: "1%", size: "100px", rotate: 10 },
    { src: "/pictures/pic4.png", bottom: "10%", right: "6%", size: "100px", rotate: -8 },
    { src: "/pictures/pic5.png", top: "37%", right: "1%", size: "100px", rotate: 20 },
    { src: "/pictures/pic6.png", top: "73%", left: "1%", size: "100px", rotate: -15 },
    { src: "/pictures/pic7.png", top: "20%", left: "4%", size: "100px", rotate: 17 },
    { src: "/pictures/pic8.png", bottom: "18%", left: "70%", size: "100px", rotate: -10 },
    { src: "/pictures/pic9.png", top: "52%", right: "67%", size: "100px", rotate: 8 },
    { src: "/pictures/e1.png", top: "1%", left: "76%", size: "100px", rotate: -6 },
  { src: "/pictures/e2.png", top: "11%", right: "2%", size: "100px", rotate: 14 },
  { src: "/pictures/e3.png", top: "36%", left: "2%", size: "100px", rotate: -18 },
  { src: "/pictures/e4.png", bottom: "1%", left: "3%", size: "100px", rotate: 9 },
  { src: "/pictures/e5.png", top: "55%", right: "2%", size: "100px", rotate: -12 },
  { src: "/pictures/e6.png", top: "0%", right: "45%", size: "100px", rotate: 16 },
  { src: "/pictures/e7.png", top: "29%", left: "2%", size: "100px", rotate: -9 },
  { src: "/pictures/e8.png", bottom: "30%", right: "3%", size: "100px", rotate: 11 },
  { src: "/pictures/e9.png", top: "13%", left: "1%", size: "100px", rotate: -14 },
  { src: "/pictures/p1.png", top: "48%", right: "1%", size: "100px", rotate: 7 },
  { src: "/pictures/p2.png", bottom: "12%", left: "3%", size: "100px", rotate: -5 },
  { src: "/pictures/p3.png", top: "62%", left: "6%", size: "100px", rotate: 13 },
  { src: "/pictures/p4.png", top: "28%", right: "2%", size: "100px", rotate: -16 },
  { src: "/pictures/p5.png", bottom: "3%", right: "4%", size: "100px", rotate: 10 }
  ];

  const letters = [
    {
      title: "To My Favorite Person",
      emoji: "💌",
      content: `Whenever I see something cute or beautiful,
      the first thought in my mind is you..
bas yeh soch ke ki kaash aap mere saath hote,
taaki hum dono milke woh moment dekh paate.

And when I feel sad or broken,
you’re the very first person I want to run to without thinking twice.

Being with you feels like home(safe, warm, and comforting).

No matter how loud life gets,
you are my quiet place. ❤️`
    },

    {
      title: "Things I Never Say Out Loud",
      emoji: "💭",
      content: `I don't always say it,
but I notice everything.

The way you try.
The way you care.
The way you stay.

You make loving feel easy,
and that means more than you know.`
    },
    {
      title: "You Feel Like Home",
      emoji: "🏡",
      content: `Home isn’t a place.
It’s a feeling.

And somehow,
you became that feeling for me.

You’re the person I share everything with 
every thought, every little detail,
even something as small as a ek baal tutne ka, mere ganje hone ka,mere lips pr machar katne ka,
because with you, I feel safe enough to be completely me.

Wherever life takes us,
I hope I always get to come back to you. 🤍`
    },
    {
      title: "For Your Worst Days",
      emoji: "🤍",
      content: `On days when you feel tired,
or not enough,
or unsure…

When it feels like you want to give up —
on things, on dreams,
or even on us.

I hope you remember this:
you never have to face anything alone.

No matter what happens,
I’m right here.
Always. 🤍`
    },
    {
      title: "On Your Birthday ❤️",
      emoji: "🎂",
      content: `Another year of you.
Another year I'm grateful for.

Thank you for existing.
Thank you for choosing me.
Thank you for being you.

Happy Birthday, my love. 🎂💗`
    },
    {
      title: "Why I Love You",
      emoji: "💝",
      content: `I love the way you laugh —
your sweet, comforting smile.

The way you care about the little things,
the way you never let me feel alone,
even in the quiet middle of the night.

The way you make everything feel lighter.

You don’t have to be perfect.
You just have to be you.

And that has always been
more than enough for me. 💕`
    },
    {
      title: "My Promise to You",
      emoji: "🤝",
      content: `I promise to choose you,
even on the hardest days.

To listen when you speak.
To hold you when words aren't enough.

I promise to love you
not just when it's easy,
but especially when it's not. ❤️`
    },
    {
      title: "You Make Me Better",
      emoji: "✨",
      content: `Before you, I didn't know I could feel this safe.
This understood.
This loved.

You make me want to be better
not because I'm not enough,
but because you make me believe I can be. 🌟`
    },
    {
      title: "Late Night Thoughts",
      emoji: "🌙",
      content: `Sometimes late at night,
I think about how lucky I am(lucky than her).

Out of everyone in the world,
I get to love you.
And you choose to love me back.

That's magic. ✨💫`
    },
    {
      title: "Just Because",
      emoji: "🌸",
      content: `No special reason.
No special day.

I just wanted you to know:
You are loved.
You are appreciated.
You are thought of.
I love you always no matter what.

Always. 💗`
    }
  ];

  return (
    <div style={styles.container}>

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
            width: k.size,
            height: k.size,
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

      {/* TITLE */}
      <h1 style={styles.pageTitle}>Love Letters 💌</h1>

      {/* ENVELOPE STACK - Vertical Straight Line */}
      <div style={styles.envelopeStack}>
        {letters.map((letter, index) => {
          return (
            <div
              key={index}
              onClick={() => setOpenLetter(letter)}
              style={{
                position: "relative",
                width: "320px",
                height: "200px",
                background: "linear-gradient(135deg, #FFF9FC 0%, #FFE8F0 100%)",
                borderRadius: "20px",
                padding: "25px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                transition: "all 0.3s ease",
                border: "2px solid rgba(255,182,193,0.3)",
                zIndex: 1
              }}
              onMouseOver={e => {
                e.currentTarget.style.transform = "translateY(-8px) scale(1.03)";
                e.currentTarget.style.boxShadow = "0 20px 45px rgba(196,30,58,0.25)";
                e.currentTarget.style.zIndex = "10";
              }}
              onMouseOut={e => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
                e.currentTarget.style.zIndex = "1";
              }}
            >
              {/* Envelope flap decoration */}
              <div style={{
                position: "absolute",
                top: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "0",
                height: "0",
                borderLeft: "160px solid transparent",
                borderRight: "160px solid transparent",
                borderTop: "80px solid rgba(255,182,193,0.3)",
                borderRadius: "8px 8px 0 0"
              }}></div>

              {/* Emoji icon */}
              <div style={{
                fontSize: "3.5rem",
                textAlign: "center",
                marginBottom: "15px"
              }}>
                {letter.emoji}
              </div>

              {/* Letter title */}
              <h3 style={{
                fontFamily: "'Pacifico', cursive",
                color: "#C41E3A",
                textAlign: "center",
                fontSize: "1.3rem",
                margin: 0
              }}>
                {letter.title}
              </h3>

              {/* Corner decoration */}
              <div style={{
                position: "absolute",
                bottom: "15px",
                right: "15px",
                fontSize: "1.5rem",
                opacity: 0.5
              }}>✨</div>
            </div>
          );
        })}
      </div>

      {/* OPEN LETTER MODAL */}
      {openLetter && (
        <div 
          style={styles.modal}
          onClick={() => setOpenLetter(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={styles.modalContent}
          >
            <h2 style={styles.modalTitle}>
              {openLetter.emoji} {openLetter.title}
            </h2>
            <p style={styles.modalText}>
              {openLetter.content}
              {"\n— Yours, Always ❤️"}
            </p>
            
            {/* Close button */}
            <button 
              onClick={() => setOpenLetter(null)}
              style={styles.closeButton}
            >
              Close 💗
            </button>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Quicksand:wght@500;700&family=Playfair+Display:wght@500;700&display=swap');
        
        @keyframes openLetter {
          from {
            transform: scale(0.85);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFF5F7 0%, #FFE8EC 50%, #FFD6DD 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Quicksand', sans-serif",
    padding: "60px 20px",
    position: "relative",
    overflow: "hidden"
  },

  pageTitle: {
    fontFamily: "'Pacifico', cursive",
    fontSize: "3rem",
    color: "#C41E3A",
    marginBottom: "50px",
    textShadow: "2px 2px 8px rgba(196,30,58,0.2)",
    zIndex: 3,
    position: "relative"
  },

  envelopeStack: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    zIndex: 3,
    position: "relative",
    maxWidth: "100%",
    padding: "0 20px"
  },

  modal: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0,0.4)",
    backdropFilter: "blur(8px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
    padding: "20px"
  },

  modalContent: {
    background: "linear-gradient(135deg, #FFFDF8 0%, #FFF5F7 100%)",
    padding: "40px",
    maxWidth: "600px",
    width: "90%",
    borderRadius: "25px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.3)",
    fontFamily: "'Playfair Display', serif",
    color: "#5a2a27",
    lineHeight: "1.9",
    animation: "openLetter 0.5s ease",
    border: "3px solid rgba(255,182,193,0.4)"
  },

  modalTitle: {
    fontFamily: "'Pacifico', cursive",
    color: "#C41E3A",
    marginBottom: "25px",
    fontSize: "2rem",
    textAlign: "center"
  },

  modalText: {
    whiteSpace: "pre-line",
    fontSize: "1.1rem",
    marginBottom: "30px"
  },

  closeButton: {
    width: "100%",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(135deg,#FF6B9D,#C41E3A)",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: "700",
    cursor: "pointer",
    fontFamily: "'Quicksand', sans-serif",
    boxShadow: "0 8px 20px rgba(196,30,58,0.3)",
    transition: "all 0.3s"
  }
};