import styled from "styled-components";

export const BookCard = styled.article`
  display: flex;
  align-items: stretch;
  gap: 22px;
  min-width: 0;
  padding: 20px;
  background: #fffdf9;
  border: 1px solid #e9dfd2;
  border-radius: 18px;
  box-shadow: 0 4px 14px rgba(76, 52, 36, 0.04);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 9px 24px rgba(76, 52, 36, 0.09);
  }
`;

export const BookCover = styled.div`
  flex-shrink: 0;
  width: 125px;
  height: 185px;
  overflow: hidden;
  border-radius: 7px;
  background: #eee2d3;
  box-shadow: 3px 5px 10px rgba(48, 31, 19, 0.18);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
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
    margin: 13px 0 8px;
    color: #4b3428;
    font-family: "Aref Ruqaa", serif;
    font-size: 25px;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }

  .author {
    margin: 0 0 20px;
    color: #978477;
    font-size: 15px;
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 6px 11px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;

  color: ${({ $status }) =>
    $status === "read"
      ? "#547454"
      : $status === "reading"
        ? "#996b39"
        : "#81716a"};

  background: ${({ $status }) =>
    $status === "read"
      ? "#e6efe2"
      : $status === "reading"
        ? "#f8ebd5"
        : "#f0e9e2"};
`;

export const BookActions = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;

  label {
    display: flex;
    flex-direction: column;
    gap: 6px;
    color: #887568;
    font-size: 12px;
  }

  select {
    max-width: 190px;
    padding: 9px 11px;
    font-size: 13px;
    cursor: pointer;
  }

  button.delete-button {
    padding: 9px 12px;
    background: transparent;
    border: 1px solid #e8d5ce;
    color: #a56d61;
    font-size: 13px;
  }

  button.delete-button:hover {
    background: #f8e9e4;
  }
`;
