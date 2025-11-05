const output = document.getElementById('output');
const input = document.getElementById('commandInput');
const wonderImageContainer = document.getElementById('wonderImage');

const wonders = {
  greatwall: ` **The Great Wall of China**
────────────────────────────
 *Location:* Northern China  
 *Built:* 7th century BC – 1644 AD  
 *Built by:* Various Chinese dynasties, notably the Ming  
────────────────────────────
A dragon of stone crawling across mountains and deserts.
Over 13,000 miles long, stitched together from sweat, stone, and stories of defense.
They say you can’t see it from space — but you can *feel it* from history.`,

  tajmahal: ` **The Taj Mahal**
────────────────────────────
 *Location:* Agra, India  
 *Built:* 1632 – 1648 AD  
 *Built by:* Emperor Shah Jahan  
────────────────────────────
A marble poem of love and loss.
Raised for Mumtaz Mahal, glowing white under moonlight — as if her spirit still guards it.
It’s not just a tomb; it’s love turned into architecture.`,

  petra: ` **Petra**
────────────────────────────
*Location:* Ma'an, Jordan  
*Built:* 312 BC (approx.)  
*Built by:* Nabataean Civilization  
────────────────────────────
The rose-red city, carved directly into desert cliffs.
Hidden for centuries until 1812, when the sands finally gave up its secret.
By day it burns gold, by dusk it blushes — the desert’s own masterpiece.`,

  machupicchu: `**Machu Picchu**
────────────────────────────
 *Location:* Andes Mountains, Peru  
 *Built:* 15th century  
 *Built by:* Inca Empire  
────────────────────────────
A city among clouds, untouched by time.
Perfectly aligned stones stand firm without mortar — as if they remember their own balance.
Discovered in 1911, it remains proof that mystery can still exist above the noise.`,

  colosseum: `**The Colosseum**
────────────────────────────
*Location:* Rome, Italy  
*Built:* 72 – 80 AD  
*Built by:* Emperor Vespasian & Titus  
────────────────────────────
Blood, glory, and echo.
Fifty thousand Romans once roared for sport beneath its arches.
Now, the silence of its ruins reminds us that even empires crumble, but stories endure.`,

  chichenitza: `**Chichen Itza**
────────────────────────────
*Location:* Yucatán, Mexico  
*Built:* 600 – 900 AD  
*Built by:* Maya Civilization  
────────────────────────────
Mathematics carved in stone.
The Temple of Kukulkan catches the sun so precisely that shadows slither like a serpent on equinox days.
Proof that ancient science had style.`,

  christ: `**Christ the Redeemer**
────────────────────────────
*Location:* Rio de Janeiro, Brazil  
*Built:* 1922 – 1931 AD  
*Designed by:* Heitor da Silva Costa  
────────────────────────────
Arms open to the world — standing 98 feet tall atop Mount Corcovado.
Lightning sometimes strikes it, but it never falls.
Perhaps heaven just likes saying hello.`,

  about: `**About This Project**
────────────────────────────
Welcome to *Terminal of Wonders v1.0*, a command-line journey through humanity’s greatest creations.  
Concept, writing, and code by **Ranit Saha**.  
A heritage meets code experiment — where curiosity compiles history.  
────────────────────────────
Type 'analytics' to view system status.`,

  analytics: `**Wonders OS v1.0 — System Analytics**
────────────────────────────
• Total Wonders Loaded: 7  
• Boot Time: 0.42s  
• Memory: 512MB imagination  
• CPU: Human curiosity @ 100% utilization  
• Network: Connected to the past  
────────────────────────────
Created & maintained by Ranit Saha © 2025  
All rights reserved. Wonder responsibly.`
};

const commands = {
  help: `*Welcome to Wonders OS Terminal*
────────────────────────────
Available commands:
greatwall 
tajmahal 
petra 
machupicchu
colosseum 
chichenitza 
christ
about 
analytics 
clear
────────────────────────────
Type any name above to explore that wonder.`
};

const wonderImages = {
  greatwall: 'great-wall-of-china-historic-great-wall-of-china-X7DgSZKx.jpg',
  tajmahal: 'OIP.jpeg',
  petra: 'GettyImages-133969533-596b51705f9b582c3574ec89.jpg',
  machupicchu: 'machu-picchu-5.webp',
  colosseum: 'colosseum-rome-italy-2064827.jpg',
  chichenitza: 'El-Castillo-Chichen-Itza-Yucatan-Mexico.webp',
  christ: 'wp1991646.jpg'
};

function runCommand() {
  const cmd = input.value.trim().toLowerCase();
  if (!cmd) return;

  output.innerHTML += `$ ${cmd}\n`;

  wonderImageContainer.innerHTML = '';
  wonderImageContainer.style.opacity = '0';
  wonderImageContainer.style.transform = 'scale(0.9)';
  wonderImageContainer.style.display = 'none';
  wonderImageContainer.style.height = '0px';

  if (cmd === 'clear') {
    output.innerHTML = '';
  } else if (commands[cmd]) {
    output.innerHTML += commands[cmd] + '\n\n';
  } else if (wonders[cmd]) {
    output.innerHTML += wonders[cmd] + '\n\n';
    if (wonderImages[cmd]) {
      const imgTag = `<img src="${wonderImages[cmd]}" alt="${cmd}" class="wonder-display-img">`;
      wonderImageContainer.innerHTML = imgTag;
      wonderImageContainer.style.display = 'flex';
      wonderImageContainer.style.height = '300px';

      setTimeout(() => {
        wonderImageContainer.style.opacity = '1';
        wonderImageContainer.style.transform = 'scale(1)';
      }, 50);
    }
  } else {
    output.innerHTML += `Command not found: ${cmd}\nType 'help' for list of commands.\n\n`;
  }

  input.value = '';
  output.scrollTop = output.scrollHeight;
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    e.preventDefault();
    runCommand();
  }
});

input.addEventListener('change', runCommand);

const leftText = document.querySelector('.left-text');
const lines = [
  "▣ Decoding lost civilizations...",
  "▣ Aligning stars with stone...",
  "▣ Measuring echoes of empires...",
  "▣ Reconstructing time from dust...",
  "▣ Compiling legends into memory..."
];
let i = 0;
setInterval(() => {
  leftText.innerHTML = `<p>${lines[i]}</p>`;
  i = (i + 1) % lines.length;
}, 4000);

// --- Particles Background ---
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = Array.from({ length: 40 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 1.2,
  s: Math.random() * 0.3 + 0.2
}));

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#00ff99";
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
    p.y -= p.s;
    if (p.y < 0) p.y = canvas.height;
  });
  requestAnimationFrame(animate);
}
animate();
