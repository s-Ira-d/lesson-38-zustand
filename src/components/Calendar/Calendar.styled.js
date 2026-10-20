import styled from "styled-components";

export const CalendarCard = styled.section`
  margin: 0 0 28px;
  padding: 24px;
  background: #fffdf9;
  border: 1px solid #e9dfd5;
  border-radius: 18px;
  box-shadow: 0 3px 12px #70584d08;

  .fc {
    --fc-border-color: #eee5dc;
    --fc-page-bg-color: transparent;
    --fc-neutral-bg-color: #faf5ef;
    --fc-today-bg-color: #f7eee3;
    --fc-button-bg-color: #176657;
    --fc-button-border-color: #176657;
    --fc-button-hover-bg-color: #105448;
    --fc-button-hover-border-color: #105448;
    --fc-button-active-bg-color: #105448;
    --fc-button-active-border-color: #105448;

    color: #51463f;
    font-family: inherit;
  }

  .fc .fc-toolbar {
    gap: 12px;
    flex-wrap: wrap;
  }

  .fc .fc-toolbar-title {
    color: #70584d;
    font-size: 1.25rem;
    font-weight: 700;
  }

  .fc .fc-button {
    padding: 7px 11px;
    border-radius: 8px;
    box-shadow: none;
    font-size: 0.88rem;
  }

  .fc .fc-button:focus {
    box-shadow: 0 0 0 3px #17665725;
  }

  .fc .fc-col-header-cell-cushion {
    padding: 10px 4px;
    color: #89796e;
    font-weight: 600;
    text-decoration: none;
  }

  .fc .fc-daygrid-day-number {
    padding: 8px;
    color: #51463f;
    text-decoration: none;
  }

  .fc .fc-daygrid-day-frame {
    min-height: 88px;
    cursor: pointer;
  }

  .fc .fc-daygrid-day.fc-day-today .fc-daygrid-day-number {
    margin: 4px;
    padding: 4px 8px;
    border-radius: 7px;
    background: #a46b45;
    color: #fff;
  }

  .fc .fc-daygrid-day:hover {
    background: #f9f2e9;
  }

  .fc .fc-event {
    margin: 2px 4px;
    padding: 3px 5px;
    border-radius: 6px;
    font-size: 0.75rem;
    cursor: pointer;
  }

  .fc .fc-daygrid-more-link {
    color: #176657;
    font-size: 0.78rem;
  }
`;

export const CalendarHeading = styled.h2`
  margin: 0 0 6px;
  font-family: "Aref Ruqaa", serif;
  font-size: 25px;
  color: #70584d;
`;

export const CalendarLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
  color: #89796e;
  font-size: 13px;

  .legend-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #176657;
  }
`;

export const LogForm = styled.form`
  display: grid;
  grid-template-columns: minmax(180px, 1.5fr) minmax(120px, 0.7fr);
  gap: 14px;
  margin-top: 22px;
  padding: 18px;
  border: 1px solid #e9dfd5;
  border-radius: 14px;
  background: #faf5ef;

  .form-actions {
    display: flex;
    gap: 10px;
    align-items: center;
    grid-column: 1 / -1;
  }
`;

export const SelectedDate = styled.h3`
  grid-column: 1 / -1;
  margin: 0;
  color: #70584d;
  font-size: 17px;
`;

export const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  label {
    color: #70584d;
    font-size: 13px;
    font-weight: 700;
  }

  input,
  select {
    width: 100%;
    min-width: 0;
  }
`;

export const LogButton = styled.button`
  background: #176657;

  &:hover {
    background: #105448;
  }
`;

export const CancelButton = styled.button`
  background: #e8dfd6;
  color: #51463f;

  &:hover {
    background: #ddd0c4;
  }
`;
