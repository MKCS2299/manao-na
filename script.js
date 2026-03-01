function option1() {
  document.getElementById("message").innerHTML =
  "🚗 BABY MILLU DISPATCHED.<br><br>Peeloz. Waffles. Solid masti.<br><br>Status: speeding through emotional traffic.<br><br>Tips appreciated.";
}

function option2() {
  document.getElementById("message").innerHTML =
  "📺 Friends loading...<br><br>I am laughing 0.4 seconds after you.<br>Also virtual pitti is available.";
  
  document.getElementById("bgAudio").play();
}

function option3() {
  document.getElementById("message").innerHTML =
  "♟ Welcome to Chaos Chess.<br><br>She: The Queen.<br>Me: emotionally unstable BT.<br><br>Objective: Her telling me how to checkmate.";
}

function option4() {
  document.getElementById("message").innerHTML =
  "🎁 OFFER ACTIVATED.<br><br>One pitti requested in person.<br>Nillu and Pillu auto added to the cart.<br><br>Terms & Conditions:<br>Unlimited huggies.<br>Chewy Mints?.<br>Valid forever.";
}

/* generate floating soot sprites */
for (let i = 0; i < 15; i++) {
  let sprite = document.createElement("div");
  sprite.classList.add("sprite");
  sprite.style.left = Math.random() * 100 + "vw";
  sprite.style.animationDuration = (5 + Math.random() * 10) + "s";
  document.body.appendChild(sprite);
}
