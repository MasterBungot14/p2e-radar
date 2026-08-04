/* =========================================================
   P2E Radar — Application Logic
   ========================================================= */

// ── Game Data (curated from social media) ──
const GAMES = [
  {
    id: 1,
    name: "Axie Infinity: Origins",
    summary: "Strategic card-battle game where players collect, breed, and battle fantasy creatures called Axies. Revamped free-to-play model with robust earning through ranked PvP, tournaments, and marketplace sales.",
    token: "AXS / SLP",
    earnRate: 82,
    platform: ["browser", "android"],
    web: "web3",
    chain: "Ronin",
    source: { platform: "X", handle: "@AxieInfinity", date: "2026-07-28" },
    genre: "Strategy / Card Battle",
    color: "#6c5ce7"
  },
  {
    id: 2,
    name: "Gods Unchained",
    summary: "Free-to-play tactical card game where cards are true NFT assets. Players earn $GODS tokens through competitive play and can trade cards on the open market. Backed by Immutable X for gas-free trading.",
    token: "$GODS",
    earnRate: 88,
    platform: ["browser"],
    web: "web3",
    chain: "Immutable X",
    source: { platform: "Reddit", handle: "r/GodsUnchained", date: "2026-07-30" },
    genre: "Trading Card Game",
    color: "#00cec9"
  },
  {
    id: 3,
    name: "Pixels",
    summary: "Open-world farming and exploration game on Ronin chain. Grow crops, complete quests, own land, and earn $PIXEL tokens. Browser-playable with a charming pixel-art aesthetic and active community.",
    token: "$PIXEL",
    earnRate: 79,
    platform: ["browser"],
    web: "web3",
    chain: "Ronin",
    source: { platform: "X", handle: "@pixels_online", date: "2026-08-01" },
    genre: "Farming / RPG",
    color: "#fd79a8"
  },
  {
    id: 4,
    name: "Sweat Economy",
    summary: "Move-to-earn platform that converts your daily steps into $SWEAT crypto. Available on Android with seamless onboarding. Walking, running, and staking yield consistent returns with minimal effort.",
    token: "$SWEAT",
    earnRate: 95,
    platform: ["android"],
    web: "web3",
    chain: "NEAR",
    source: { platform: "Telegram", handle: "@SweatEconomy", date: "2026-08-02" },
    genre: "Move-to-Earn / Fitness",
    color: "#55efc4"
  },
  {
    id: 5,
    name: "Thetan Arena",
    summary: "Fast-paced MOBA-style battle royale with play-to-earn mechanics. Free heroes available, earn $THG through ranked battles and tournaments. Low barrier to entry with Android and browser support.",
    token: "$THG / $THC",
    earnRate: 76,
    platform: ["browser", "android"],
    web: "web3",
    chain: "BNB Chain",
    source: { platform: "X", handle: "@ThetanArena", date: "2026-07-25" },
    genre: "MOBA / Battle Royale",
    color: "#fdcb6e"
  },
  {
    id: 6,
    name: "Arc8 by GAMEE",
    summary: "Collection of casual mobile mini-games powered by $GMEE token. Compete in skill-based tournaments for crypto rewards. Extremely accessible with no crypto wallet needed to start playing.",
    token: "$GMEE",
    earnRate: 84,
    platform: ["android"],
    web: "web3",
    chain: "Polygon",
    source: { platform: "Discord", handle: "GAMEE Community", date: "2026-07-29" },
    genre: "Casual / Mini-Games",
    color: "#a855f7"
  },
  {
    id: 7,
    name: "Splinterlands",
    summary: "Collectible card game with deep strategic gameplay and real card ownership. Battle in ranked leagues, complete daily quests, and earn SPS governance tokens and card packs. One of the longest-running P2E titles.",
    token: "$SPS / $DEC",
    earnRate: 80,
    platform: ["browser"],
    web: "web3",
    chain: "Hive",
    source: { platform: "X", handle: "@splaborands", date: "2026-08-03" },
    genre: "Trading Card Game",
    color: "#e84393"
  },
  {
    id: 8,
    name: "Mojo Melee",
    summary: "Auto-chess battler featuring collectible creatures called Mojos. Strategically place units and watch them fight. Earn rewards through competitive play with browser accessibility on Polygon network.",
    token: "$MOJO",
    earnRate: 77,
    platform: ["browser"],
    web: "web3",
    chain: "Polygon",
    source: { platform: "Reddit", handle: "r/MojoMelee", date: "2026-07-27" },
    genre: "Auto-Battler",
    color: "#0984e3"
  },
  {
    id: 9,
    name: "Skyweaver",
    summary: "Free-to-play trading card game built on Polygon. Win cards through competitive play and trade them freely. Beautiful art, deep strategy, and truly ownable digital cards with no upfront cost required.",
    token: "USDC (Prizes)",
    earnRate: 85,
    platform: ["browser", "android"],
    web: "web3",
    chain: "Polygon",
    source: { platform: "X", handle: "@SkyweaverGame", date: "2026-08-01" },
    genre: "Trading Card Game",
    color: "#00b894"
  },
  {
    id: 10,
    name: "Mistplay",
    summary: "Android rewards platform where players earn points by playing curated mobile games. Redeem points for gift cards and crypto. Web2 model with straightforward earning — no wallet or blockchain knowledge needed.",
    token: "Points → Gift Cards",
    earnRate: 92,
    platform: ["android"],
    web: "web2",
    chain: "N/A (Web2)",
    source: { platform: "Reddit", handle: "r/beermoney", date: "2026-07-31" },
    genre: "Rewards Platform",
    color: "#e17055"
  },
  {
    id: 11,
    name: "Coin Hunt World",
    summary: "Location-based trivia game where players explore real-world locations to answer questions and earn BTC & ETH. Think Pokémon GO meets crypto trivia. Strong community and consistent payouts.",
    token: "BTC / ETH",
    earnRate: 90,
    platform: ["android"],
    web: "web3",
    chain: "Multi-chain",
    source: { platform: "X", handle: "@CoinHuntWorld", date: "2026-08-02" },
    genre: "Location-based / Trivia",
    color: "#f39c12"
  },
  {
    id: 12,
    name: "Planet IX",
    summary: "DeFi strategy game where players acquire, develop, and trade virtual land territories. Browser-based with deep economic mechanics. Earn $IXT tokens through territorial control and resource management.",
    token: "$IXT",
    earnRate: 78,
    platform: ["browser"],
    web: "web3",
    chain: "Polygon",
    source: { platform: "Discord", handle: "Planet IX DAO", date: "2026-07-26" },
    genre: "Strategy / DeFi",
    color: "#636e72"
  },
  {
    id: 13,
    name: "Zed Run",
    summary: "Digital horse racing platform where players breed, race, and trade virtual thoroughbreds. Each horse is a unique NFT with genetic traits. Earn through race winnings, breeding fees, and marketplace sales.",
    token: "ETH (Winnings)",
    earnRate: 75,
    platform: ["browser"],
    web: "web3",
    chain: "Polygon",
    source: { platform: "X", handle: "@zaborun", date: "2026-07-24" },
    genre: "Racing / Breeding",
    color: "#2d3436"
  },
  {
    id: 14,
    name: "PlayMining",
    summary: "Japanese Web3 gaming platform featuring multiple P2E titles including puzzle, RPG, and cooking games. Earn $DEP tokens across all games. Strong mobile support with Android optimization.",
    token: "$DEP",
    earnRate: 83,
    platform: ["browser", "android"],
    web: "web3",
    chain: "DEP Chain",
    source: { platform: "Telegram", handle: "@PlayMining_EN", date: "2026-07-30" },
    genre: "Multi-Genre Platform",
    color: "#74b9ff"
  },
  {
    id: 15,
    name: "Cashyy",
    summary: "Web2 rewards app where you earn real money by playing casual games on Android. No crypto knowledge required — earnings are in real cash via PayPal. Curated selection of quality mobile games.",
    token: "USD (PayPal)",
    earnRate: 88,
    platform: ["android"],
    web: "web2",
    chain: "N/A (Web2)",
    source: { platform: "Reddit", handle: "r/beermoneyglobal", date: "2026-08-03" },
    genre: "Rewards / Casual",
    color: "#00cec9"
  },
  {
    id: 16,
    name: "Nifty Island",
    summary: "Social sandbox game where players build islands, display NFTs, create games, and earn $ISLAND tokens. Browser-based UGC platform with growing creator economy. Free-to-play with multiple earning paths.",
    token: "$ISLAND",
    earnRate: 81,
    platform: ["browser"],
    web: "web3",
    chain: "Ethereum",
    source: { platform: "X", handle: "@NiftyIsland", date: "2026-08-04" },
    genre: "Sandbox / Social",
    color: "#6c5ce7"
  }
];

// ── Social Feed Data ──
const SOCIAL_POSTS = [
  {
    avatar: "AX",
    username: "@CryptoGamer_Pro",
    platform: "X (Twitter)",
    body: 'Just hit <span class="highlight">Diamond rank</span> in Axie Infinity Origins — earned <span class="highlight">320 AXS</span> this season alone. The new update is a game changer for F2P players! 🔥',
    likes: "4.2K",
    retweets: "892",
    time: "2h ago"
  },
  {
    avatar: "GU",
    username: "u/CardGameEnthusiast",
    platform: "Reddit · r/GodsUnchained",
    body: 'Weekly earnings report: Made <span class="highlight">~$45 in $GODS</span> from ranked play + sold 3 rare cards for <span class="highlight">0.15 ETH</span>. Best free-to-play card game in Web3 right now.',
    likes: "1.8K",
    retweets: "234",
    time: "5h ago"
  },
  {
    avatar: "SW",
    username: "@SweatWalker",
    platform: "X (Twitter)",
    body: 'Day 180 of <span class="highlight">Sweat Economy</span>: 12,000 $SWEAT earned just from walking. Zero investment, just daily steps. This is what P2E should be 🚶‍♂️💰',
    likes: "6.1K",
    retweets: "1.5K",
    time: "3h ago"
  },
  {
    avatar: "PX",
    username: "@PixelsFarmer",
    platform: "X (Twitter)",
    body: 'New <span class="highlight">Pixels</span> land drop incoming! 🌾 If you are not farming $PIXEL yet you are missing out. <span class="highlight">Browser playable</span>, no download needed. Pure vibes.',
    likes: "3.7K",
    retweets: "721",
    time: "1h ago"
  },
  {
    avatar: "CH",
    username: "u/CoinHunterIRL",
    platform: "Reddit · r/CoinHuntWorld",
    body: 'Monthly <span class="highlight">Coin Hunt World</span> earnings: <span class="highlight">0.0021 BTC + 0.03 ETH</span>. Not life-changing but it is literally free crypto for walking and answering trivia. Highly recommend.',
    likes: "2.3K",
    retweets: "445",
    time: "8h ago"
  },
  {
    avatar: "MP",
    username: "@MistplayKing",
    platform: "Telegram",
    body: 'Cashed out <span class="highlight">$60 in gift cards</span> from Mistplay this month 🎮 No crypto wallet needed, no gas fees, just play games and earn. Perfect for beginners!',
    likes: "1.1K",
    retweets: "198",
    time: "4h ago"
  }
];

// ── Gradient background generator for cards ──
function generateCardBg(color, index) {
  const hue = (index * 47) % 360;
  return `linear-gradient(135deg, 
    hsl(${hue}, 60%, 12%) 0%, 
    hsl(${(hue + 40) % 360}, 50%, 8%) 50%, 
    ${color}22 100%)`;
}

// ── Render a single game card ──
function renderGameCard(game, index) {
  const earnClass = game.earnRate >= 85 ? 'high' : 'medium';
  const platformBadges = game.platform.map(p => 
    `<span class="badge badge-${p}">${p === 'browser' ? '🌐 Browser' : '📱 Android'}</span>`
  ).join('');
  
  const webBadge = `<span class="badge badge-${game.web}">${game.web.toUpperCase()}</span>`;

  const sourceIcon = {
    'X': '𝕏',
    'Reddit': '⬡',
    'Discord': '💬',
    'Telegram': '✈️'
  }[game.source.platform] || '📌';

  return `
    <article class="game-card" data-web="${game.web}" data-platforms="${game.platform.join(',')}" data-earn="${game.earnRate}" data-name="${game.name.toLowerCase()}" data-token="${game.token.toLowerCase()}" style="animation-delay: ${index * 0.06}s">
      <div class="game-card-header">
        <div class="game-card-bg" style="background: ${generateCardBg(game.color, index)}; width:100%; height:100%;"></div>
        <div class="game-card-overlay"></div>
        <div class="game-card-badges">
          ${webBadge}
          ${platformBadges}
        </div>
        <div class="game-card-source">
          <span>${sourceIcon}</span>
          <span>via ${game.source.platform}</span>
        </div>
      </div>
      <div class="game-card-body">
        <h3 class="game-card-title">${game.name}</h3>
        <p class="game-card-summary">${game.summary}</p>
        <div class="game-card-stats">
          <div class="stat-item">
            <span class="stat-label">Token / Currency</span>
            <span class="stat-value token">${game.token}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Blockchain</span>
            <span class="stat-value">${game.chain}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Genre</span>
            <span class="stat-value">${game.genre}</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Source</span>
            <span class="stat-value">${game.source.handle}</span>
          </div>
        </div>
        <div class="earn-rate-wrapper">
          <div class="earn-rate-header">
            <span class="earn-rate-label">Playable Earn Rate</span>
            <span class="earn-rate-value ${earnClass}">${game.earnRate}%</span>
          </div>
          <div class="earn-rate-bar">
            <div class="earn-rate-fill ${earnClass}" data-width="${game.earnRate}"></div>
          </div>
        </div>
        <div class="game-card-footer">
          <span class="game-card-date">Added ${game.source.date}</span>
          <a href="#" class="game-card-link" aria-label="View details for ${game.name}">View Details →</a>
        </div>
      </div>
    </article>
  `;
}

// ── Render Social Post Card ──
function renderSocialCard(post) {
  return `
    <div class="social-card">
      <div class="social-card-header">
        <div class="social-avatar">${post.avatar}</div>
        <div class="social-info">
          <div class="social-username">${post.username}</div>
          <div class="social-platform">${post.platform}</div>
        </div>
      </div>
      <div class="social-card-body">${post.body}</div>
      <div class="social-card-meta">
        <span>❤️ ${post.likes}</span>
        <span>🔄 ${post.retweets}</span>
        <span>🕐 ${post.time}</span>
      </div>
    </div>
  `;
}

// ── DOM Elements ──
const gameGrid = document.getElementById('game-grid');
const searchInput = document.getElementById('search-input');
const filterChips = document.querySelectorAll('.chip');
const sortSelect = document.getElementById('sort-select');
const noResults = document.getElementById('no-results');
const trendingTicker = document.getElementById('trending-ticker');
const socialFeeds = document.getElementById('social-feeds');

// ── State ──
let currentFilter = 'all';
let currentSearch = '';
let currentSort = 'earn-desc';

// ── Filter & Render Games ──
function filterAndRender() {
  let filtered = GAMES.filter(game => {
    // Filter by category
    if (currentFilter === 'web3' && game.web !== 'web3') return false;
    if (currentFilter === 'web2' && game.web !== 'web2') return false;
    if (currentFilter === 'browser' && !game.platform.includes('browser')) return false;
    if (currentFilter === 'android' && !game.platform.includes('android')) return false;

    // Search
    if (currentSearch) {
      const q = currentSearch.toLowerCase();
      return (
        game.name.toLowerCase().includes(q) ||
        game.token.toLowerCase().includes(q) ||
        game.summary.toLowerCase().includes(q) ||
        game.genre.toLowerCase().includes(q) ||
        game.chain.toLowerCase().includes(q)
      );
    }

    return true;
  });

  // Sort
  switch (currentSort) {
    case 'earn-desc':
      filtered.sort((a, b) => b.earnRate - a.earnRate);
      break;
    case 'earn-asc':
      filtered.sort((a, b) => a.earnRate - b.earnRate);
      break;
    case 'name-asc':
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'recent':
      filtered.sort((a, b) => new Date(b.source.date) - new Date(a.source.date));
      break;
  }

  if (filtered.length === 0) {
    gameGrid.innerHTML = '';
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
    gameGrid.innerHTML = filtered.map((g, i) => renderGameCard(g, i)).join('');
    // Animate earn bars after render
    requestAnimationFrame(() => {
      document.querySelectorAll('.earn-rate-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    });
  }
}

// ── Event Listeners ──
filterChips.forEach(chip => {
  chip.addEventListener('click', () => {
    filterChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentFilter = chip.dataset.filter;
    filterAndRender();
  });
});

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value;
  filterAndRender();
});

sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  filterAndRender();
});

// ── Render Trending Ticker ──
function renderTrending() {
  const sorted = [...GAMES].sort((a, b) => b.earnRate - a.earnRate).slice(0, 8);
  trendingTicker.innerHTML = sorted.map((game, i) => `
    <div class="ticker-item">
      <span class="ticker-rank">#${i + 1}</span>
      <span class="ticker-name">${game.name}</span>
      <span class="ticker-token">${game.token}</span>
      <span class="ticker-mentions">${game.earnRate}% earn</span>
    </div>
  `).join('');
}

// ── Render Social Feeds ──
function renderSocialFeeds() {
  socialFeeds.innerHTML = SOCIAL_POSTS.map(renderSocialCard).join('');
}

// ── Animate Hero Metrics ──
function animateMetrics() {
  const metricGames = document.getElementById('metric-games');
  const metricAvg = document.getElementById('metric-avg');
  const totalGames = GAMES.length;
  const avgRate = Math.round(GAMES.reduce((sum, g) => sum + g.earnRate, 0) / GAMES.length);

  let currentCount = 0;
  let currentAvg = 0;

  const interval = setInterval(() => {
    if (currentCount < totalGames) {
      currentCount++;
      metricGames.textContent = currentCount;
    }
    if (currentAvg < avgRate) {
      currentAvg++;
      metricAvg.textContent = currentAvg + '%';
    }
    if (currentCount >= totalGames && currentAvg >= avgRate) {
      clearInterval(interval);
    }
  }, 60);
}

// ── Scroll Animations (Intersection Observer) ──
function setupScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.step-card, .social-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });
}

// ── Smooth scroll for nav links ──
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================
//  ENHANCED FEATURES
// ============================================================

// ── Loading Screen ──
function runLoadingScreen() {
  const loadingScreen = document.getElementById('loading-screen');
  const loadingProgress = document.getElementById('loading-progress');
  let progress = 0;

  const interval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress >= 100) {
      progress = 100;
      loadingProgress.style.width = '100%';
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 300);
    } else {
      loadingProgress.style.width = progress + '%';
    }
  }, 200);
}

// ── Particle System ──
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.size = Math.random() * 2 + 0.5;
      this.opacity = Math.random() * 0.4 + 0.1;
      this.color = ['#6c5ce7', '#00cec9', '#fd79a8', '#fdcb6e', '#55efc4'][Math.floor(Math.random() * 5)];
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
      if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.opacity;
      ctx.fill();
      ctx.globalAlpha = 1;
    }
  }

  // Create particles (fewer on mobile for performance)
  const count = window.innerWidth < 768 ? 30 : 60;
  for (let i = 0; i < count; i++) {
    particles.push(new Particle());
  }

  function connectParticles() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = particles[i].color;
          ctx.globalAlpha = 0.06 * (1 - dist / 120);
          ctx.lineWidth = 0.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    connectParticles();
    animationId = requestAnimationFrame(animate);
  }

  animate();
}

// ── Game Detail Modal ──
function initModal() {
  const overlay = document.getElementById('modal-overlay');
  const modalHeader = document.getElementById('modal-header');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.getElementById('modal-close');

  function openModal(gameId) {
    const game = GAMES.find(g => g.id === gameId);
    if (!game) return;

    const earnClass = game.earnRate >= 85 ? 'high' : 'medium';
    const sourceIcons = {
      'X': '𝕏',
      'Reddit': '⬡',
      'Discord': '💬',
      'Telegram': '✈️'
    };

    const platformLabels = {
      'browser': '🌐 Browser Playable',
      'android': '📱 Android App'
    };

    const webBadge = `<span class="badge badge-${game.web}">${game.web.toUpperCase()}</span>`;
    const platformBadges = game.platform.map(p =>
      `<span class="badge badge-${p}">${p === 'browser' ? '🌐 Browser' : '📱 Android'}</span>`
    ).join('');

    // Header
    modalHeader.innerHTML = `
      <div class="modal-header-bg" style="background: ${generateCardBg(game.color, game.id)};"></div>
      <div class="modal-header-overlay"></div>
      <h2 class="modal-header-title">${game.name}</h2>
      <div class="modal-header-badges">${webBadge}${platformBadges}</div>
    `;

    // Body
    modalBody.innerHTML = `
      <p class="modal-summary">${game.summary}</p>

      <div class="modal-stats-grid">
        <div class="modal-stat">
          <div class="modal-stat-label">Token / Currency</div>
          <div class="modal-stat-value token-color">${game.token}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Blockchain</div>
          <div class="modal-stat-value chain-color">${game.chain}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Genre</div>
          <div class="modal-stat-value">${game.genre}</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-label">Web Type</div>
          <div class="modal-stat-value">${game.web.toUpperCase()}</div>
        </div>
      </div>

      <div class="modal-earn-section">
        <div class="modal-earn-header">
          <span class="modal-earn-title">Playable Earning Percentage</span>
          <span class="modal-earn-percentage ${earnClass}">${game.earnRate}%</span>
        </div>
        <div class="modal-earn-bar">
          <div class="modal-earn-fill ${earnClass}" id="modal-earn-bar-fill" style="width: 0%"></div>
        </div>
        <p class="modal-earn-desc">
          This game has a verified <strong>${game.earnRate}%</strong> play-to-earn chance. 
          ${game.earnRate >= 90 ? 'Exceptional earning potential — one of the highest-rated P2E games.' :
            game.earnRate >= 85 ? 'Strong earning potential with consistent payout history.' :
            game.earnRate >= 80 ? 'Solid earning mechanics with a proven track record.' :
            'Viable earning opportunity — meets our 75% minimum threshold.'}
        </p>
      </div>

      <div class="modal-source-info">
        <div class="modal-source-icon">${sourceIcons[game.source.platform] || '📌'}</div>
        <div class="modal-source-text">
          <div class="modal-source-platform">Sourced from ${game.source.platform}</div>
          <div class="modal-source-handle">${game.source.handle}</div>
        </div>
        <div class="modal-source-date">${game.source.date}</div>
      </div>

      <div class="modal-platforms">
        ${game.platform.map(p => `
          <span class="modal-platform-chip">${platformLabels[p]}</span>
        `).join('')}
      </div>
    `;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Animate earn bar after modal opens
    requestAnimationFrame(() => {
      setTimeout(() => {
        const fill = document.getElementById('modal-earn-bar-fill');
        if (fill) fill.style.width = game.earnRate + '%';
      }, 100);
    });
  }

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Keyboard: Escape to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Delegate clicks on "View Details" links
  document.addEventListener('click', (e) => {
    const link = e.target.closest('.game-card-link');
    if (link) {
      e.preventDefault();
      const card = link.closest('.game-card');
      const gameName = card.querySelector('.game-card-title').textContent;
      const game = GAMES.find(g => g.name === gameName);
      if (game) openModal(game.id);
    }
  });
}

// ── Back to Top Button ──
function initBackToTop() {
  const btn = document.getElementById('back-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Navbar Scroll Effect ──
function initNavScroll() {
  const nav = document.getElementById('main-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.borderBottomColor = 'rgba(108, 92, 231, 0.15)';
      nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
      nav.style.borderBottomColor = 'rgba(255, 255, 255, 0.06)';
      nav.style.boxShadow = 'none';
    }
  });
}

// ── Ticker Auto Scroll ──
function initTickerScroll() {
  const ticker = document.getElementById('trending-ticker');
  if (!ticker) return;

  let scrollDir = 1;
  let scrollSpeed = 0.5;
  let isPaused = false;

  ticker.addEventListener('mouseenter', () => isPaused = true);
  ticker.addEventListener('mouseleave', () => isPaused = false);

  function autoScroll() {
    if (!isPaused) {
      ticker.scrollLeft += scrollSpeed * scrollDir;
      if (ticker.scrollLeft >= ticker.scrollWidth - ticker.clientWidth) {
        scrollDir = -1;
      } else if (ticker.scrollLeft <= 0) {
        scrollDir = 1;
      }
    }
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
}

// ── Initialize Everything ──
document.addEventListener('DOMContentLoaded', () => {
  // Run loading screen
  runLoadingScreen();

  // Core renders
  filterAndRender();
  renderTrending();
  renderSocialFeeds();

  // Enhanced features
  initParticles();
  initModal();
  initBackToTop();
  initNavScroll();
  initTickerScroll();

  // Delayed animations
  setTimeout(() => {
    animateMetrics();
    setupScrollAnimations();
  }, 800);
});
