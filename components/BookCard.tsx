'use client';

import { Book, Calendar, MapPin, User, Clock } from 'lucide-react';

interface BookCardProps {
  book: {
    bookName: string;
    author: string;
    category: string;
    availability: string;
    location: string;
    borrower?: string;
    dueDate?: string;
    publicationYear: number;
  };
}

export default function BookCard({ book }: BookCardProps) {
  const isAvailable = book.availability.toLowerCase() === 'available';

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 card-hover border border-gray-800 hover:border-primary/50">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{book.bookName}</h3>
          <p className="text-gray-400 text-sm">by {book.author}</p>
        </div>
        <div
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isAvailable
              ? 'bg-green-500/20 text-green-400'
              : 'bg-red-500/20 text-red-400'
          }`}
        >
          {book.availability}
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2 text-sm">
          <Book className="w-4 h-4 text-primary" />
          <span className="text-gray-400">{book.category}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="text-gray-400">{book.location}</span>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-gray-400">Published: {book.publicationYear}</span>
        </div>
      </div>

      {!isAvailable && book.borrower && book.dueDate && (
        <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
          <div className="flex items-center space-x-2 text-sm">
            <User className="w-4 h-4 text-orange-400" />
            <span className="text-gray-400">Borrower: {book.borrower}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="w-4 h-4 text-orange-400" />
            <span className="text-gray-400">Due Date: {book.dueDate}</span>
          </div>
        </div>
      )}
    </div>
  );
}
