const answers = {
  1: 'B', // Correct answer: "Put Put"
  2: 'C', // Correct answer: "He held Dad’s finger really tight"
  3: 'C', // Correct answer: "Egg Yolke"
  4: 'C', // Correct answer: "A water cup"
  5: 'B', // Correct answer: "Hasasna by Otosrad"
  6: 'A', // Correct answer: "Peanut butter"
  7: 'A', // Correct answer: "When he mixes up his left and right hand and my left and right hand"
  8: 'D', // Correct answer: "When we play lego together"
  9: 'D',  // Correct answer: "Excited"
  10: 'A'  // Correct answer: "He is a
  
};

function showConfettiMessage(onContinue) {
  // Create overlay
  let overlay = document.createElement('div');
  overlay.id = 'confetti-overlay';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'repeating-linear-gradient(135deg, #fff176 0 20px, #ff8a65 20px 40px, #81d4fa 40px 60px, #aed581 60px 80px)';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.zIndex = 9999;
  overlay.style.animation = 'pop 0.5s';

  // Funny message
  const messages = [
    "Good job Bada! You're one giggle closer to your gift! 🎁🥳",
    "Woohoo! Bada, you crushed it! The gift is getting nervous! 😆🎉",
    "Nice! Bada, your gift is peeking out already! 🕵️‍♂️🎁",
    "Bravo! Bada, the gift fairy is warming up! 🧚‍♂️✨",
    "Yay! Bada, you’re on a roll! The gift can almost smell you! 😂🎁",
    "Bada, you’re a quiz superstar! The gift is doing a happy dance! 💃🎁",
    "You did it, Bada! The gift is wrapping itself up! 🎁🌀",
    "Legendary answer, Bada! The gift is calling your name! 📣🎁",
    "Bada, you’re unstoppable! The gift is getting closer! 🏃‍♂️🎁",
    "You’re making this look easy, Bada! The gift is getting excited! 🤩🎁",
    "Bada, you’re a quiz ninja! The gift is hiding in plain sight! 🥷🎁"
  ];
  let msg = document.createElement('div');
  msg.innerText = messages[Math.floor(Math.random() * messages.length)];
  msg.style.fontSize = '2rem';
  msg.style.color = '#d2691e';
  msg.style.background = 'rgba(255,255,255,0.95)';
  msg.style.padding = '40px 60px';
  msg.style.borderRadius = '20px';
  msg.style.boxShadow = '0 4px 24px rgba(0,0,0,0.15)';
  msg.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
  msg.style.marginBottom = '30px';
  overlay.appendChild(msg);

  // Continue button
  const btns = [
    "I'm ready for the next question!",
    "Bring on the next one!",
    "Let's keep going!",
    "Next question, please!",
    "Hit me with the next one!"
  ];
  let btn = document.createElement('button');
  btn.innerText = btns[Math.floor(Math.random() * btns.length)];
  btn.style.fontSize = '1.2rem';
  btn.style.padding = '16px 32px';
  btn.style.background = '#f0a500';
  btn.style.color = 'white';
  btn.style.border = 'none';
  btn.style.borderRadius = '12px';
  btn.style.cursor = 'pointer';
  btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.10)';
  btn.style.fontFamily = "'Comic Sans MS', cursive, sans-serif";
  btn.onclick = function() {
    overlay.remove();
    if (onContinue) onContinue();
  };
  overlay.appendChild(btn);

  document.body.appendChild(overlay);
}

function checkAnswer(questionNumber, selected) {
  if (selected === answers[questionNumber]) {
    showConfettiMessage(() => {
      const current = document.getElementById(`question${questionNumber}`);
      current.style.display = 'none';
      if (questionNumber < 9) {
        document.getElementById(`question${questionNumber + 1}`).style.display = 'block';
      } else {
        document.getElementById('congrats').style.display = 'block';
      }
    });
  } else {
    alert("Oops! Try again, Daddy! 😄");
  }
}

// Add a simple pop animation for the overlay
const style = document.createElement('style');
style.innerHTML = `@keyframes pop { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(1); opacity: 1; } }`;
document.head.appendChild(style);
