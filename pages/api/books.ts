import type { NextApiRequest, NextApiResponse } from 'next';

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

const booksData: Book[] = [
  {
    id: 1,
    bookName: 'Data Structures and Algorithms',
    author: 'Mark Allen Weiss',
    category: 'Computer Science',
    availability: 'Issued',
    location: 'Main Library - Shelf A2',
    borrower: 'John D',
    dueDate: '18-03-2026',
    publicationYear: 2021,
  },
  {
    id: 2,
    bookName: 'Operating System Concepts',
    author: 'Abraham Silberschatz',
    category: 'Computer Science',
    availability: 'Available',
    location: 'Main Library - Shelf B1',
    publicationYear: 2020,
  },
  {
    id: 3,
    bookName: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    category: 'Computer Science',
    availability: 'Issued',
    location: 'Main Library - Shelf A3',
    borrower: 'Sarah K',
    dueDate: '22-03-2026',
    publicationYear: 2022,
  },
  {
    id: 4,
    bookName: 'Database Management Systems',
    author: 'Raghu Ramakrishnan',
    category: 'Computer Science',
    availability: 'Available',
    location: 'Main Library - Shelf C1',
    publicationYear: 2019,
  },
  {
    id: 5,
    bookName: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
    category: 'Computer Science',
    availability: 'Available',
    location: 'Main Library - Shelf B2',
    publicationYear: 2021,
  },
  {
    id: 6,
    bookName: 'Artificial Intelligence: A Modern Approach',
    author: 'Stuart Russell',
    category: 'Artificial Intelligence',
    availability: 'Issued',
    location: 'Reference Section - R1',
    borrower: 'Mike R',
    dueDate: '25-03-2026',
    publicationYear: 2023,
  },
  {
    id: 7,
    bookName: 'Machine Learning',
    author: 'Tom Mitchell',
    category: 'Artificial Intelligence',
    availability: 'Available',
    location: 'Reference Section - R2',
    publicationYear: 2020,
  },
  {
    id: 8,
    bookName: 'Principles of Economics',
    author: 'N. Gregory Mankiw',
    category: 'Economics',
    availability: 'Available',
    location: 'Main Library - Shelf D1',
    publicationYear: 2021,
  },
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; data?: Book[]; message?: string }>
) {
  const { search, category } = req.query;

  try {
    let filteredBooks = [...booksData];

    if (search) {
      const searchTerm = (search as string).toLowerCase();
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.bookName.toLowerCase().includes(searchTerm) ||
          book.author.toLowerCase().includes(searchTerm)
      );
    }

    if (category) {
      filteredBooks = filteredBooks.filter(
        (book) => book.category.toLowerCase() === (category as string).toLowerCase()
      );
    }

    res.status(200).json({
      success: true,
      data: filteredBooks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching books data',
    });
  }
}
