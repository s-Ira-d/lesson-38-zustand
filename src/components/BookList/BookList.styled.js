import styled from "styled-components";

export const BookListContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: stretch;
  gap: 22px;
`;

export const EmptyMessage = styled.p`
  grid-column: 1 / -1;
  padding: 42px 20px;
  text-align: center;
  color: #978477;
  background: #f6eee5;
  border: 1px dashed #dfcdbb;
  border-radius: 18px;
`;
