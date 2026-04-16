// Language management
let currentLanguage = "en";

// Bird data
const birdsData = {
  en: [
    {
      name: "Seram (Moluccan) Cockatoo",
      scientific: "Cacatua moluccensis",
      description:
        "A critically endangered cockatoo found nowhere else on earth. The villagers are now playing a vital role in protecting this species from illegal trading.",
      image: new URL("/src/assets/hiding-tree.jpg", import.meta.url).href,
    },
    {
      name: "Eclectus Parrots",
      scientific: "Eclectus roratus",
      description: "Known for extreme sexual dimorphism with brilliant green males and red females.",
      image: new URL("/src/assets/eclectus-male-female.jpg", import.meta.url).href,
    },
    {
      name: "Red Lories",
      scientific: "Eos bornea",
      description: "Beautiful red parrots commonly found throughout the Maluku islands.",
      image: new URL("/src/assets/red-lories.jpg", import.meta.url).href,
    },
    {
      name: "Hornbills",
      scientific: "Bucerotidae",
      description: "Large birds with impressive curved bills, found in the forests of Seram.",
      image: new URL("/src/assets/hornbill.jpg", import.meta.url).href,
    },
  ],
  id: [
    {
      name: "Kakatua Seram (Maluku)",
      scientific: "Cacatua moluccensis",
      description:
        "Kakatua yang terancam punah yang hanya ditemukan di sini. Penduduk desa kini memainkan peran penting dalam melindungi spesies ini dari perdagangan ilegal.",
      image: new URL("/src/assets/hiding-tree.jpg", import.meta.url).href,
    },
    {
      name: "Nuri Sayap Hijau",
      scientific: "Eclectus roratus",
      description: "Dikenal karena dimorfisme seksual ekstrem dengan jantan hijau cemerlang dan betina merah.",
      image: new URL("/src/assets/eclectus-male-female.jpg", import.meta.url).href,
    },
    {
      name: "Nuri Merah",
      scientific: "Eos bornea",
      description: "Burung beo merah cantik yang umum ditemukan di kepulauan Maluku.",
      image: new URL("/src/assets/red-lories.jpg", import.meta.url).href,
    },
    {
      name: "Rangkong",
      scientific: "Bucerotidae",
      description: "Burung besar dengan paruh melengkung yang mengesankan, ditemukan di hutan Seram.",
      image: new URL("/src/assets/hornbill.jpg", import.meta.url).href,
    },
  ],
};

// Trip data
const tripsData = {
  en: [
    {
      title: "Guided Nature Walks",
      duration: "3 - 6 hours",
      groupSize: "No limit",
      description:
        "We will take you for a walk between villages where we will point out local flora, fauna and the villagers' age-old farming techniques. Bring your binoculars as we are very likely to see birds along the way. Trips can be tailored to your specific interests and energy level.",
    },
    {
      title: "Visit to Viewing Platforms",
      duration: "1 - 3 hours",
      groupSize: "Up to 20 people",
      description:
        "Above the village of Masihulan are two viewing platforms surrounded by parrots' nests. It's a steep 15 minute hike up from the main road, but once you're there the view is spectacular.",
    },
    {
      title: "Canopy Platform Trips",
      duration: "Several hours to overnight",
      groupSize: "Up to 10 people",
      description:
        "Sleep in a tree. Wake up before dawn to watch the neighboring parrots begin their day by stretching and preening.",
    },
    {
      title: "Api Lima",
      duration: "2 days",
      groupSize: "Up to 6 people",
      description:
        "This shallow cave offers a high lookout over the forest canopy. It's a two to three hour hike from the quarry where the road ends. This high cave is a great place to relax and view Cockatoos, Lories, and Hornbills without having to climb up to the tree platforms.",
    },
    {
      title: "Custom Tree Platforms",
      duration: "3 - 5 days",
      groupSize: "Small",
      description:
        "If there's a specific bird you would like to see, our guides can try to locate them and build a concealed platform for you near their sleeping trees or feeding spots.",
    },
    {
      title: "Trekking Across Seram",
      duration: "7 days",
      groupSize: "Up to 6 people",
      description:
        "This is a very strenuous hike which requires a number of porters to carry your food as well as things to barter on your way through the Manusela National Park. For the first four days you'll be staying in villages enjoying the warm hospitality of their chiefs. The last two or three nights on the way down from the village of Manusela to the southern coast, you'll sleep in caves cut into the rock face.",
    },
  ],
  id: [
    {
      title: "Jalan Kaki Alam Terpandu",
      duration: "3 - 6 jam",
      groupSize: "Tanpa batas",
      description:
        "Kami akan mengajak Anda berjalan-jalan antar desa di mana kami akan menunjukkan flora lokal, fauna, dan teknik pertanian kuno penduduk desa. Bawa teropong Anda karena kami sangat mungkin melihat burung di sepanjang jalan. Perjalanan dapat disesuaikan dengan minat dan tingkat energi spesifik Anda.",
    },
    {
      title: "Kunjungan ke Platform Pengamatan",
      duration: "1 - 3 jam",
      groupSize: "Hingga 20 orang",
      description:
        "Di atas desa Masihulan terdapat dua platform pengamatan yang dikelilingi oleh sarang burung beo. Ini adalah pendakian curam 15 menit dari jalan utama, tetapi begitu Anda sampai di sana pemandangannya spektakuler.",
    },
    {
      title: "Perjalanan Platform Kanopi",
      duration: "Beberapa jam hingga semalam",
      groupSize: "Hingga 10 orang",
      description:
        "Tidur di pohon. Bangun sebelum fajar untuk menyaksikan burung beo tetangga memulai hari mereka dengan meregangkan dan membersihkan bulu.",
    },
    {
      title: "Api Lima",
      duration: "2 hari",
      groupSize: "Hingga 6 orang",
      description:
        "Gua dangkal ini menawarkan pemandangan tinggi di atas kanopi hutan. Ini adalah pendakian dua hingga tiga jam dari tambang di mana jalan berakhir. Gua tinggi ini adalah tempat yang bagus untuk bersantai dan melihat Kakatua, Lories, dan Hornbills tanpa harus naik ke platform pohon.",
    },
    {
      title: "Platform Pohon Kustom",
      duration: "3 - 5 hari",
      groupSize: "Kecil",
      description:
        "Jika ada burung tertentu yang ingin Anda lihat, pemandu kami dapat mencoba menemukan mereka dan membangun platform tersembunyi untuk Anda di dekat pohon tidur atau tempat makan mereka.",
    },
    {
      title: "Trekking Melintasi Seram",
      duration: "7 hari",
      groupSize: "Hingga 6 orang",
      description:
        "Ini adalah pendakian yang sangat berat yang membutuhkan sejumlah porter untuk membawa makanan Anda serta barang untuk barter dalam perjalanan Anda melalui Taman Nasional Manusela. Selama empat hari pertama Anda akan tinggal di desa menikmati keramahan hangat kepala suku mereka. Dua atau tiga malam terakhir dalam perjalanan turun dari desa Manusela ke pantai selatan, Anda akan tidur di gua yang dipotong ke wajah batu.",
    },
  ],
};

// Generate waveform SVG for bird cards
function generateWaveform(index) {
  const points = [];
  const segments = 60;
  const baseAmplitude = 3;
  const seed = index * 13;

  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const angle = t * Math.PI * 2 * 4 + seed;
    const amplitude = baseAmplitude * (1 + Math.sin(angle * 0.5) * 0.3);
    const y = 50 + Math.sin(angle) * amplitude;
    const x = t * 100;
    points.push(`${x},${y}`);
  }
  return points.join(" ");
}

// Create bird card HTML
function createBirdCard(bird, index) {
  const wavePoints = generateWaveform(index);
  const delayClass = index < 6 ? `delay-${index + 1}` : "";
  return `
        <div class="bird-card fade-in ${delayClass}">
            <div class="waveform">
                <svg class="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline points="${wavePoints}" fill="none" stroke="#5a7c65" stroke-width="0.3" opacity="0.6" vector-effect="non-scaling-stroke" transform="translate(0, -48)"/>
                    <polyline points="${wavePoints}" fill="none" stroke="#5a7c65" stroke-width="0.3" opacity="0.6" vector-effect="non-scaling-stroke" transform="translate(0, 48) scale(1, -1)"/>
                    <polyline points="${wavePoints}" fill="none" stroke="#5a7c65" stroke-width="0.3" opacity="0.6" vector-effect="non-scaling-stroke" transform="rotate(90) translate(0, -98)"/>
                    <polyline points="${wavePoints}" fill="none" stroke="#5a7c65" stroke-width="0.3" opacity="0.6" vector-effect="non-scaling-stroke" transform="rotate(90) translate(0, 2)"/>
                </svg>
            </div>
            <div class="relative aspect-[4/3] overflow-hidden">
                <img src="${bird.image}" alt="${bird.name}" class="w-full h-full object-cover">
                <div class="vignette"></div>
                <div class="focus-badge">In Focus</div>
            </div>
            <div class="p-6">
                <h3 class="text-2xl mb-2 text-[#2d4a3e] font-semibold">${bird.name}</h3>
                <p class="text-sm italic text-gray-500 mb-3">${bird.scientific}</p>
                <p class="text-[#3d3d3d]/70 font-light">${bird.description}</p>
            </div>
        </div>
    `;
}

// Create trip card HTML
function createTripCard(trip, index) {
  const delayClass = index < 6 ? `delay-${index + 1}` : "";
  return `
        <div class="trip-card fade-in ${delayClass}">
            <h3 class="text-2xl mb-4 text-[#2d4a3e] font-semibold">${trip.title}</h3>
            <div class="space-y-2 mb-4 text-sm text-[#3d3d3d]/70">
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7c65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <span>${trip.duration}</span>
                </div>
                <div class="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a7c65" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    <span>${trip.groupSize}</span>
                </div>
            </div>
            <p class="text-[#3d3d3d]/80 font-light">${trip.description}</p>
        </div>
    `;
}

// Render birds
function renderBirds() {
  const container = document.getElementById("birdCards");
  if (container) {
    const birds = birdsData[currentLanguage];
    container.innerHTML = birds.map((bird, index) => createBirdCard(bird, index)).join("");
    observeElements();
  }
}

// Render trips
function renderTrips() {
  const container = document.getElementById("tripCards");
  if (container) {
    const trips = tripsData[currentLanguage];
    container.innerHTML = `<div class="trips-grid">${trips.map((trip, index) => createTripCard(trip, index)).join("")}</div>`;
    observeElements();
  }
}

// Switch language
function switchLanguage(lang) {
  currentLanguage = lang;

  const langEn = document.getElementById("lang-en");
  const langId = document.getElementById("lang-id");
  if (langEn) langEn.classList.toggle("active", lang === "en");
  if (langId) langId.classList.toggle("active", lang === "id");

  document.querySelectorAll("[data-en][data-id]").forEach((el) => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });

  renderBirds();
  renderTrips();
}

// Intersection Observer for fade-in animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
function observeElements() {
  document.querySelectorAll(".fade-in:not(.visible)").forEach((el) => {
    observer.observe(el);
  });
}

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  switchLanguage("en");

  const langEn = document.getElementById("lang-en");
  const langId = document.getElementById("lang-id");
  if (langEn) langEn.addEventListener("click", () => switchLanguage("en"));
  if (langId) langId.addEventListener("click", () => switchLanguage("id"));

  observeElements();

  const heroSlider = $("#heroSlider");
  if (heroSlider.length) {
    heroSlider.slick({
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      fade: true,
      arrows: false,
      pauseOnHover: false,
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
