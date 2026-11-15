const examples = {
  circle: {
    title: "Circle reveal",
    label: "Animated ocean image clipped into a circle",
    code: `.element {
  background-image: url('ocean.jpg');
  background-size: cover;
  background-position: center;
  clip-path: circle(12% at 50% 50%);
  animation: circleReveal 3s ease-in-out infinite alternate;
}

@keyframes circleReveal {
  from { clip-path: circle(12% at 50% 50%); }
  to   { clip-path: circle(75% at 50% 50%); }
}`
  },
  hexagon: {
    title: "Hexagon pulse",
    label: "Forest image clipped into a pulsing hexagon",
    code: `.element {
  background-image: url('forest.jpg');
  background-size: cover;
  background-position: center;
  animation: hexPulse 3s ease-in-out infinite;
}

@keyframes hexPulse {
  0%, 100% {
    clip-path: polygon(25% 6%, 75% 6%, 100% 50%,
      75% 94%, 25% 94%, 0 50%);
  }
  50% {
    clip-path: polygon(30% 0, 70% 0, 100% 50%,
      70% 100%, 30% 100%, 0 50%);
  }
}`
  },
  star: {
    title: "Star spin",
    label: "Sunset image clipped into a rotating star",
    code: `.element {
  background-image: url('sunset.jpg');
  background-size: cover;
  background-position: center;
  animation: starSpin 4s linear infinite;
}

@keyframes starSpin {
  from {
    clip-path: polygon(50% 0, 61% 35%, 98% 35%,
      68% 57%, 79% 95%, 50% 72%, 21% 95%,
      32% 57%, 2% 35%, 39% 35%);
    transform: rotate(0deg);
  }
  to { transform: rotate(360deg); }
}`
  },
  diamond: {
    title: "Diamond breathe",
    label: "City image clipped into a breathing diamond",
    code: `.element {
  background-image: url('city.jpg');
  background-size: cover;
  background-position: center;
  animation: diamondBreathe 3s ease-in-out infinite;
}

@keyframes diamondBreathe {
  0%, 100% {
    clip-path: polygon(50% 8%, 95% 50%, 50% 92%, 5% 50%);
  }
  50% {
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
  }
}`
  },
  diagonal: {
    title: "Diagonal sweep",
    label: "Gold and dark diagonal bands reveal from left",
    code: `.element {
  background-image: url('sunset.jpg');
  background-size: cover;
  background-position: center;
  animation: diagSweep 2.5s ease-in-out infinite alternate;
}

@keyframes diagSweep {
  from {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}`
  },
  curtain: {
    title: "Curtain drop",
    label: "Aurora image revealed from top to bottom",
    code: `.element {
  background-image: url('aurora.jpg');
  background-size: cover;
  background-position: center;
  animation: curtainDrop 2.5s ease-in-out infinite alternate;
}

@keyframes curtainDrop {
  from { clip-path: inset(0 0 100% 0); }
  to   { clip-path: inset(0 0 0 0); }
}`
  },
  iris: {
    title: "Iris open",
    label: "Galaxy image revealed through an expanding ellipse",
    code: `.element {
  background-image: url('galaxy.jpg');
  background-size: cover;
  background-position: center;
  animation: irisOpen 2.5s ease-in-out infinite alternate;
}

@keyframes irisOpen {
  from { clip-path: ellipse(5% 5% at 50% 50%); }
  to   { clip-path: ellipse(72% 72% at 50% 50%); }
}`
  },
  blinds: {
    title: "Venetian blinds",
    label: "Desert image revealed through horizontal slats",
    code: `.element {
  background-image: url('desert.jpg');
  background-size: cover;
  background-position: center;
  animation: blindsOpen 2s ease-in-out infinite alternate;
}

@keyframes blindsOpen {
  from {
    clip-path: polygon(
      0 0, 100% 0, 100% 10%, 0 10%,
      0 20%, 100% 20%, 100% 30%, 0 30%,
      0 40%, 100% 40%, 100% 50%, 0 50%,
      0 60%, 100% 60%, 100% 70%, 0 70%,
      0 80%, 100% 80%, 100% 90%, 0 90%
    );
  }
  to { clip-path: inset(0 0 0 0); }
}`
  }
};

const tabs = [...document.querySelectorAll(".tab")];
const visual = document.querySelector("#visual");
const title = document.querySelector("#effectTitle");
const code = document.querySelector("#codeOutput");

function selectEffect(name) {
  const item = examples[name];
  if (!item) return;

  tabs.forEach((tab) => {
    const active = tab.dataset.effect === name;
    tab.classList.toggle("active", active);
    tab.setAttribute("aria-selected", String(active));
  });

  visual.className = `visual ${name}`;
  visual.setAttribute("aria-label", item.label);
  title.textContent = item.title;
  code.textContent = item.code;
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectEffect(tab.dataset.effect));
  tab.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowLeft"].includes(event.key)) return;
    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const next = (index + direction + tabs.length) % tabs.length;
    tabs[next].focus();
    selectEffect(tabs[next].dataset.effect);
  });
});

selectEffect("circle");
