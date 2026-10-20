import styled from "styled-components";

export const DashboardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
  margin-bottom: 28px;
`;

export const StatCard = styled.div`
  padding: 20px 12px;
  text-align: center;
  background: #f3e9df;
  border: 1px solid #eadbcf;
  border-radius: 14px;

  h3 {
    margin-bottom: 12px;
    font-size: 20px;
  }

  p {
    margin: 0;
    font-size: 30px;
    color: #8d705c;
  }
`;
