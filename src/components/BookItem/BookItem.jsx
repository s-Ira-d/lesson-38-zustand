import { useBookStore } from "../../store/store";

import {
  BookCard,
  BookCover,
  BookInfo,
  StatusBadge,
  BookActions,
} from "./BookItem.styled";

const statusLabels = {
  unread: "Want to read",
  reading: "Currently reading",
  read: "Finished",
};

export const BookItem = ({ book }) => {
  const changeStatus = useBookStore((state) => state.changeStatus);
  const removeBook = useBookStore((state) => state.removeBook);

  return (
    <BookCard>
      <BookCover>
        {book.cover ? (
          <img src={book.cover} alt={`Cover of ${book.title}`} />
        ) : (
          <div>No cover</div>
        )}
      </BookCover>

      <BookInfo>
        <StatusBadge $status={book.status}>
          {statusLabels[book.status] ?? book.status}
        </StatusBadge>

        <h2>{book.title}</h2>
        <p className="author">{book.author}</p>

        <BookActions>
          <label>
            Reading status
            <select
              value={book.status}
              onChange={(event) => changeStatus(book.id, event.target.value)}
            >
              <option value="unread">Want to read</option>
              <option value="reading">Currently reading</option>
              <option value="read">Finished</option>
            </select>
          </label>

          <button
            className="delete-button"
            type="button"
            onClick={() => {
              if (window.confirm(`Delete "${book.title}"?`)) {
                removeBook(book.id);
              }
            }}
          >
            Delete
          </button>
        </BookActions>
      </BookInfo>
    </BookCard>
  );
};
