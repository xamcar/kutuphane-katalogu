export const initialBooks = [
  // --- Türk Edebiyatı ---
  { 
    id: crypto.randomUUID(), title: "Saatleri Ayarlama Enstitüsü", author: "Ahmet Hamdi Tanpınar", 
    shelf: "A-1", category: "Türk Edebiyatı", status: "Okundu" 
  },
  { 
    id: crypto.randomUUID(), title: "İnce Memed 1", author: "Yaşar Kemal", 
    shelf: "A-1", category: "Türk Edebiyatı", status: "Okundu" 
  },
  { 
    id: crypto.randomUUID(), title: "Tutunamayanlar", author: "Oğuz Atay", 
    shelf: "A-2", category: "Türk Edebiyatı", status: "Okunuyor" 
  },
  { 
    id: crypto.randomUUID(), title: "Kürk Mantolu Madonna", author: "Sabahattin Ali", 
    shelf: "A-2", category: "Türk Edebiyatı", status: "Okunacak" 
  },
  { 
    id: crypto.randomUUID(), title: "Dokuzuncu Hariciye Koğuşu", author: "Peyami Safa", 
    shelf: "A-3", category: "Türk Edebiyatı", status: "Okundu" 
  },

  // --- Tarih ---
  { 
    id: crypto.randomUUID(), title: "Devlet-i Aliyye", author: "Halil İnalcık", 
    shelf: "B-1", category: "Tarih", status: "Okundu" 
  },
  { 
    id: crypto.randomUUID(), title: "İmparatorluğun En Uzun Yüzyılı", author: "İlber Ortaylı", 
    shelf: "B-1", category: "Tarih", status: "Okunuyor" 
  },
  { 
    id: crypto.randomUUID(), title: "Kuruluş: Osmanlı Tarihini Yeniden Yazmak", author: "Halil İnalcık", 
    shelf: "B-2", category: "Tarih", status: "Okundu" 
  },
  { 
    id: crypto.randomUUID(), title: "Sultan Alp Arslan", author: "Osman Turan", 
    shelf: "B-2", category: "Tarih", status: "Okunacak" 
  },

  // --- Tasavvuf ---
  { 
    id: crypto.randomUUID(), title: "Mesnevi Tercümesi", author: "Şefik Can", 
    shelf: "C-1", category: "Tasavvuf", status: "Okunacak" 
  },
  { 
    id: crypto.randomUUID(), title: "Fihi Ma Fih", author: "Mevlânâ Celâleddîn-i Rûmî", 
    shelf: "C-1", category: "Tasavvuf", status: "Okunuyor" 
  },
  { 
    id: crypto.randomUUID(), title: "Yunus Emre Divanı", author: "Yunus Emre", 
    shelf: "C-2", category: "Tasavvuf", status: "Okundu" 
  },
  { 
    id: crypto.randomUUID(), title: "Mantıku't-Tayr", author: "Ferîdüddin Attâr", 
    shelf: "C-2", category: "Tasavvuf", status: "Okunacak" 
  },

  // --- Diğer ---
  { 
    id: crypto.randomUUID(), title: "Clean Code", author: "Robert C. Martin", 
    shelf: "D-1", category: "Diğer", status: "Okundu" 
  },
  { 
    id: crypto.randomUUID(), title: "Oyun Tasarımı Temelleri", author: "Ernest Adams", 
    shelf: "D-1", category: "Diğer", status: "Okunuyor" 
  }
];