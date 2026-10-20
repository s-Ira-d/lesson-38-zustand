import styled from "styled-components";

export const BookListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 18px;
`;

export const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  padding: 36px 20px;
  color: var(--color-muted);
  text-align: center;
  background: #fff;
  border: 1px dashed var(--color-border);
  border-radius: var(--radius-card);
`;
