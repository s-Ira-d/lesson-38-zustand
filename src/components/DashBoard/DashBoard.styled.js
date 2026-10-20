import styled from "styled-components";

export const DashboardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  margin-bottom: 28px;
`;

export const StatCard = styled.div`
  padding: 21px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-card);
  box-shadow: var(--shadow-card);

  h3 {
    margin-bottom: 10px;
    color: var(--color-muted);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0;
  }

  p {
    margin: 0;
    color: var(--color-primary);
    font-size: clamp(26px, 3vw, 34px);
    font-weight: 750;
    line-height: 1.2;
  }
`;
