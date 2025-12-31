import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Search, Filter, Book } from 'lucide-react';
import BookCard from '@/components/BookCard';
import SectionReveal from '@/components/SectionReveal';

interface Book {
  id: number;
  bookName: string;
  author: string;
  category: string;
  availability: string;
  location: string;
  borrower?: string;
  dueDate?: string;
  publicationYear: number;
}

export default function ELibrary() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, []);

  useEffect(() => {
    filterBooks();
  }, [books, searchTerm, selectedCategory]);

  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      const data = await response.json();
      if (data.success) {
        setBooks(data.data);
        setFilteredBooks(data.data);
      }
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  const filterBooks = () => {
    let filtered = [...books];

    if (searchTerm) {
      filtered = filtered.filter(
        (book) =>
          book.bookName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        (book) => book.category === selectedCategory
      );
    }

    setFilteredBooks(filtered);
  };

  const categories = ['All', ...new Set(books.map((book) => book.category))];

  return (
    <>
      <Head>
        <title>E-Library | Browse Books</title>
        <meta
          name="description"
          content="Browse our extensive collection of books, check availability, and find the resources you need."
        />
      </Head>

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-gradient">E-Library</span> Catalog
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore our extensive collection of books. Search, filter, and check
                real-time availability.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 mb-12 border border-gray-800">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by book name or author..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="pl-12 pr-10 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer min-w-[200px]"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </SectionReveal>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : filteredBooks.length > 0 ? (
            <>
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-400">
                  Showing <span className="text-white font-semibold">{filteredBooks.length}</span> books
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400">Available</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-400">Issued</span>
                  </div>
                </div>
              </div>

              <SectionReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredBooks.map((book) => (
                    <BookCard key={book.id} book={book} />
                  ))}
                </div>
              </SectionReveal>
            </>
          ) : (
            <div className="text-center py-20">
              <Book className="w-20 h-20 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No books found</h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
