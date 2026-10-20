import { useBookStore } from "../../store/store";

import {
  BookCard,
  BookCover,
  BookInfo,
  BookActions,
  StatusBadge,
} from "./BookItem.styled";

export const BookItem = ({ book }) => {
  const removeBook = useBookStore((state) => state.removeBook);
  const changeStatus = useBookStore((state) => state.changeStatus);

  const statusLabels = {
    unread: "Want to read",
    reading: "Currently reading",
    read: "Finished",
  };

  return (
    <BookCard>
      <BookCover>
        <img src={book.cover} alt={`Cover of ${book.title}`} />
      </BookCover>

      <BookInfo>
        <StatusBadge $status={book.status}>
          {statusLabels[book.status]}
        </StatusBadge>

        <h2>{book.title}</h2>
        <p className="author">{book.author}</p>

        <BookActions>
          <label>
            <span>Reading status</span>

            <select
              value={book.status}
              onChange={(e) => changeStatus(book.id, e.target.value)}
            >
              <option value="unread">Want to read</option>
              <option value="reading">Currently reading</option>
              <option value="read">Finished</option>
            </select>
          </label>

          <button
            type="button"
            className="delete-button"
            onClick={() => removeBook(book.id)}
          >
            Remove book
          </button>
        </BookActions>
      </BookInfo>
    </BookCard>
  );
};
