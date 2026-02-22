# 📚 Kişisel Kütüphane Kataloğu

Geniş fiziksel kitap arşivlerini dijital ortamda düzenli bir şekilde takip etmek ve organize etmek için geliştirilmiş, modern bir web (SPA) uygulaması. Uygulama, kullanıcının kitap eklemesine, durumlarını güncellemesine, silmesine ve gelişmiş filtreleme/arama seçenekleriyle koleksiyonunda kolayca gezinmesine olanak tanır. 

Veriler tarayıcının `localStorage` hafızasında tutulduğu için herhangi bir veritabanı kurulumuna ihtiyaç duymadan anında çalışır.

🚀 **Canlı Demo:** [Uygulamayı İncele](https://kutuphane-katalogu.netlify.app/)

## ✨ Özellikler

- **CRUD İşlemleri:** Yeni kitap ekleme, okuma durumunu güncelleme, listeleme ve silme.
- **Hızlı Arama:** Kitap adı ve yazar adına göre anlık metin tabanlı arama.
- **Detaylı Filtreleme:** Kitapları kategorilerine (Türk Edebiyatı, Tarih, Tasavvuf vb.) ve okuma durumlarına (Okundu, Okunuyor, Okunacak) göre filtreleme.
- **Veri Kalıcılığı:** Tarayıcı `localStorage` entegrasyonu sayesinde sayfa yenilense dahi veriler kaybolmaz.
- **Modern Arayüz:** Tailwind CSS ile tasarlanmış, tamamen duyarlı (responsive) ve kullanıcı dostu tasarım.

## 🛠️ Kullanılan Teknolojiler

- **Kütüphane:** React (Vite)
- **Stil:** Tailwind CSS (v4)
- **Dil:** JavaScript
- **Veri Yönetimi:** LocalStorage API

## 💻 Kendi Bilgisayarınızda Çalıştırmak İçin (Local Setup)

Projeyi kendi bilgisayarınızda çalıştırmak ve geliştirmek için aşağıdaki adımları izleyebilirsiniz:

### Gereksinimler
- Bilgisayarınızda **Node.js** yüklü olmalıdır.

### Kurulum Adımları

1. **Projeyi Klonlayın:**
   ```bash
   git clone [https://github.com/xamcar/kutuphane-katalogu.git](https://github.com/xamcar/kutuphane-katalogu.git)
2. **Proje Klasörüne Girin:**
   ```bash
   cd kutuphane-katalogu
3. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
4. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm run dev
5. Tarayıcıda Açın:
   Terminalde beliren yerel sunucu adresine giderek uygulamayı kullanmaya başlayabilirsiniz.

📂 Proje Yapısı:
src/
├── Components/
│   └── BookForm.jsx      # Yeni kitap ekleme formu ve kategori seçimleri
├── Interfaces/
│   └── bookData.js       # Başlangıç test verileri (Seed data)
├── Pages/
│   └── Dashboard.jsx     # Ana uygulama mantığı, listeleme, filtreleme ve arama 
├── App.jsx               # Ana bileşen
└── index.css             # Tailwind CSS entegrasyonu
