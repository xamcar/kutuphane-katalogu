import { useState, useEffect } from 'react';
import { initialBooks } from '../Interfaces/bookData';
import BookForm from '../Components/BookForm';

export default function Dashboard() {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem('libraryBooks');
        return savedBooks ? JSON.parse(savedBooks) : initialBooks;
    });

    useEffect(() => {
        localStorage.setItem('libraryBooks', JSON.stringify(books));
    }, [books]);

    // Silme (Delete) İşlemi
    const handleDelete = (id) => {
        const filteredBooks = books.filter(book => book.id !== id);
        setBooks(filteredBooks);
    };

    // Güncelleme (Update) 
    const handleUpdateStatus = (id, newStatus) => {
        const updatedBooks = books.map(book =>
            book.id === id ? { ...book, status: newStatus } : book
        );
        setBooks(updatedBooks);
    };

    // Ekleme (Create) İşlemi
    const handleAddBook = (newBook) => {
        setBooks([newBook, ...books]);
    };
    // Arama ve Filtreleme State'leri
    const [searchTerm, setSearchTerm] = useState('');
    const [filterCategory, setFilterCategory] = useState('Tümü');
    const [filterStatus, setFilterStatus] = useState('Tümü');

    // Filtrelenmiş kitap listesi
    const filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = filterCategory === 'Tümü' || book.category === filterCategory;
        const matchesStatus = filterStatus === 'Tümü' || book.status === filterStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });

    return (
        <div className="max-w-5xl mx-auto p-6 mt-8">
            <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Kişisel Kütüphane Kataloğu</h1>
            <BookForm onAddBook={handleAddBook} />
            {/* Arama ve Filtreleme Çubuğu */}
            <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">

                {/* Arama Barı */}
                <div className="w-full md:w-1/2">
                    <input
                        type="text"
                        placeholder="Kitap adı veya yazar ara..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500"
                    />
                </div>

                {/* Kategoriler */}
                <div className="w-full md:w-1/2 flex gap-4">
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="w-1/2 border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500 bg-white"
                    >
                        <option value="Tümü">Tüm Kategoriler</option>
                        <option value="Türk Edebiyatı">Türk Edebiyatı</option>
                        <option value="Dünya Edebiyatı">Dünya Edebiyatı</option>
                        <option value="Tarih">Tarih</option>
                        <option value="Felsefe">Felsefe</option>
                        <option value="Bilim">Bilim</option>
                        <option value="Araştırma / İnceleme">Araştırma / İnceleme</option>
                        <option value="Tasavvuf">Tasavvuf</option>
                        <option value="Diğer">Diğer</option>
                    </select>

                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="w-1/2 border border-slate-300 p-2 rounded-md outline-none focus:border-blue-500 bg-white"
                    >
                        <option value="Tümü">Tüm Durumlar</option>
                        <option value="Okunacak">Okunacak</option>
                        <option value="Okunuyor">Okunuyor</option>
                        <option value="Okundu">Okundu</option>
                    </select>
                </div>
            </div>
            {/* Kitap listeleme (Read)*/}
            <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
                <h2 className="text-2xl font-semibold mb-6 text-slate-700">Koleksiyonum ({filteredBooks.length} Kitap)</h2>

                <div className="grid gap-4">
                    {filteredBooks.map(book => (
                        <div key={book.id} className="border border-slate-200 p-5 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center hover:shadow-sm transition-shadow">

                            <div className="mb-4 md:mb-0">
                                <h3 className="font-bold text-xl text-slate-800">{book.title}</h3>
                                <p className="text-sm text-slate-500 mt-1">
                                    <span className="font-medium text-slate-700">{book.author}</span> | Raf: {book.shelf} | {book.category}
                                </p>
                            </div>

                            <div className="flex gap-3 items-center">

                                {/* Kitap okuma durumu güncelleme */}
                                <select
                                    value={book.status}
                                    onChange={(e) => handleUpdateStatus(book.id, e.target.value)}
                                    className={`px-3 py-1 rounded-full text-sm font-medium border border-transparent hover:border-slate-300 outline-none cursor-pointer text-center
                    ${book.status === 'Okundu' ? 'bg-green-100 text-green-700' :
                                            book.status === 'Okunuyor' ? 'bg-blue-100 text-blue-700' :
                                                'bg-yellow-100 text-yellow-700'}`}
                                >
                                    <option value="Okunacak">Okunacak</option>
                                    <option value="Okunuyor">Okunuyor</option>
                                    <option value="Okundu">Okundu</option>
                                </select>

                                {/* Sil Butonu */}
                                <button
                                    onClick={() => handleDelete(book.id)}
                                    className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                                >
                                    Sil
                                </button>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}