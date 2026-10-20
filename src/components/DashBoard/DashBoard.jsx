import { useBookStore } from "../../store/store";

import { DashboardContainer, StatCard } from "./DashBoard.styled";

export const Dashboard = () => {
  const books = useBookStore((state) => state.books);

  const total = books.length;
  const unread = books.filter((book) => book.status === "unread").length;
  const reading = books.filter((book) => book.status === "reading").length;
  const read = books.filter((book) => book.status === "read").length;

  return (
    <DashboardContainer>
      <StatCard>
        <h3>Total Books</h3>
        <p>{total}</p>
      </StatCard>

      <StatCard>
        <h3>Unread</h3>
        <p>{unread}</p>
      </StatCard>

      <StatCard>
        <h3>Reading</h3>
        <p>{reading}</p>
      </StatCard>

      <StatCard>
        <h3>Read</h3>
        <p>{read}</p>
      </StatCard>
    </DashboardContainer>
  );
};
