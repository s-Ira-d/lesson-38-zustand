import { useState } from "react";
import { useBookStore } from "../../store/store";

import { FormContainer } from "./BookForm.styled";

export const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const addBook = useBookStore((state) => state.addBook);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !author.trim()) return;

    addBook(title.trim(), author.trim());

    setTitle("");
    setAuthor("");
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <input
        type="text"
        placeholder="Book name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button type="submit">Add Book</button>
    </FormContainer>
  );
};
