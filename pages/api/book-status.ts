import type { NextApiRequest, NextApiResponse } from 'next';

interface BookStatus {
  id: number;
  bookName: string;
  author: string;
  status: string;
  location: string;
  dueDate?: string;
  publicationYear: number;
}

const bookStatusData: Record<number, BookStatus> = {
  1: {
    id: 1,
    bookName: 'Data Structures and Algorithms',
    author: 'Mark Allen Weiss',
    status: 'Issued',
    location: 'Main Library - Shelf A2',
    dueDate: '18-03-2026',
    publicationYear: 2021,
  },
  2: {
    id: 2,
    bookName: 'Operating System Concepts',
    author: 'Abraham Silberschatz',
    status: 'Available',
    location: 'Main Library - Shelf B1',
    publicationYear: 2020,
  },
  3: {
    id: 3,
    bookName: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    status: 'Issued',
    location: 'Main Library - Shelf A3',
    dueDate: '22-03-2026',
    publicationYear: 2022,
  },
  4: {
    id: 4,
    bookName: 'Database Management Systems',
    author: 'Raghu Ramakrishnan',
    status: 'Available',
    location: 'Main Library - Shelf C1',
    publicationYear: 2019,
  },
  5: {
    id: 5,
    bookName: 'Computer Networks',
    author: 'Andrew S. Tanenbaum',
    status: 'Available',
    location: 'Main Library - Shelf B2',
    publicationYear: 2021,
  },
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; data?: BookStatus; message?: string }>
) {
  const { id } = req.query;

  if (!id || typeof id !== 'string') {
    return res.status(400).json({
      success: false,
      message: 'Book ID is required',
    });
  }

  const bookId = parseInt(id);
  const bookStatus = bookStatusData[bookId];

  if (bookStatus) {
    res.status(200).json({
      success: true,
      data: bookStatus,
    });
  } else {
    res.status(404).json({
      success: false,
      message: 'Book not found',
    });
  }
}
