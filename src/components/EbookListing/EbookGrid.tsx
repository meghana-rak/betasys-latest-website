import React from 'react';
import EbookCard from './EbookCard';
import Ebook1 from '../../assests/EbookList/ebook1.jpg';
import Ebook2 from '../../assests/EbookList/ebook2.jpg';
import Ebook3 from '../../assests/EbookList/ebook3.jpg';

const ebooks = [
  { id: 1, title: 'AI in Construction', image: Ebook1 },
  { id: 2, title: 'Agentic AI for Executives', image: Ebook2 },
  { id: 3, title: 'AI for manufacturing', image: Ebook3 },
  { id: 4, title: 'Mastering Generative AI with Databricks', image: Ebook1 },
  { id: 5, title: 'AI for Medical Device Manufacturing Firms', image: Ebook2 },
  { id: 6, title: 'AI for manufacturing', image: Ebook3 },
  { id: 7, title: 'AI in Construction', image: Ebook1 },
  { id: 8, title: 'Agentic AI for Executives', image: Ebook2 },
  { id: 9, title: 'AI for manufacturing', image: Ebook3 },
  { id: 10, title: 'AI in Construction', image: Ebook1 },
  { id: 11, title: 'Agentic AI for Executives', image: Ebook2 },
  { id: 12, title: 'AI for manufacturing', image: Ebook3 },
];

const EbookGrid = () => {
  return (
    <div className="mx-4 px-4 sm:px-8 mb-6 bg-white font-helvetica">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {ebooks.map((book) => (
          <EbookCard key={book.id} title={book.title} image={book.image} />
        ))}
      </div>
    </div>
  );
};

export default EbookGrid;
