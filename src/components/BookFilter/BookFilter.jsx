import { useBookStore } from "../../store/store";

import { FilterContainer } from "./BookFilter.styled";

export const BookFilter = () => {
  const filter = useBookStore((s) => s.filter);
  const search = useBookStore((s) => s.search);
  const setSearch = useBookStore((s) => s.setSearch);
  const setFilter = useBookStore((s) => s.setFilter);

  return (
    <FilterContainer>
      <input
        type="text"
        placeholder="Search books or authors..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All books</option>
        <option value="unread">Want to read</option>
        <option value="reading">Currently reading</option>
        <option value="read">Finished</option>
      </select>
    </FilterContainer>
  );
};
