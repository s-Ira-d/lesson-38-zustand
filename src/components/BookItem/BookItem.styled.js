import styled from "styled-components";

export const BookCard = styled.article`
  display: flex;
  gap: 18px;
  min-width: 0;
  padding: 18px;
  background: #fff;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);
  transition:
    border-color 0.2s,
    transform 0.2s;

  &:hover {
    border-color: #c8d9cb;
    transform: translateY(-2px);
  }
`;

export const BookCover = styled.div`
  flex-shrink: 0;
  width: 112px;
  height: 166px;
  overflow: hidden;
  background: #edf1e9;
  border-radius: 9px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const BookInfo = styled.div`
  display: flex;
  flex: 1;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h2 {
    margin: 12px 0 5px;
    color: var(--color-text);
    font-size: clamp(17px, 2vw, 21px);
    line-height: 1.35;
    overflow-wrap: anywhere;
  }

  .author {
    margin: 0 0 18px;
    color: var(--color-muted);
    font-size: 13px;
  }
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 5px 9px;
  border-radius: 7px;
  font-size: 11px;
  font-weight: 700;

  color: ${({ $status }) =>
    $status === "read"
      ? "#276749"
      : $status === "reading"
        ? "#93621c"
        : "#65716a"};

  background: ${({ $status }) =>
    $status === "read"
      ? "#e5f4e8"
      : $status === "reading"
        ? "#fff1d7"
        : "#edf0ec"};
`;

export const BookActions = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 9px;

  label {
    display: flex;
    flex: 1 1 130px;
    flex-direction: column;
    gap: 5px;
    color: var(--color-muted);
    font-size: 11px;
  }

  select {
    padding: 8px;
    font-size: 12px;
  }

  button.delete-button {
    padding: 8px 10px;
    color: #a04444;
    background: #fff;
    border: 1px solid #efdada;
    font-size: 12px;
  }

  button.delete-button:hover {
    background: #fff0f0;
  }
`;
