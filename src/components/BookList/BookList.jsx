import { useMemo } from "react";
import { useBookStore } from "../../store/store";
import { BookItem } from "../BookItem/BookItem";

import { BookListContainer, EmptyMessage } from "./BookList.styled";

export const BookList = () => {
  const books = useBookStore((state) => state.books);
  const search = useBookStore((state) => state.search);
  const filter = useBookStore((state) => state.filter);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const searchInput =
        book.title.toLowerCase().includes(search.toLowerCase()) ||
        book.author.toLowerCase().includes(search.toLowerCase());

      const filteredStatuses = filter === "all" || book.status === filter;

      return searchInput && filteredStatuses;
    });
  }, [books, search, filter]);

  return (
    <BookListContainer>
      {filteredBooks.length === 0 ? (
        <EmptyMessage>Nothing found</EmptyMessage>
      ) : (
        filteredBooks.map((book) => <BookItem key={book.id} book={book} />)
      )}
    </BookListContainer>
  );
};
