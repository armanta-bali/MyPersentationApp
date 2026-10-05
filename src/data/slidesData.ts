import type { Slide } from "../types/slide";

export const slidesData: Slide[] = [
  // ============ SLIDE 0: INTRO ============
  {
    id: "intro",
    type: "intro",
    emoji: "🚀",
    title: "Belajar JavaScript dari Nol",
    subtitle:
      "Panduan lengkap untuk pemula yang ingin menguasai bahasa pemrograman paling populer di dunia. Dari konsep dasar hingga siap membangun aplikasi web interaktif.",
    features: [
      {
        icon: "📚",
        title: "10 Materi Lengkap",
        description: "Dari variabel hingga async/await",
      },
      {
        icon: "💻",
        title: "Contoh Kode Praktis",
        description: "Belajar dengan contoh nyata",
      },
      {
        icon: "⚡",
        title: "Modern & Interaktif",
        description: "ES6+ dan best practices",
      },
    ],
  },

  // ============ SLIDE 1: MENGAPA JS ============
  {
    id: "why-js",
    type: "features",
    emoji: "💡",
    title: "Mengapa JavaScript?",
    subtitle:
      "JavaScript adalah bahasa pemrograman yang menjalankan web modern. Dari website sederhana hingga aplikasi kompleks, JavaScript ada di mana-mana.",
    features: [
      {
        icon: "🌐",
        title: "Web Development",
        description: "Membuat website interaktif dan dinamis",
      },
      {
        icon: "📱",
        title: "Mobile Apps",
        description: "React Native untuk iOS & Android",
      },
      {
        icon: "🖥️",
        title: "Backend",
        description: "Node.js untuk server-side",
      },
      {
        icon: "💼",
        title: "Karir Menjanjikan",
        description: "Salah satu skill paling dicari",
      },
    ],
    tip: "JavaScript digunakan oleh 98% website di dunia. Menguasai JS = membuka ribuan peluang karir!",
  },

  // ============ SLIDE 2: VARIABEL ============
  {
    id: "variables",
    type: "content",
    emoji: "📦",
    title: "1. Variabel",
    subtitle:
      'Variabel adalah "wadah" untuk menyimpan data. Di JavaScript modern, kita menggunakan const dan let.',
    code: {
      language: "javascript",
      code: `// const - tidak bisa diubah (immutable)
const nama = "Budi";
const PI = 3.14159;

// let - bisa diubah (mutable)
let umur = 25;
umur = 26; // ✓ OK

// ❌ JANGAN gunakan var (legacy)
var lama = "hindari ini";`,
    },
    tip: "Selalu gunakan const secara default. Hanya gunakan let jika nilai memang perlu diubah. Hindari var karena bisa menyebabkan bug.",
  },

  // ============ SLIDE 3: FUNCTION ============
  {
    id: "function",
    type: "content",
    emoji: "⚙️",
    title: "2. Function",
    subtitle:
      "Function adalah blok kode yang bisa kita pakai berulang kali. JavaScript mendukung berbagai cara membuat function.",
    code: {
      language: "javascript",
      code: `// Function Declaration (cara klasik)
function sapa(nama) {
  return \`Halo, \${nama}!\`;
}

// Arrow Function (ES6 - lebih ringkas)
const tambah = (a, b) => a + b;

// Default Parameter
const sapaDefault = (nama = "Teman") => {
  return \`Hai, \${nama}!\`;
};

console.log(sapa("Qwen")); // "Halo, Qwen!"
console.log(tambah(5, 3)); // 8`,
    },
    tip: "Arrow function sangat berguna untuk callback dan fungsi singkat. Untuk fungsi kompleks, gunakan function declaration agar lebih mudah dibaca.",
  },

  // ============ SLIDE 4: ARRAY ============
  {
    id: "array",
    type: "content",
    emoji: "📋",
    title: "3. Array & Method",
    subtitle:
      "Array menyimpan banyak data dalam satu variabel. JavaScript menyediakan method powerful untuk memanipulasi array.",
    code: {
      language: "javascript",
      code: `const buah = ["🍎", "🍌", "🍊"];

// Menambah elemen
buah.push("🍇");    // tambah di akhir
buah.unshift("🍓"); // tambah di awal

// Transformasi dengan map
const hasil = buah.map(b => \`Buah: \${b}\`);

// Filter elemen
const tanpaPisang = buah.filter(b => b !== "🍌");

// Reduce - menghitung total
const angka = [1, 2, 3, 4];
const total = angka.reduce((sum, n) => sum + n, 0); // 10`,
    },
    tip: "Method seperti map, filter, dan reduce adalah fondasi JavaScript modern. Kuasai ini untuk menulis kode yang clean!",
  },

  // ============ SLIDE 5: OBJECT & CLASS ============
  {
    id: "object-class",
    type: "content",
    emoji: "🎯",
    title: "4. Object & Class",
    subtitle:
      "Object dan Class digunakan untuk membuat struktur data yang kompleks dan reusable.",
    code: {
      language: "javascript",
      code: `// Object Literal
const user = {
  nama: "Budi",
  umur: 25,
  sapa() {
    return \`Halo, saya \${this.nama}\`;
  }
};

// Class (ES6)
class Person {
  constructor(nama, umur) {
    this.nama = nama;
    this.umur = umur;
  }
  sapa() {
    return \`Halo, \${this.nama}!\`;
  }
}

const budi = new Person("Budi", 25);
console.log(budi.sapa()); // "Halo, Budi!"`,
    },
    tip: "Gunakan object literal untuk data sederhana. Gunakan class jika perlu membuat banyak instance dengan struktur yang sama.",
  },

  // ============ SLIDE 6: DOM ============
  {
    id: "dom",
    type: "content",
    emoji: "🎨",
    title: "5. DOM Manipulation",
    subtitle:
      "DOM (Document Object Model) memungkinkan JavaScript berinteraksi dengan HTML. Ini adalah jantung dari frontend development.",
    code: {
      language: "javascript",
      code: `// Memilih elemen
const judul = document.querySelector('h1');
const tombol = document.getElementById('myBtn');

// Mengubah konten
judul.textContent = "Judul Baru";

// Mengubah style
judul.style.color = "blue";
judul.classList.add('active');

// Event Listener
tombol.addEventListener('click', () => {
  alert('Tombol diklik!');
});`,
    },
    tip: "Gunakan querySelector karena lebih fleksibel (bisa pakai CSS selector). Hindari manipulasi DOM berlebihan di dalam loop untuk performa optimal.",
  },

  // ============ SLIDE 7: ASYNC ============
  {
    id: "async",
    type: "content",
    emoji: "⏳",
    title: "6. Async/Await & Promises",
    subtitle:
      "JavaScript adalah single-threaded, tapi async/await memungkinkan kita menangani operasi asynchronous dengan elegan.",
    code: {
      language: "javascript",
      code: `// Async/Await (cara modern - lebih clean)
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}`,
    },
    tip: "Kapan Pakai Async? Saat mengambil data dari API, membaca file, atau operasi yang butuh waktu. Selalu gunakan try/catch untuk handle error!",
  },

  // ============ SLIDE 8: KESIMPULAN ============
  {
    id: "conclusion",
    type: "conclusion",
    emoji: "🎓",
    title: "Kesimpulan & Langkah Selanjutnya",
    subtitle:
      "Anda sudah mempelajari fondasi JavaScript! Sekarang saatnya praktik dan eksplorasi lebih lanjut.",
    listItems: [
      "Kuasai dasar: variabel, function, array, object",
      "Pahami DOM manipulation untuk interaksi web",
      "Latih async/await untuk handle API",
      "Buat proyek nyata: To-Do List, Weather App, dll",
      "Pelajari framework: React, Vue, atau Next.js",
      "Kontribusi ke open source & bangun portofolio",
    ],
    tip: "Coding adalah skill yang butuh latihan konsisten. Luangkan 30-60 menit setiap hari, dan dalam 3-6 bulan Anda akan melihat progres yang signifikan!",
  },

  // ============ SLIDE 9: CLOSING ============
  {
    id: "closing",
    type: "closing",
    emoji: "🚀",
    title: "Siap Mulai Coding?",
    subtitle:
      "Terima kasih sudah mengikuti presentasi ini! Semoga bermanfaat untuk perjalanan belajar JavaScript Anda.",
  },
];
