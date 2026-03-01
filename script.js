function option1() {
  document.getElementById("message").innerHTML =
  "🚗 DELIVERY BOY DISPATCHED.<br><br>Peeloz. Waffles. Solid masti.<br><br>Status: speeding through emotional traffic.<br><br>Tips accepted in forehead kisses.";
}

function option2() {
  document.getElementById("message").innerHTML =
  "📺 Friends loading...<br><br>I am laughing 0.4 seconds after you.<br>Also performing virtual pitti attacks.<br><br>You have been mildly bullied with love.";
  
  document.getElementById("bgAudio").play();
}

function option3() {
  document.getElementById("message").innerHTML =
  "♟ Welcome to Chaos Chess.<br><br>She: The Queen.<br>Me: emotionally unstable pawn.<br><br>Objective: survive her brilliance.";
}

function option4() {
  document.getElementById("message").innerHTML =
  "🎁 OFFER ACTIVATED.<br><br>One pitti requested.<br>Second automatically added.<br><br>Terms & Conditions:<br>Unlimited cuddles.<br>No refunds.<br>Valid forever.";
}

/* generate floating soot sprites */
for (let i = 0; i < 15; i++) {
  let sprite = document.createElement("div");
  sprite.classList.add("sprite");
  sprite.style.left = Math.random() * 100 + "vw";
  sprite.style.animationDuration = (5 + Math.random() * 10) + "s";
  document.body.appendChild(sprite);
}
