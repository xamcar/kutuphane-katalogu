import { useState } from 'react';

export default function BookForm({ onAddBook }) {
  // Form içindeki verileri tutacağımız state
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    shelf: '',
    category: 'Türk Edebiyatı',
    status: 'Okunacak'
  });

  // İnputlara veri girildikçe state'i güncelleyen fonksiyon
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Form gönderildiğinde (Kaydet butonuna basıldığında) çalışacak fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    
    // Basit bir doğrulama: Kitap adı ve yazar boş olamaz
    if (!formData.title.trim() || !formData.author.trim()) {
      alert("Lütfen kitap adı ve yazar alanlarını doldurun.");
      return;
    }

    // Dashboard'dan gelen fonksiyona yeni kitabı id ekleyerek gönderiyoruz
    onAddBook({
      id: crypto.randomUUID(),
      ...formData
    });

    // İşlem bitince formu temizliyoruz
    setFormData({
      title: '',
      author: '',
      shelf: '',
      category: 'Türk Edebiyatı',
      status: 'Okunacak'
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100 mb-8">
      <h2 className="text-xl font-semibold mb-4 text-slate-700">Yeni Kitap Ekle</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Kitap Adı */}
        <div className="flex flex-col">
          <label className="text-sm text-slate-600 mb-1">Kitap Adı</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            className="border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Örn: İnce Memed"
          />
        </div>

        {/* Yazar */}
        <div className="flex flex-col">
          <label className="text-sm text-slate-600 mb-1">Yazar</label>
          <input 
            type="text" 
            name="author" 
            value={formData.author} 
            onChange={handleChange} 
            className="border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Örn: Yaşar Kemal"
          />
        </div>

        {/* Raf Bilgisi */}
        <div className="flex flex-col">
          <label className="text-sm text-slate-600 mb-1">Raf Bilgisi</label>
          <input 
            type="text" 
            name="shelf" 
            value={formData.shelf} 
            onChange={handleChange} 
            className="border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500"
            placeholder="Örn: A-1, B-3"
          />
        </div>

        {/* Kategori */}
        <div className="flex flex-col">
          <label className="text-sm text-slate-600 mb-1">Kategori</label>
          <select 
            name="category" 
            value={formData.category} 
            onChange={handleChange}
            className="border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500 bg-white"
          >
            <option value="Türk Edebiyatı">Türk Edebiyatı</option>
            <option value="Dünya Edebiyatı">Dünya Edebiyatı</option>
            <option value="Tarih">Tarih</option>
            <option value="Felsefe">Felsefe</option>
            <option value="Bilim">Bilim</option>
            <option value="Araştırma / İnceleme">Araştırma / İnceleme</option>
            <option value="Tasavvuf">Tasavvuf</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        {/* Okuma Durumu */}
        <div className="flex flex-col">
          <label className="text-sm text-slate-600 mb-1">Durum</label>
          <select 
            name="status" 
            value={formData.status} 
            onChange={handleChange}
            className="border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500 bg-white"
          >
            <option value="Okunacak">Okunacak</option>
            <option value="Okunuyor">Okunuyor</option>
            <option value="Okundu">Okundu</option>
          </select>
        </div>

        {/* Kaydet Butonu */}
        <div className="flex flex-col justify-end">
          <button 
            type="submit" 
            className="bg-slate-800 text-white p-2 rounded-md hover:bg-slate-700 transition-colors font-medium cursor-pointer"
          >
            Kitabı Ekle
          </button>
        </div>
      </form>
    </div>
  );
}